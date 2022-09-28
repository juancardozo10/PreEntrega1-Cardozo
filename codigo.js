let num = parseInt( prompt("Bienvenido. ingrese la cantidad de televisores que desee"))
let mensaje;
let producto=3000

function verificar( numero){
    num = numero
    if ( !isNaN(num)) {
        if(num >= 1 && num <= 50){
            mensaje= alert ("tenemos stock") 
        }else{
            while ( num < 1 || num > 50) {
                mensaje= alert (" No poseemos tal stock")
                num = parseInt( prompt("Bienvenido. ingrese la cantidad de televisores que desee"))
            }       
        }

    }else{
        mensaje= alert("debe ingresar un numero")
        num = parseInt( prompt("Bienvenido. ingrese la cantidad de televisores que desee"))
        verificar (num)
    }
}
function descuento(producto,num,porcentaje=10){
    resultado= num * producto
    let total= resultado - (resultado * porcentaje / 100 )
    return total
}
const precio = descuento(producto,num,porcentaje=10)
console.log (`El valor total de su compra es de   $ ${precio}`)


verificar(num)

