console.log('Ejemplo 2 con parametros');

const porCadaElemento =  (listaDeDatos, funcionParaIteracion) => {
    for (let i = 0; i < listaDeDatos.length; i++) {
        funcionParaIteracion(listaDeDatos[i]);
        
    }
}

const listaDeNombres = ['juan', 'maria', 'andres', 'andrea'];

const saludar = (nombre) =>{
    console.log(`hola ${nombre}`);
}


porCadaElemento(listaDeNombres, saludar)



