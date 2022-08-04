console.log('Bienvenidos al simulador interactivo \nCotizador de impresiones en gran formato:');

//valor del metro cudrado de cada material:
const valorMetroLinealVinilo = 13600;
const valorMetroLinealLona = 15000;
const valorMetroCuadradoLienzo = 75000;

//valor del metro lineal de los tubos de aluminio que se usa para el pendon publisictario:
const valorMetroTuboAluminio = 10000;

//valor de la impresión por metro cuadrado en el plotter de impresión en gran formato HP-Latex-540:
const valorMetroCuadradoPloteo = 25000;
const valorMinimoPloteo = 10000;
const valorMetroPloteoLienzo = 50000;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroLinealCorte = 7800;

//variable impresion cotizada
let objeto = {};

//funciones:

function validarMedidas() {
    // variable que me trae el material seleccionado
    let material = document.getElementById('material').value;
    // variable que me trae el elemento de id= ancho
    let ancho = parseInt(document.getElementById('ancho').value);
    // variable que me trae el elemento de id= alto
    let alto = parseInt(document.getElementById('alto').value);
    // variable que guarda el tamaño minimo
    let medidaMinima = 20;
    // variable que guarda el ancho máximo permitido
    let anchoMaximo = 130;
    if (ancho <= anchoMaximo || alto <= anchoMaximo) {
        precioProducto(ancho, alto, material);
    } else {
        alert(`Alguna de las dos medidas debe ser menor o igual a ${anchoMaximo}`);
    }

}

function precioProducto(ancho, alto, material) {
    // calculo el precio del ploteo
    let precioPloteo = (Math.round(((ancho / 100) * (alto / 100) * valorMetroCuadradoPloteo) / 1000)) * 1000;
    if (precioPloteo < valorMinimoPloteo) {
        precioPloteo = valorMinimoPloteo;
    }
    // calculo el precio del material
    let precioMaterial = 0;
    if (ancho > 130) {
        precioMaterial = (ancho / 100) * (valorMetroLinealVinilo);
    } else if (alto > 130) {
        precioMaterial = (alto / 100) * (valorMetroLinealVinilo);
    } else if (ancho < alto) {
        precioMaterial = (ancho / 100) * (valorMetroLinealVinilo);
    } else {
        precioMaterial = (alto / 100) * (valorMetroLinealVinilo);
    }
    precioMaterial = (Math.round(precioMaterial / 1000)) * 1000;
    // sumamos en precio del ploteo mas el precio del material
    let precio = precioMaterial + precioPloteo;
    // variable que me trae el elemento id= resultado
    let resultado = document.getElementById('resultado');
    // le asigno el nuevo valor al elemento de id resultado
    resultado.innerHTML = `El precio de tu ${material} es: $${precio} Cop`;
    // variable que me trae el parrafo del mensaje del iva
    let mensajeIva = document.getElementById('mensajeIva');
    // le cambio el display al mensaje iva
    mensajeIva.className = 'visible';
    objeto = { material: material, ancho: ancho, alto: alto, costo: precio };

}

document.getElementById('ancho').addEventListener('input', validarMedidas);
document.getElementById('alto').addEventListener('input', validarMedidas);

let boton = document.getElementById('button');
boton.addEventListener('click', listarImpresionesCotizadas);

// lista de impresiones cotizadas
function listarImpresionesCotizadas() {
    let cuerpo = document.getElementById('cuerpo');
    // creamos elemento de tipo li
    let li = document.createElement('li');
    // le asignamos contenido al li
    li.innerHTML = `${objeto.material} de ${objeto.ancho}cm de ancho por ${objeto.alto}cm de alto - Precio: <b>$${objeto.costo}</b> `;
    //agregamos el elemento al padre
    cuerpo.append(li);

}

