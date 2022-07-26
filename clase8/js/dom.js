console.log('Clase 8 - DOM');

const raiz = document.getElementById('root');

console.log(raiz);

const productos = document.getElementsByTagName('li');

console.log(productos);

for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element);
}

for (const iterator of productos) {
    console.log(iterator);
}

