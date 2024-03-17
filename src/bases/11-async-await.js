// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject)=>{
//         resolve('https://ajlsdjfl.com')
//     })

//     return promesa
// }

// para trabajar con await debe estar dentro de una funcion async
const getImagen = async () => {

    try {
        const apiKey = '4q9wYDgLmnMJY4cH3tu04CIbYBv3w9Aa'

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        // la peticion es de tipo response
        // espera a que la promesa termine antes de ejecutar la siguiente linea de codigo
        const { data } = await resp.json()


        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

        console.log(data)
    } catch (error) {
        console.log(error)

    }
}

// console.log(getImagen())

getImagen()

// manejo de rrores: se debe usar el try catch

