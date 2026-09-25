# 👥 Directorio del Equipo

Web colaborativa de la clase: cada persona del equipo añade **su propia tarjeta de perfil** siguiendo el flujo de trabajo profesional de Git. El objetivo no es la web (es una excusa 😄), el objetivo es que tu historial de commits y tu Pull Request queden **perfectos**.

## 🚀 Puesta en marcha 

```bash
git clone <URL-de-este-repo>
cd <carpeta-del-repo>
bash setup.sh        # instala el guardián de commits (obligatorio)
```

Para ver la web, abre `index.html` en el navegador. Sin servidores, sin instalaciones raras.

---

## 📜 El Contrato del Equipo

Trabajar en equipo con Git exige reglas. Estas son las nuestras y **no son negociables** (el repo tiene un guardián automático que rechaza los commits que no las cumplan 🤖):

### 1. Formato del mensaje de commit

```
verbo: mensaje explicativo de qué hace este cambio
```

| Verbo | Cuándo usarlo | Ejemplo |
|---|---|---|
| `add` | Añades algo nuevo | `add: crea la tarjeta de perfil de Ana` |
| `fix` | Arreglas un error | `fix: corrige el enlace roto a GitHub en la tarjeta` |
| `update` | Mejoras algo que ya existía | `update: cambia la foto de perfil por una más reciente` |
| `remove` | Eliminas algo | `remove: quita el dato de contacto duplicado` |
| `docs` | Tocas documentación | `docs: explica cómo ejecutar el proyecto en el README` |
| `style` | Cambios de formato/CSS sin lógica | `style: ajusta el espaciado de las tarjetas` |
| `refactor` | Reordenas código sin cambiar lo que hace | `refactor: extrae la creación de tarjetas a una función` |
| `test` | Añades o cambias pruebas | `test: comprueba que el perfil tiene todos los campos` |
| `chore` | Tareas de mantenimiento | `chore: actualiza el gitignore` |

**Reglas del mensaje:**
- El verbo va en **imperativo**: el mensaje completa la frase *"Este commit va a... "* → *"...crear la tarjeta de Ana"* ✅ (no "creada la tarjeta" ❌, no "creando" ❌).
- Después de los dos puntos, un mensaje **explicativo de verdad** (mínimo 10 caracteres). `add: cosas` no explica nada.
- Primera línea de **máximo 72 caracteres**. Si necesitas más, deja una línea en blanco y escribe un párrafo debajo.

### 2. Un commit = una funcionalidad terminada

- ❌ Un commit gigante con la tarjeta + el arreglo del CSS + el cambio del README.
- ❌ Commits de "bloques" a medias: `commit al final del día`, `subiendo lo que llevo`.
- ✅ Cada commit es **una sola cosa, completa y que funciona**. Si tu mensaje necesita la palabra "y", probablemente son dos commits.

### 3. Nunca se trabaja en `main`

- Toda funcionalidad nace en una rama con nombre **descriptivo del trabajo, nunca de la persona** (la autoría ya la dicen el commit y la issue): `feature/<nº-issue>-descripcion-corta`, en minúsculas y con guiones.
  - ✅ `feature/12-tarjeta-perfil` — la rama dice QUÉ se hace y a qué issue responde.
  - ❌ `feature/ana`, ❌ `rama-de-juan`, ❌ `mi-rama`, ❌ `prueba2`.
- A `main` solo se llega por **Pull Request** aprobado por otra persona.

### 4. Antes de CADA commit, pasa el checklist

Está en [CHECKLIST.md](CHECKLIST.md). Léelo, imprímelo, tatúatelo.

### 5. La basura no se sube

`.env`, `node_modules`, archivos del sistema, contraseñas, `copia-final-FINAL2.html`... Para eso existe el `.gitignore`. Si dudas, pregunta **antes** de hacer `git add`.

---

## 🧭 Tu misión, paso a paso

1. **Acepta tu issue.** Tienes una issue asignada con tu nombre en la pestaña *Issues*.
2. **Actualiza y crea tu rama:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/12-tarjeta-perfil   # 12 = el número de TU issue
   ```
3. **Crea tu perfil:** copia `perfiles/profe.js` como `perfiles/tunombre.js` y rellena tus datos.
4. **Registra tu perfil:** añade `"tunombre"` a la lista de `perfiles/lista.js`.
5. **Comprueba que funciona:** abre `index.html` y busca tu tarjeta.
6. **Pasa el [checklist](CHECKLIST.md), revisa tu diff y haz commit:**
   ```bash
   git diff                       # ¿qué estoy cambiando exactamente?
   git add perfiles/tunombre.js perfiles/lista.js
   git commit -m "add: crea la tarjeta de perfil de TuNombre"
   ```
7. **Sube tu rama y abre tu Pull Request:**
   ```bash
   git push -u origin feature/12-tarjeta-perfil
   ```
   GitHub te mostrará un botón para abrir el PR. Rellena la plantilla **entera**.
8. **Revisa el PR de un compañero** cuando te toque (mira los criterios en la plantilla del PR).
9. Cuando tu PR tenga una aprobación y el visto bueno del tech lead → **merge** 🎉. Refresca la web y ahí estás.

---

## 🤖 El guardián de commits

Este repo usa un hook `commit-msg` (en [.githooks/commit-msg](.githooks/commit-msg)). Si tu mensaje no cumple el contrato, **el commit no se crea** y el guardián te explica qué está mal. No es un castigo: es el mismo tipo de control que encontrarás en cualquier equipo profesional (commitlint, husky, CI...).

¿No te funciona? Seguramente no ejecutaste `bash setup.sh` tras clonar.
