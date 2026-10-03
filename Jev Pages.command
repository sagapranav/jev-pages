#!/bin/bash
# Double-click to start Jev Pages (opens it in your browser).
cd "$(dirname "$0")"
exec python3 serve.py
