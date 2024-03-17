const apiKey = '4q9wYDgLmnMJY4cH3tu04CIbYBv3w9Aa'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion.then(resp=>{
//     // console.log(resp)
//     resp.json().then(data=>{console.log(data)})
// })
// .catch(console.warn())

// peticion                       //promesas en cadena
//     .then(resp => resp.json())
//     .then(data=>{
//         console.log(data.data)
//     })
//     .catch(console.warn)

peticion                       //promesas en cadena
    .then(resp => resp.json())
    .then(({ data }) => { //desestructuración
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        
        document.body.append(img)
    })
    .catch(console.warn)