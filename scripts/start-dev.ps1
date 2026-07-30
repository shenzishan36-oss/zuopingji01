$ErrorActionPreference = "Stop"
$node = "C:\Users\86173\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
& $node "node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 5173
