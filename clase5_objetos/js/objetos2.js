console.log('funcion constructora');

function jugador(nombre, energia, nivel) {
    this.nombre = nombre;
    this.energia = energia;
    this.nivel = nivel;
    // metodo del objeto con funcion flecha
    this.bajarEnergia = () => this.energia -= 10;
    // metodo con funcion anonima normal
    this.imprimirDatos = function () {
        console.log('Nombre: ' + this.nombre);
        console.log('Energía: ' + this.energia);
        console.log('Nivel: ' + this.nivel);
    }
}

const jugador1 = new jugador('Ramón', 100, 1)

console.log(jugador1);

jugador1.bajarEnergia();

console.log(jugador1);

jugador1.imprimirDatos();