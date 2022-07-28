console.log('Eventos');

//valor del metro cudrado de cada material:
const metroCuadradoVinilo = 13600;
const metroCuadradoLona = 15000;
const metroCuadradoLienzo = 75000;

//valor del metro lineal de los tubos de aluminio que se usa para el pendon publisictario:
const valorMetroTuboAluminio = 10000;

//valor de la impresión por metro cuadrado en el plotter de impresión en gran formato HP-Latex-540:
const valorMetroImpresion = 25000;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroCorte = 10000;

//objeto producto cotizado
const producto = {}

//lista de impresiones cotizadas
const listaImpresiones = [];

//funciones:

function costoVinilo() {
    // variable que me trae el elemento de id= ancho
    let ancho = document.getElementById('ancho').value;
    // variable que me trae el elemento de id= alto
    let alto = document.getElementById('alto').value;
    // calculo el precio
    const precio = Math.round((ancho/100) * (alto/100) * (metroCuadradoVinilo + valorMetroImpresion));
    // variable que me trae el elemento id= resultado
    let resultado = document.getElementById('resultado');
    // le asigno el nuevo valor al elemento de id resultado
    resultado.innerHTML = `El precio de tu vinilo es: $${precio} Cop`;
    resultado.className = 'total';
    listaImpresiones.push({ material: 'Vinilo', ancho: ancho, alto: alto, costo: precio});
}

let boton = document.getElementById('button');
ancho.addEventListener('input', costoVinilo);
alto.addEventListener('input', costoVinilo);