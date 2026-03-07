// ==========================
// CAJERO AUTOMATICO
// ==========================

console.log("===== CAJERO AUTOMATICO =====")

let usuario = "admin"
let contrasena = "1234"

let user = prompt("Ingrese su usuario:")
let pass = prompt("Ingrese su contraseña:")

let saldo = 100000


// ==========================
// FUNCION PARA PEDIR NUMEROS
// ==========================

function pedirNumero(mensaje){

    let valor

    do{

        valor = prompt(mensaje)

        if(valor !== null){
            valor = valor.replace(",", ".") // acepta coma o punto
        }

        valor = parseFloat(valor)

    }while(isNaN(valor) || valor <= 0)

    return valor
}


// ==========================
// FUNCIONES
// ==========================

function consultarSaldo(){
    console.log("Saldo actual: " + saldo)
}

function depositar(valor){

    saldo = saldo + valor

    console.log("Se depositaron: " + valor)
    console.log("Nuevo saldo: " + saldo)
}

function retirar(valor){

    if(valor <= saldo){

        saldo = saldo - valor
        console.log("Se retiraron: " + valor)

    }else{

        console.log("No tiene saldo suficiente")

    }

    console.log("Saldo actual: " + saldo)
}


// ==========================
// LOGIN
// ==========================

if(user == usuario && pass == contrasena){

    console.log("Bienvenido al banco")

    let opcion = 0

    while(opcion != 4){

        opcion = prompt(
            "------ MENU ------\n" +
            "1. Consultar saldo\n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir\n\n" +
            "Seleccione una opcion:"
        )

        if(opcion == 1){

            consultarSaldo()

        }

        else if(opcion == 2){

            let valor = pedirNumero("Ingrese el valor a depositar:")
            depositar(valor)

        }

        else if(opcion == 3){

            let valor = pedirNumero("Ingrese el valor a retirar:")
            retirar(valor)

        }

        else if(opcion == 4){

            console.log("Gracias por usar el cajero")

        }

        else{

            console.log("Opcion no valida")

        }

    }

}else{

    console.log("Usuario o contraseña incorrectos")

}

console.log("Fin del programa")