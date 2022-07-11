console.log("Desafío complementario - Crear un algoritmo utilizando un ciclo");

alert("Bienvenido a Fast-Foot \na continuación puedes elegir tu pedido");

let opcion = "0";
let acompañamiento;

do {
    opcion = prompt("ingresa un numero del 1 al 3 o ingresa 0 para salir \n1- Hamburguesa \n2- Hot-Dog \n3- Taco \n0- Para terminar el pedido");

    switch (opcion) {
        case "1":
            acompañamiento = parseInt(prompt("Deseas acompañar tu hamburguesa con papas fritas? \n1- Si! \n0- No."));
            if (acompañamiento) {
                alert("Pediste una Hamburguesa con papas fritas")
            }else{
                alert("Pediste una Hamburguesa sin acompañamiento")
            }
            break;
        case "2":
            acompañamiento = parseInt(prompt("Deseas acompañar tu Hot-Dog con papas fritas? \n1- Si! \n0- No."));
            if (acompañamiento) {
                alert("Pediste un Hot-Dog con papas fritas")
            }else{
                alert("Pediste un Hot-Dog sin acompañamiento")
            }
            break;
        case "3":
            acompañamiento = parseInt(prompt("Deseas tu Taco con Picante extra? \n1- Si! \n0- No."));
            if (acompañamiento) {
                alert("Pediste un Taco con picante extra")
            }else{
                alert("Pediste un Taco normal")
            }
            break;
        default:
            break;
    }

} while (opcion != "0")

alert("Pedido finalizado, vuelve pronto")