#!/usr/bin/env bash
# Instala el guardián de commits. Ejecútalo UNA vez después de clonar: bash setup.sh

set -e
cd "$(dirname "$0")"

if [ ! -d .git ]; then
  echo "❌ Esto no parece un repositorio Git. ¿Has clonado el proyecto?"
  exit 1
fi

chmod +x .githooks/commit-msg
git config core.hooksPath .githooks

echo "🤖 Guardián de commits instalado."
echo "   A partir de ahora, todo commit que no cumpla el Contrato del Equipo será rechazado."
echo ""
echo "Pruébalo si quieres (fallará a propósito):"
echo "   git commit --allow-empty -m \"cambios\""
