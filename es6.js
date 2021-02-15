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

console.log(transformToASCII("Cambio esta frase"))
