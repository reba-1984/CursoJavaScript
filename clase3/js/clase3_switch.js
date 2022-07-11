let variable = prompt("ingresa un numero del 1 al 3 o ingresa 0 para salir");

while (variable != "0") {
    switch (variable) {
        case "1":
            alert("ingresaste el numero 1")
            break;
        case "2":
            alert("ingresaste el numero 2")
            break;
        case "3":
            alert("ingresaste el numero 3")
            break;
        default:
            break;
    }
    variable = prompt("ingresa un numero del 1 al 3 o ingresa 0 para salir");
}