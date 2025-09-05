const readline = require("readline");

// Se crea la interfaz para leer desde consola
function ejecutarRegistro() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("=== Inicio del sistema ===");
  console.time("ProcesoPrincipal");

  let usuarios = [];

// Función para registrae el acceso de cada usuario
function accesoUsuario(usuario) {
    console.count(`Acceso de usuario ${usuario}`);
  }

  function pedirUsuario() {
    rl.question("Ingresa un nombre de usuario (o escribe 'salir' para terminar): ", (nombre) => {
      if (nombre.toLowerCase() === "salir") {
        console.warn("Capacidad de usuarios alcanzando el límite");
        console.error("Error: No se pudo conectar a la base de datos");

        console.table(usuarios);

        console.timeEnd("ProcesoPrincipal");
        console.log("=== Fin del sistema ===");

        rl.close();
        return;
      }

      accesoUsuario(nombre);

      let rol = usuarios.length % 2 === 0 ? "Admin" : "User";
      usuarios.push({ nombre: nombre, rol: rol });

      pedirUsuario();
    });
  }

  pedirUsuario();
}

module.exports = { ejecutarRegistro };
