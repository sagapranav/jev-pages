// Jev Pages: product colours. When the notes name a flavour or material, the page can take its colour.
// Jev picks one by name; the regex is only used by the offline preview (no key).
// To add one: [/\bword\b/, 'name', 'main colour', 'second colour']

const FLAVOURS = [
  [/\bpeach(?:es|y)?\b/, 'peach', '#ffa47a', '#ff5e62'], [/\bapricots?\b/, 'apricot', '#fbb168', '#e8743b'], [/\bmangos?(?:es)?\b/, 'mango', '#ffb627', '#ff7b00'],
  [/\b(?:blood oranges?|oranges?|clementines?|tangerines?)\b/, 'orange', '#ff9a3c', '#ff5f1f'], [/\b(?:lemons?|lemonade)\b/, 'lemon', '#ffe45c', '#f5b700'],
  [/\b(?:limes?|key lime)\b/, 'lime', '#b5e655', '#3f8f2f'], [/\byuzu\b/, 'yuzu', '#f7d44c', '#c79a00'], [/\bgrapefruit\b/, 'grapefruit', '#ff8a7a', '#e94e4e'],
  [/\bcherr(?:y|ies)\b/, 'cherry', '#d7263d', '#7a0f1e'], [/\bstrawberr(?:y|ies)\b/, 'strawberry', '#ff4f6d', '#ffc2cf'], [/\braspberr(?:y|ies)\b/, 'raspberry', '#e30b5c', '#ff9ec4'],
  [/\bblueberr(?:y|ies)\b/, 'blueberry', '#4f5bd5', '#1e2a78'], [/\bgrapes?\b/, 'grape', '#7b3fa0', '#c9a7e4'], [/\bwatermelon\b/, 'watermelon', '#ff5a6e', '#2fa36b'],
  [/\bpassion ?fruit\b/, 'passion fruit', '#8e2c6e', '#f5b700'], [/\bpineapple\b/, 'pineapple', '#ffd23f', '#3c9d4e'], [/\bcoconut\b/, 'coconut', '#efe6d8', '#7a5134'],
  [/\b(?:matcha|green tea)\b/, 'matcha', '#8db255', '#dfe9c8'], [/\b(?:pepper|spear)?mint\b/, 'mint', '#3eb489', '#c9f1df'], [/\bginger\b/, 'ginger', '#e0a43a', '#8a5a1b'],
  [/\bhoney\b/, 'honey', '#f2a900', '#7a4a00'], [/\blavender\b/, 'lavender', '#b497d6', '#5a3d8a'], [/\b(?:rose|hibiscus)\b/, 'rose', '#f28da5', '#b3264f'],
  [/\bvanilla\b/, 'vanilla', '#f3e5ab', '#a07a3a'], [/\b(?:chocolate|cacao|cocoa)\b/, 'chocolate', '#6b3e2e', '#d7a77a'], [/\b(?:caramel|toffee)\b/, 'caramel', '#c8823b', '#6b3a17'],
  [/\b(?:coffee|espresso|cold brew|roast\w*)\b/, 'coffee', '#7a4b2a', '#d9b48f'], [/\bpistachio\b/, 'pistachio', '#93c572', '#6b4f2a'], [/\bavocado\b/, 'avocado', '#6b8e23', '#d8e39a'],
  [/\bcola\b/, 'cola', '#5a2a1a', '#d72e2e'], [/\bberr(?:y|ies)\b/, 'berry', '#b0245e', '#ff8fb8'], [/\b(?:sea salt|ocean|seaweed)\b/, 'sea', '#2b6c8f', '#cfe6f0'],
  [/\b(?:clay|terracotta|ceramics?|pottery)\b/, 'clay', '#c8643b', '#efd9c4'], [/\b(?:oak|walnut|timber|wood\w*)\b/, 'wood', '#9a6a3d', '#e8d5b9'],
];
