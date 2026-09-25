# ✅ Checklist pre-commit

Pásalo **antes de cada `git commit`**. Si alguna respuesta es "no", ese commit todavía no está listo.

## 1. ¿Es UNA sola cosa?
- [ ] Este commit hace **una única funcionalidad o arreglo**, completo.
- [ ] Si tuviera que describirlo con "y" ("añade la tarjeta **y** arregla el CSS"), lo divido en dos commits.

## 2. ¿Sé exactamente qué estoy subiendo?
- [ ] He ejecutado `git status` y reconozco **todos** los archivos listados.
- [ ] He ejecutado `git diff` (o `git diff --staged`) y he **leído** los cambios línea a línea.
- [ ] No hay `console.log` de pruebas, código comentado "por si acaso", ni cambios accidentales.

## 3. ¿Funciona?
- [ ] He abierto/ejecutado el proyecto **después** de mi último cambio, no antes.
- [ ] No rompo nada de lo que ya existía.

## 4. ¿El mensaje cumple el contrato?
- [ ] Formato `verbo: explicación` (add, fix, update, remove, docs, style, refactor, test, chore).
- [ ] El verbo está en imperativo y completa la frase *"Este commit va a..."*.
- [ ] La explicación dice **qué** hace el cambio de verdad (no "cambios", no "arreglos varios").
- [ ] La primera línea no pasa de 72 caracteres.

## 5. ¿No subo basura?
- [ ] Ni `.env`, ni contraseñas, ni claves, ni tokens.
- [ ] Ni `node_modules`, ni carpetas de sistema (`.DS_Store`, `Thumbs.db`), ni archivos temporales.
- [ ] Ni copias tipo `index-viejo.html`, `final2.css`.

---

> 💡 Regla de oro: un commit es un mensaje a tu equipo (y a tu yo del futuro).
> Si dentro de 3 meses lees el mensaje y no sabes qué hacía ese commit, estaba mal hecho.
