console.log("Ejercicio 4");
const binario = (num) => {
    if(num<1024) {  
    let binary = num.toString(2);
    console.log(binary);
    } else {
        console.log("El número debe ser menor a 1024");
    }
}
binario(10);