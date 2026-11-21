#!/usr/bin/env bash
# Importa nella repository il codice scaricato da Figma Make e la prepara per Vercel.
# Uso:  ./scripts/importa-da-figma-make.sh ~/Downloads/MOTUS.zip
#       ./scripts/importa-da-figma-make.sh ~/Downloads/cartella-gia-scompattata
set -euo pipefail

SRC="${1:-}"
if [ -z "$SRC" ] || [ ! -e "$SRC" ]; then
  echo "Indica lo zip (o la cartella) scaricato da Figma Make."
  echo "Esempio: ./scripts/importa-da-figma-make.sh ~/Downloads/MOTUS.zip"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [ -d "$SRC" ]; then
  cp -R "$SRC"/. "$TMP"/
else
  unzip -q "$SRC" -d "$TMP"
fi

# Se lo zip contiene una sola cartella, il progetto è lì dentro.
APP="$TMP"
while [ ! -f "$APP/package.json" ]; do
  N=$(find "$APP" -mindepth 1 -maxdepth 1 -not -name '__MACOSX' -not -name '.DS_Store' | wc -l | tr -d ' ')
  D=$(find "$APP" -mindepth 1 -maxdepth 1 -type d -not -name '__MACOSX' | head -n 1)
  if [ "$N" = "1" ] && [ -n "$D" ]; then APP="$D"; else break; fi
done
if [ ! -f "$APP/package.json" ]; then
  echo "Non trovo package.json nel materiale scaricato: non sembra il codice di Figma Make."
  exit 1
fi

echo "→ Copio il codice nella repository"
rsync -a --exclude '.git' --exclude 'node_modules' --exclude '__MACOSX' --exclude '.DS_Store' \
      --exclude 'scripts/importa-da-figma-make.sh' --exclude 'vercel.json' --exclude '.gitignore' --exclude 'README.md' --exclude '.gitattributes' --exclude '*.zip' \
      "$APP"/ "$ROOT"/

# README del progetto: quello di Figma Make viene tenuto come README-figma-make.md
if [ -f "$APP/README.md" ]; then cp "$APP/README.md" "$ROOT/README-figma-make.md"; fi

cd "$ROOT"

# Cartella di uscita della build: Figma Make di solito usa "build", Vite di suo usa "dist".
OUT="dist"
CFG=$(ls vite.config.* 2>/dev/null | head -n 1 || true)
if [ -n "$CFG" ]; then
  FOUND=$(sed -nE "s/.*outDir[^'\"]*['\"]([^'\"]+)['\"].*/\\1/p" "$CFG" | head -n 1)
  if [ -n "$FOUND" ]; then OUT="$FOUND"; fi
fi

cat > vercel.json <<JSON
{
  "\$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "$OUT",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
JSON
echo "→ vercel.json scritto (cartella di uscita: $OUT)"

echo "→ Installo le dipendenze"
npm install --no-audit --no-fund

echo "→ Provo la build"
npm run build

if [ ! -f "$OUT/index.html" ]; then
  echo "La build è finita ma non trovo $OUT/index.html: controlla outDir in $CFG e outputDirectory in vercel.json."
  exit 1
fi

echo
echo "Fatto. La build funziona e sta in ./$OUT"
echo "Prossimi passi:"
echo "  git add -A && git commit -m \"Wireframe Motus da Figma Make\" && git push"
echo "  poi importa la repository su https://vercel.com/new  (oppure: npx vercel --prod)"
