console.log('funciones de orden superior');

function saludar( nombre) {
    return () => {console.log(`Hola  ${nombre}` );}
}

const saludoMaria = saludar('Maria')
const saludoJuan = saludar('Juan')

saludoMaria()
saludoJuan()