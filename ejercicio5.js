console.log("Ejercicio 5");
const minMax = (array) => { 
    let newArray = [] 
    let min = Math.min.apply(null, array)
    let max = Math.max.apply(null, array)
    newArray.push(min, max)
    console.log(newArray);
}
minMax([1,2,3,4,5])