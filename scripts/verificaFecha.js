var numSerieFecha = 45020.4547577546;
var fecha = new Date((numSerieFecha - 25569) * 86400 * 1000);

// Obtener el día, mes y año de la fecha
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1; // Agregar 1 porque los meses comienzan en 0
var anio = fecha.getFullYear();

// Crear un objeto de fecha para la fecha actual
var fechaActual = new Date();

// Obtener el día, mes y año de la fecha actual
var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth() + 1; // Agregar 1 porque los meses comienzan en 0
var anioActual = fechaActual.getFullYear();

// Comparar los valores de día, mes y año
if (dia === diaActual && mes === mesActual && anio === anioActual) {
  console.log("La fecha coincide con la fecha actual");
} else {
  console.log("La fecha no coincide con la fecha actual");
}