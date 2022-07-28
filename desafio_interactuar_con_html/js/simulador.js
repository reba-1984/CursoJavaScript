console.log('Bienvenidos al simulador interactivo \nCotizador de impresiones en gran formato:');

//valor del metro cudrado de cada material:
const metroLinealVinilo = 13600;
const metroLinealLona = 15000;
const metroCuadradoLienzo = 75000;

//valor del metro lineal de los tubos de aluminio que se usa para el pendon publisictario:
const valorMetroTuboAluminio = 10000;

//valor de la impresión por metro cuadrado en el plotter de impresión en gran formato HP-Latex-540:
const valorMetroPloteo = 25000;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroCorte = 7800;

//objeto producto cotizado
const producto = {}

//lista de impresiones cotizadas
const listaImpresiones = [];

//funciones:

function validarMedidasVinilo() {
    // variable que me trae el elemento de id= ancho
    let ancho = document.getElementById('ancho').value;
    // variable que me trae el elemento de id= alto
    let alto = document.getElementById('alto').value;
    if(alto >= 20 && ancho >= 20){
        if (alto <= 130 || ancho <= 130) {
            costoVinilo(ancho, alto);
        } else {
            alert('alguna de las dos medidas debe ser menor a 130cm');
        }
    }
    else{
        alert('Ambas medidas deben ser de mínimo 20cm');
    }
}

function costoVinilo(ancho, alto) {
    // calculo el precio del ploteo
    let precioPloteo = (ancho / 100) * (alto / 100) * (valorMetroPloteo);
    if (precioPloteo > 10000) {
        precioPloteo = 10000
    } 
    // calculo el precio del material
    let precioMaterial = (ancho / 100) * (alto / 100) * (metroLinealVinilo);
    /*
    if (ancho <= 130 && alto <= 130) {
        precioMaterial = 
    } else {
        
    }
    */
    let precio = Math.round(precioMaterial + precioPloteo);
    // variable que me trae el elemento id= resultado
    let resultado = document.getElementById('resultado');
    // le asigno el nuevo valor al elemento de id resultado
    resultado.innerHTML = `El precio de tu vinilo es: $${precio} Cop`;
    listaImpresiones.push({ material: 'Vinilo', ancho: ancho, alto: alto, costo: precio });
    listarImpresionesCotizadas();
}

let boton = document.getElementById('button');
boton.addEventListener('click', validarMedidasVinilo);


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

