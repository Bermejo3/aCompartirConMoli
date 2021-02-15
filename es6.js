// Reto 1
print = (sdfghjk) => {
    if (sdfghjk === undefined){
        console.log("Introduce un para")
    }
    else{console.log(sdfghjk)}
}
print()
print(3)
print("casa")


// Reto 4
transformToASCII = (str) => {
    let newStr = ""

    for (let i=0; i<str.length; i++){
        newStr += str[i].charCodeAt() +" "
    }
    return newStr
}

console.log(transformToASCII("Había una vez un circo"))