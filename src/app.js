const { ejecutarRegistro } = require("./registro-sistema.js");
const { iniciarCLI } = require("./cli-tool.js");
const { mostrarInformacion } = require("./system-monitor.js");

function mostrarMenu() {
  console.log("\n=== Menú Principal ===");
  console.log("1. Ejecutar Registro");
  console.log("2. Mostrar Monitor");
  console.log("3. Iniciar CLI");
  console.log("4. Salir");
  process.stdout.write("Selecciona una opción: ");
}

mostrarMenu();

process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
  const opcion = data.trim();

  switch (opcion) {
    case "1":
      ejecutarRegistro();
      break;

    case "2":
      mostrarInformacion();
      mostrarMenu();
      break;

    case "3":
      iniciarCLI();
      break;

    case "4":
      console.log("Saliendo del sistema...");
      process.exit(0);
      break;

    default:
      console.log(" Opción no válida, intenta de nuevo.");
      mostrarMenu();
  }
});
