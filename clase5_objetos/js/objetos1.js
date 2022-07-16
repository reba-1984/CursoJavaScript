console.log("objeto literal");

const jugador={
    nombre: "",
    energia: 100,
    nivel: 1
}

jugador.nombre="chacho"
//se puede acceder al atributo con el .
jugador.energia -= 5
//se puede acceder al atributo tambien con ['']  
jugador['nivel']++  

console.log(jugador);

//forin sirve para recorrer las propiedades de un objeto (muestra las llaves)

for (const propiedad in jugador) {
    console.log(propiedad);
}

//para ver los valores se usa asi:

for (const propiedad in jugador) {
    console.log(jugador[propiedad]);
}

