// Funciones en JS

// function saludar(nombre) {
//     return `Hola, ${nombre}`
// }

// saludar = 30

// console.log( saludar('Goku'))

// console.log(saludar)


// manera correcta para evitar asignaciones
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

// saludar = 30

console.log(saludar('Goku'))

// console.log(saludar)

//Funcion de flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

console.log(saludar2('Vegeta'))

// si solo tiene un return se puede simplificar
const saludar3 = (nombre) => `Hola, ${nombre}`
console.log(saludar3('Picolo'))


const saludar4 = () => `Hola Mundo`
console.log(saludar4())

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})


console.log(getUser())

// Tarea
// 1. Transformar a una funcion flecha
// 2. tien que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Sebastian')
console.log(usuarioActivo)