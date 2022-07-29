console.log('Bienvenidos al simulador interactivo \nCotizador de impresiones en gran formato:');

//valor del metro cudrado de cada material:
const valorMetroLinealVinilo = 13600;
const valorMetroLinealLona = 15000;
const valorMetroCuadradoLienzo = 75000;

//valor del metro lineal de los tubos de aluminio que se usa para el pendon publisictario:
const valorMetroTuboAluminio = 10000;

//valor de la impresión por metro cuadrado en el plotter de impresión en gran formato HP-Latex-540:
const valorMetroCuadradoPloteo = 25000;
const valorMetroPloteoLienzo = 50000;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroLinealCorte = 7800;

//objeto producto cotizado
const producto = {}

//lista de impresiones cotizadas
const listaImpresiones = [];

//funciones:

function validarMedidas() {
    // variable que me trae el material seleccionado
    let material = document.getElementById('material').value;
    // variable que me trae el elemento de id= ancho
    let ancho = parseInt(document.getElementById('ancho').value);
    // variable que me trae el elemento de id= alto
    let alto = parseInt(document.getElementById('alto').value);
    if (ancho >= 20 && alto >= 20) {
        if (ancho <= 130 || alto <= 130) {
            precioProducto(ancho, alto, material);
        } else {
            alert('Alguna de las dos medidas debe ser menor o igual a 130cm');
        }
    }
    else {
        alert('Ambas medidas deben ser de mínimo 20cm');
    }
}

function precioProducto(ancho, alto, material) {
    // calculo el precio del ploteo
    let precioPloteo = ( Math.round( ( (ancho / 100) * (alto / 100) * valorMetroCuadradoPloteo) / 1000 ) ) * 1000;
    if (precioPloteo < 10000) {
        precioPloteo = 10000;
    }
    console.log(precioPloteo);
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
    precioMaterial = ( Math.round(precioMaterial/1000) ) * 1000;

    let precio = precioMaterial + precioPloteo;
    // variable que me trae el elemento id= resultado
    let resultado = document.getElementById('resultado');
    // le asigno el nuevo valor al elemento de id resultado
    resultado.innerHTML = `El precio de tu ${material} es: $${precio} Cop`;
    listaImpresiones.push({ material: material, ancho: ancho, alto: alto, costo: precio });
    listarImpresionesCotizadas();
}


let boton = document.getElementById('button');
boton.addEventListener('click', validarMedidas);



// lista de impresiones cotizadas
function listarImpresionesCotizadas() {
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.innerHTML = '';
    listaImpresiones.forEach(p => {
        // creamos elemento de tipo li
        let li = document.createElement('li');
        // le asignamos contenido al li
        li.innerHTML = `${p.material} de ${p.ancho}cm de ancho por ${p.alto}cm de alto - Precio: <b>$${p.costo}</b> `;
        //agregamos el elemento al padre
        cuerpo.append(li);
    });
}

