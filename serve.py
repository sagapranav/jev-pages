#!/usr/bin/env python3
"""Jev Pages server: serves jev-pages.html and its data files, and relays its calls to the Jev API.

The Jev API refuses requests made directly from a web page, so the page sends
them to /relay here and this script forwards them.

- Listens on 127.0.0.1 only (nothing else on the network can reach it).
- Forwards only to the hosts in ALLOWED_HOSTS.
- Never logs or stores the API key; it passes the Authorization header through.

Run:  python3 serve.py        (opens http://localhost:8787 in your browser)
Stop: Ctrl+C
"""
import http.server
import json
import os
import sys
import threading
import urllib.error
import urllib.request
import webbrowser
from urllib.parse import urlparse

PORT = int(os.environ.get("JEV_PORT", "8787"))  # keep this fixed: the saved key is tied to it
HERE = os.path.dirname(os.path.abspath(__file__))
PAGE = os.path.join(HERE, "jev-pages.html")
ALLOWED_HOSTS = {"api.typesafe.ai", "thejevai.com"}


class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split("?", 1)[0]
        data = os.path.join(HERE, "data", os.path.basename(path))  # basename only, so no path tricks
        if path in ("/", "/index.html", "/jev-pages.html"):
            with open(PAGE, "rb") as f:
                self._send(200, f.read(), "text/html; charset=utf-8")
        elif path.startswith("/data/") and path.endswith(".js") and os.path.isfile(data):
            with open(data, "rb") as f:
                self._send(200, f.read(), "text/javascript; charset=utf-8")
        elif path == "/relay/health":
            self._send(200, b'{"ok":true}', "application/json")
        else:
            self._send(404, b"not found", "text/plain")

    def do_POST(self):
        if self.path != "/relay":
            return self._send(404, b"not found", "text/plain")
        target = self.headers.get("X-Target-URL", "")
        u = urlparse(target)
        if u.scheme != "https" or u.hostname not in ALLOWED_HOSTS:
            msg = {"message": f"relay refuses to forward to {target!r}; allowed hosts: {sorted(ALLOWED_HOSTS)}"}
            return self._send(400, json.dumps(msg).encode(), "application/json")
        body = self.rfile.read(int(self.headers.get("Content-Length") or 0))
        req = urllib.request.Request(target, data=body, method="POST", headers={
            "Authorization": self.headers.get("Authorization", ""),
            "Content-Type": "application/json",
            "User-Agent": "jev-pages-relay/1",
        })
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                self._send(r.status, r.read(), r.headers.get("Content-Type", "application/json"))
        except urllib.error.HTTPError as e:
            self._send(e.code, e.read(), e.headers.get("Content-Type", "application/json"))
        except Exception as e:  # network/DNS/TLS failure
            msg = {"message": f"relay could not reach {u.hostname}: {e}"}
            self._send(502, json.dumps(msg).encode(), "application/json")

    def _send(self, code, body, ctype):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):  # request line only, never headers
        sys.stderr.write("%s  %s\n" % (self.log_date_time_string(), fmt % args))


def main():
    url = f"http://localhost:{PORT}/"
    try:
        srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    except OSError:
        print(f"Port {PORT} is busy; Jev Pages is probably already running at {url}")
        if "--no-browser" not in sys.argv:
            webbrowser.open(url)
        return
    print(f"Jev Pages running at {url}  (Ctrl+C to stop)")
    if "--no-browser" not in sys.argv:
        threading.Timer(0.5, webbrowser.open, [url]).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
