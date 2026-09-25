// App del Directorio del Equipo.
// Cada perfil es un archivo en perfiles/ que llama a registrarPerfil({...}).
// Los alumnos NO tocan este archivo: solo crean su perfil y lo apuntan en perfiles/lista.js.

function registrarPerfil(perfil) {
  const contenedor = document.getElementById("tarjetas");

  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = perfil.emoji || "🙂";

  const nombre = document.createElement("h2");
  nombre.textContent = perfil.nombre || "Sin nombre";

  const rol = document.createElement("p");
  rol.className = "rol";
  rol.textContent = perfil.rol || "Dev en construcción";

  tarjeta.append(avatar, nombre, rol);

  const datos = [
    ["Lenguaje favorito", perfil.lenguajeFavorito],
    ["Dato curioso", perfil.datoCurioso],
  ];
  for (const [etiqueta, valor] of datos) {
    if (!valor) continue;
    const p = document.createElement("p");
    p.className = "dato";
    const strong = document.createElement("strong");
    strong.textContent = etiqueta + ": ";
    p.append(strong, valor);
    tarjeta.append(p);
  }

  if (perfil.github) {
    const enlace = document.createElement("a");
    enlace.href = "https://github.com/" + perfil.github;
    enlace.textContent = "@" + perfil.github;
    enlace.target = "_blank";
    enlace.rel = "noopener";
    tarjeta.append(enlace);
  }

  contenedor.append(tarjeta);
  actualizarContador();
}

function cargarPerfiles(lista) {
  for (const nombre of lista) {
    const script = document.createElement("script");
    script.src = "perfiles/" + nombre + ".js";
    script.onerror = () =>
      console.warn(`⚠️ No se encontró perfiles/${nombre}.js — ¿está bien escrito en lista.js?`);
    document.body.append(script);
  }
}

function actualizarContador() {
  const total = document.querySelectorAll(".tarjeta").length;
  document.getElementById("contador").textContent =
    total === 1 ? "1 persona en el equipo" : `${total} personas en el equipo`;
}
