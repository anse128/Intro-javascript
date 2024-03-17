const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5435234,
        lat: 14.314,
        lng: 32.324
    }
}

console.log({
    persona:persona //igual
})

console.log({persona}) // igual

console.log(persona)

console.table(persona)
//cualquier objeto en javascript tiene su prototype


//crear clon

//const persona2 = persona
//persona2.nombre = 'Peter' //cambia el objeto persona por lo que no se debe hacer

//se debe poner todas las propiedades
const persona2 = { 
    nombre: 'Peter', 
    apellido: 'Escobar', //etc
}

console.log(persona)
console.log(persona2)

//para no copiar todas las propiedades se usa el operador spread 

const persona3 = {...persona}
console.log(persona3)

