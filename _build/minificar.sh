#!/bin/sh
# Minifica los ficheros que servimos. El fuente se queda legible y comentado
# en css/ y js/; lo publicado son las versiones .min, que es a lo que apuntan
# los HTML. Brotli ya comprime bien, pero un fichero minificado además evita
# los avisos de las auditorías y ahorra el parseo del navegador.
set -e
cd "$(dirname "$0")/.."
npx -y esbuild css/styles.css --minify --outfile=css/styles.min.css --log-level=error
npx -y esbuild js/main.js     --minify --outfile=js/main.min.js     --log-level=error
npx -y esbuild js/silk.js     --minify --outfile=js/silk.min.js     --log-level=error
npx -y esbuild js/cal.js      --minify --outfile=js/cal.min.js      --log-level=error
npx -y esbuild js/forms.js    --minify --outfile=js/forms.min.js    --log-level=error
