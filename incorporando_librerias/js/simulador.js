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

// variable que guarda el tamaño minimo
const medidaMinima = 20;

//valor del servicio de corte para el vinilo adhesivo:
const valorMetroLinealCorte = 7800;

//objeto producto cotizado
let producto = {};

// contador
let contador = 0;
if (localStorage.getItem('contador') === null) {
    console.log(' no existe');
    localStorage.setItem('contador', contador);
} else {
    contador = localStorage.getItem('contador');
    console.log(localStorage.getItem('contador'));
    listarImpresionesCotizadas();
}

//funciones:

//funsión que me retorna el ancho máximo dependiendo del material seleccionado
function validarMaterial() {
    // variable que me trae el elemento de id= ancho
    let ancho = parseInt(document.getElementById('ancho').value);
    // variable que me trae el elemento de id= alto
    let alto = parseInt(document.getElementById('alto').value);
    // variable que me trae el material seleccionado
    let material = document.getElementById('material').value;
    // variable que guarda el ancho máximo permitido

    let objeto = {ancho: ancho, alto: alto, material: material, anchoMaximo: 0 };
    switch (material) {
        case 'Vinilo':
            objeto.anchoMaximo = 130;
            validarMedidasGeneral(objeto);
            break;
        case 'Lona':
            objeto.anchoMaximo = 130;
            validarMedidasGeneral(objeto);
            break;

        case 'Pendón Vertical':
            objeto.anchoMaximo = 130;
            if (ancho <= alto) {
                validarMedidasGeneral(objeto);
            } else {
                //sweet alert
                Swal.fire({
                    confirmButtonColor: '#000',
                    title: 'Advertencia!',
                    text: 'En el pendón vertical el ancho no debe ser mayor al alto',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
            }
            break;

        case 'Pendón Horizontal':
            if (alto <= ancho) {
                if (ancho <= 130) {
                    objeto.anchoMaximo = 130;
                } else {
                    objeto.anchoMaximo = 120;
                }
                validarMedidasGeneral(objeto);
            } else {
                //sweet alert
                Swal.fire({
                    confirmButtonColor: '#000',
                    title: 'Advertencia!',
                    text: 'En el pendón Horizontal el alto no debe ser mayor al ancho',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
            }
            break;

        case 'Lienzo':
            objeto.anchoMaximo = 125;
            validarMedidasGeneral(objeto);
            break;
        case 'Propalcote':
            objeto.anchoMaximo = 130;
            validarMedidasGeneral(objeto);
            break;
        case 'Fotográfico':
            objeto.anchoMaximo = 70;
            validarMedidasGeneral(objeto);
            break;
    }
}

function validarMedidasGeneral(objetoValidar) {
    //aplico desestructuración
    let{ancho, alto, material, anchoMaximo} = objetoValidar;
    // aplico el operador lógico AND
    if (ancho >= medidaMinima && alto >= medidaMinima) {
        // aplico el operador Ternario y el operadpor lógico OR
        ancho <= anchoMaximo || alto <= anchoMaximo ? precioProducto(ancho, alto, material, anchoMaximo) : 
        //sweet alert
        Swal.fire({
            confirmButtonColor: '#000',
            title: 'Advertencia!',
            text: `Alguna de las dos medidas debe ser menor o igual a ${anchoMaximo}`,
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
    else {
        //sweet alert
        Swal.fire({
            confirmButtonColor: '#000',
            title: 'Advertencia!',
            text: `Ambas medidas deben ser de mínimo ${medidaMinima} cm`,
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}

function precioProducto(ancho, alto, material, anchoMaximo) {
    // calculo el precio del ploteo
    let precioPloteo = (Math.round(((ancho / 100) * (alto / 100) * valorMetroCuadradoPloteo) / 1000)) * 1000;
    if (precioPloteo < valorMinimoPloteo) {
        precioPloteo = valorMinimoPloteo;
    }
    // calculo el precio del material
    let precioMaterial = 0;
    if (ancho > anchoMaximo) {
        precioMaterial = (ancho / 100) * (valorMetroLinealVinilo);
    } else if (alto > anchoMaximo) {
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
    // aplico el operador ++
    contador++;
    // creo el objeto producto
    producto = { id: contador, material: material, ancho: ancho, alto: alto, costo: precio };
    //agrego el conTador
    localStorage.setItem('contador', contador);
    //convierto en json el objeto
    const enJSON = JSON.stringify(producto);
    //agrego el jason al localstorage
    localStorage.setItem(producto.id, enJSON);

    listarImpresionesCotizadas();
}

// lista de impresiones cotizadas
function listarImpresionesCotizadas() {
    let listaImpresiones = [];
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.innerHTML = '';

    //recorro el storage
    for (let i = 1; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        //convierto json a onjeto
        const traeObjeto = JSON.parse(localStorage.getItem(clave));
        //agrego el objeto a la lista
        listaImpresiones.push(traeObjeto);
    }

    //recorro la lista de impresiones cotizadas
    listaImpresiones.forEach(p => {
        // creamos elemento de tipo li
        let li = document.createElement('li');

        if (p.id) {
            // le asignamos contenido al li
            li.innerHTML = `${p.id}:  ${p.material} de ${p.ancho}cm de ancho por ${p.alto}cm de alto - Precio: <b>$${p.costo}</b> `;
            //agregamos el elemento al padre
            cuerpo.append(li);
        }
    });
}

// Botón 
let boton = document.getElementById('button');
boton.addEventListener('click', validarMaterial);



