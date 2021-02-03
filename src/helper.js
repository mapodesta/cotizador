export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

export function calcularTipoPlan(plan) {
  let incrementoPlan;
  switch (plan) {
    case "basico":
      incrementoPlan = 1.2;
      break;
    case "completo":
      incrementoPlan = 1.5;
      break;

    default:
      break;
  }

  return incrementoPlan;
}

export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
