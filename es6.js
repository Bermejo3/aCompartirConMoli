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

// Reto 2
multiply = (x,y) => {return x*y}

console.log(multiply(5,4))

// Reto 4
transformToASCII = (str) => {
    let newStr = ""

    for (let i=0; i<str.length; i++){
        newStr += str[i].charCodeAt() +" "
    }
    return newStr
}

console.log(transformToASCII("Había una vez un circo"))
