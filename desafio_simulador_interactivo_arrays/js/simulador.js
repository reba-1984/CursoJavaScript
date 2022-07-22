console.log('Bienvenidos al simulador interactivo \nCotizador de impresiones en gran formato:');

//valor del metro cudrado de cada material:
const metroCuadradoVinilo = 18000;
const metroCuadradoLona = 15000;
const metroCuadradoLienzo = 50000;

//valor del metro lineal de los tubos de aluminio que se usa para el pendon publisictario:
const valorMetroTuboAluminio = 10000;

//valor de la impresión por metro cuadrado en el plotter de impresión en gran formato HP-Latex-540:
const valorMetroImpresion = 20000;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroCorte = 10000;

//objeto producto cotizado
const producto = {}

//lista de impresiones cotizadas
const listaImpresiones = [];

//funciones:

function validadAncho() {
    let anchoPrueba = 0;
    let ancho = 0;
    do {
        ancho = parseInt(prompt('ingrese el ancho de la impresión (Máximo 130cm)'));
        if (ancho <= 130 && ancho > 0) {
            anchoPrueba = 1;
        }
        else {
            alert('Ingrese un tamaño válido');
        }
    } while (anchoPrueba == 0);
    return ancho / 100;
}

function validarAlto() {
    let altoPrueba = 0;
    let alto = 0;
    do {
        alto = parseInt(prompt('ingrese el alto de la impresión (Máximo 400cm)'));
        if (alto <= 400 && alto > 0) {
            altoPrueba = 1;
        }
        else {
            alert('Ingrese un tamaño válido');
        }
    } while (altoPrueba == 0);
    return alto / 100;
}

function costoVinilo() {
    const ancho = validadAncho();
    const alto = validarAlto();
    const corte = parseInt(prompt('Si desea el servicio de corte para su vinilo oprima 1, de lo contrario oprima cualquier tecla'));
    let precioCorte = 0;
    if (corte == 1) {
        precioCorte = alto * valorMetroCorte;
    }
    const precio = (ancho * alto * (metroCuadradoVinilo + valorMetroImpresion)) + precioCorte;
    return precio;
}

function costoPendon() {
    const ancho = validadAncho();
    const alto = validarAlto();
    const tubos = parseInt(prompt('Si desea que su pendon tenga tubos de aluminio para colgar oprima 1, de lo contrario oprima cualquier tecla'));
    let precioTubo = 0;
    if (tubos == 1) {
        precioTubo = ancho * valorMetroTuboAluminio;
    }
    const precio = (ancho * alto * (metroCuadradoLona + valorMetroImpresion)) + precioTubo;
    return precio;
}

function costoLienzo() {
    const ancho = validadAncho();
    const alto = validarAlto();
    const precio = ((ancho + 0.1) * (alto + 0.1) * metroCuadradoLienzo) + (ancho * alto * valorMetroImpresion * 2);
    return precio;
}


// función con menú de materiales:
function cotizarImpresion() {
    let material = 0;
    do {
        material = parseInt(prompt('Bienvenid@ al cotizador de impresiones\nEscoge en que material deseas tu impresión marcando el numero correspondiente, o presiona 0 para salir \n1- Vinilo Adesivo \n2- Pendón en Lona \n3- Lienzo \n0- Volver al menú principal'));

        switch (material) {
            case 1:
                const valorFinal1 = costoVinilo();
                alert('El valor de tu vinilo es: $' + valorFinal1 + ' Cop');
                listaImpresiones.push({ material: 'Vinilo', costo: valorFinal1 });
                break;
            case 2:
                const valorFinal2 = costoPendon();
                alert('El valor de tu Pendon es: $' + valorFinal2 + ' Cop');
                break;
            case 3:
                const valorFinal3 = costoLienzo();
                alert('El valor de tu Lienzo es: $' + valorFinal3 + ' Cop');
                break;
            default:
                break;
        }
    } while (material != 0);
}

function listarImpresionesCotizadas() {
    listaImpresiones.forEach(element => {
        for (const property in element) {
            alert(`${property}: ${element[property]}`);
        }
    });
}

// menú principal:
opcion = 0;
do {
    opcion = parseInt(prompt('Seleccione la opción deseada marcando el numero correspondiente \n1- Cotizar impresón \n2- Ver lista de impresiones cotizadas \n0- Para terminar'));
    switch (opcion) {
        case 1:
            cotizarImpresion();
            break;
        case 2:
            if (listaImpresiones.length != 0 ) {
                listarImpresionesCotizadas();
            } else {
                alert('No hay ninguna cotizacion en la lista');
            }
            break;
        default:
            break;
    }
} while (opcion != 0);

