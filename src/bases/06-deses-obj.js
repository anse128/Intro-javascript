// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const { nombre, edad, clave } = persona //extrae lo que hay en las llaves del objeto persona

// const { nombre: nombre2 } = persona //se renombra no se tiene disponible nombre, solo nombre 2

// console.log(nombre)
// console.log(edad)
// console.log(clave)

// const retornaPersona = (usuario) => {
//     console.log(usuario)
// }

// const retornaPersona = (usuario) => {
//     const { nombre, edad, clave } = usuario //extrae lo que hay en las llaves del objeto persona
//     console.log(edad, clave, nombre)
// }


// const { nombre, edad, clave } = persona //extrae lo que hay en las llaves del objeto persona

const usecontext = ({ clave, nombre, edad, rango = 'Capitán' }) => {  // ponerlo entre llaves y extraer las propiedades que me interesan , si no existe la propiedad la asigna, y si existe usa la que le asignamos

    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
// retornaPersona(persona)
// const avenger = useContext(persona)

// const { nombreClave, anios, latlng } = useContext(persona)
// const { lat, lng } = latlng // es lo mas usual
const { nombreClave, anios, latlng: { lat, lng } } = usecontext(persona) // desestructuración anidada de objetos

console.log(nombreClave, anios)
console.log(lat, lng)