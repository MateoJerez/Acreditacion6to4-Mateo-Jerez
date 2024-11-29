function calcularPrecioConDescuento(precioOriginal, porcentajeDescuento) {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    return precioFinal;
}


let precioOriginal = 1000; 
let porcentajeDescuento = 20; 
let precioFinal = calcularPrecioConDescuento(precioOriginal, porcentajeDescuento);

console.log("El precio final con descuento es: $" + precioFinal.toFixed(2));