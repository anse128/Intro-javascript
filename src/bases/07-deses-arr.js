const personajes = ['Goku', 'Vegeta', 'Trunks']

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [p1] = personajes
const [, p2] = personajes // la coma indica que me ubico en la posición 2
const [, , p3] = personajes // posicion 3

// console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123]
}

// const arr = retornaArreglo()

const [letras, numeros] = retornaArreglo() // desestructuración

// console.log(letras, numeros)

const usestate = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }] //valor, función
}

// const arr = usestate('Goku')

// console.log(arr)

// arr[1]() // asi se llama a la función metodo mas raro

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

const [nombre,setNombre] = usestate('Goku')

console.log(nombre)
setNombre() // mejor manera de llamar la función

