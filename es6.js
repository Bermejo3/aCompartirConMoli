// Reto 1
print = (sdfghjk) => {
    if (sdfghjk === undefined){
        console.log("Meter un parametro")
    }
    else{console.log(sdfghjk)}
}
print()
print(3)
print("casa")



//Cambio random


// Reto 4
transformToASCII = (str) => {
    let newStr = ""

    for (let i=0; i<str.length; i++){
        newStr += str[i].charCodeAt() +" "
    }
    return newStr
}

console.log(transformToASCII("Cambio esta frase"))

//Reto 2
function saludo(){
    return "hola"
}
