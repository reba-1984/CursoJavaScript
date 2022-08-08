console.log('Clase de Storage y Json');

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 
//el siguiente código nos muestra como guardar valore en el localStorage

localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

localStorage.setItem('seleccionados', [1, 2, 3]);

/*
Podemos acceder a la información almacenada en localStorage utilizando getItem. 
Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString). 
*/

let lista = localStorage.getItem('seleccionados').split(",");

let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’

console.log(typeof numero);

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

/*
localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida'); //borra el item de clave bienvenida
sessionStorage.removeItem('esValido'); //borra el item de clave esValido
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información
*/

console.log(lista);


let divLista = document.getElementById('lista');

for (const i of lista) {
    console.log(i);
    let li = document.createElement('li');
    li.innerHTML = i;
    divLista.append(li);
}


