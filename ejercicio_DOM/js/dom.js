console.log('Modificando en DOM');

/*
let numero = parseInt(prompt('ingrese el numero a multiplicar'))
for (let index = 1; index <= 10; index++) {
    if (index % 2 == 0) {
        console.log(`${numero} x ${index} = ${numero} * ${index}`);
    }
}
*/

let padre = document.getElementById('padre');

let itemLista = document.getElementsByTagName('li');

console.log(padre);

console.log(itemLista);

// root.innerHTML='<h2>este es el root</h2>'

// itero cada uno de los items de la lista
for (const iterator of itemLista) {
    console.log(iterator);
}

//agreo contenido a cada uno de los items de la lista
for (let i = 0; i < itemLista.length; i++) {
    itemLista[i].innerHTML = 'Opcion ' + (i + 1);
}

//Agrego un nuevo elemento a la lista
let li = document.createElement('li');
li.innerText='Nuevo Item de Lista';
padre.appendChild(li);


//le coloco una clase a los items que cumplen la condición
for (let x = 0; x < itemLista.length; x++) {
    if (x%2==0) {
        itemLista[x].className = 'red';
    }
}


//tenemos una lista de objetos
let productos = [
    {id: 1, nombre: 'celular', precio: 1000, stock: 15},
    {id: 2, nombre: 'pc', precio: 2000, stock: 6},
    {id: 3, nombre: 'tablet', precio: 500, stock: 11},
    {id: 4, nombre: 'monitor', precio: 300, stock: 2},
    {id: 5, nombre: 'mouse', precio: 20, stock: 21}
]

//creamos una variable que representa al padre de id= prod
let prod = document.getElementById('prod');

//recorremos la lista de objetos
productos.forEach(p=> {
    // creamos elemento de tipo li
    let li = document.createElement('li');
    // le asignamos contenido al li
    li.innerHTML = `${p.nombre}: $${p.precio}`;
    //agregamos el elemento al padre
    prod.append(li)
});

// funcion que calcula el resultado
const calcularValor = () =>{
    // variable que me trae el elemto de id= ancho
    let ancho = document.getElementById('ancho').value;
    // variable que me trae el elemento de id= alto
    let alto = document.getElementById('alto').value;
    // variable que me trae el elemento id= resultado
    let resultado = document.getElementById("resultado");
    // le asigno el nuevo valor al elemento de id resultado
    resultado.innerHTML = ancho*alto; 
  }
