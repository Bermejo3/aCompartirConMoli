// Reto 1
print = (parametro) => {
    if (parametro === undefined){
        console.log("Introduce un para")
    }
    else{console.log(parametro)}
}
print()
print(3)
print("casa")

//reto2
function hola(){
    console.log("hola")
}

// Reto 4
transformToASCII = (str) => {
    let newStr = ""

    for (let i=0; i<str.length; i++){
        newStr += str[i].charCodeAt() +" "
    }
    return newStr
}

<<<<<<< HEAD
console.log(transformToASCII("Cambio esta frase"))
=======
console.log(transformToASCII("Había una vez un circo"))
>>>>>>> a7e862d57abee26bdf381a73e24745321f8932c2
