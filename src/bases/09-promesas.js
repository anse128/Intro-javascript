import { getHeroeById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despúes')
//         // resolve() // cuando la tarea termine se llama a el resolve

//         const p1 = getHeroeById(2)
//         // console.log(p1)
//         resolve(p1)
//         // reject('No se pudo encontrar el héroe')
//     }, 2000);
// })

// // promesa.then  la promesa se hizo correctamente
// // promesa.catch  error
// // promesa.then  se ejecuta despues de los dos anteriores

// promesa.then((heroe) => {
//     console.log('Heroe', heroe)
// })
//     .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id)
            // console.log(p1)
            if (p1)
                resolve(p1)
            else
                reject('No se pudo encontrar el héroe')
        }, 2000);

    })

    // return promesa
}

// getHeroeByIdAsync(1)
//     .then(heroe => console.log('Heroe', heroe))
//     .catch(err => console.warn(err))

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn)