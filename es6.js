// Reto 1
print = (parametro) => {
    if (parametro === undefined){
        console.log("Introduce un parametro")
    }
    else{console.log(parametro)}
}
print()
print(3)
print("casa")

// Reto 2
multiply = (x,y) => {return x*y}

console.log(multiply(5,4))

//Reto 3
sumaArray = (arr) => {
    let suma = 0

    if (arr === undefined){
        return 0
    }
    if (Array.isArray(arr)){
        for (let i=0;i<arr.length;i++){
            suma += arr[i]
        }
        return suma
    }
    else{return "No has introducido un array como parametro de entrada"}
}
console.log(sumaArray ([1,2,3]))
console.log(sumaArray ())
console.log(sumaArray ("patata"))

// Reto 4
transformToASCII = (str) => {
    let newStr = ""

    for (let i=0; i<str.length; i++){
        newStr += str[i].charCodeAt() +" "
    }
    return newStr
}

console.log(transformToASCII("La pizza con piña es el mejor invento de la humanidad"))
