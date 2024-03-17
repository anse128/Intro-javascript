//Arreglos js

const arreglo = new Array(100) // no se recomienda a no ser que tenga un tamaño predefinido 
arreglo.push(1)

const arreglo1 = [] // manera correcta
arreglo1.push(1)
arreglo1.push(2)
arreglo1.push(3)
arreglo1.push(4) // no se recomienda usar push modifica el objeto(arreglo) principal
// console.log(arreglo1)

const arreglo2 = [1, 2, 3, 4] // manera correcta

const arreglo3 = arreglo2
// arreglo3.push(5)

// console.log(arreglo2) //
// console.log(arreglo3) // los dos son iguales  push modifico arreglo 2 tambien

let arreglo4 = [...arreglo2, 5]

console.log(arreglo4)

const arreglo5 = arreglo2.map(function (numero) {
    return numero * 2
});

console.log(arreglo5)