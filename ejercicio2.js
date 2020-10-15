console.log("Ejercicio 2");
const sumaNumeros = (number) => {
    let n = 1;
    let s = 0;
    let ss = 0;
    if (number>0 && number<=1000) {
    for (let i = 0; i < number; i++) {
        s = n+i;
        ss += s; 
    }
    console.log(ss);
    }
    else{
    console.log("El numero debe ser entre 1 y 1000");
    }  
}
sumaNumeros(4);