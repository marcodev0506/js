function calcularPrecioPc(cpu) {
    let precio;
    switch (cpu) {
      case "i5":
        precio = 8000;
        break;
      case "ryzen7":
        precio = 5000;
        break;
      default:
        return "No disponible";
    }
    return precio;
  }
  // Ejemplo de uso:
  const cpuSeleccionada = "i5";
  const precioFinal = calcularPrecioPc(cpuSeleccionada);
  console.log("El precio del PC es:", precioFinal);