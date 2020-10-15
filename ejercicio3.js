console.log("Ejercicio 3");
function f () {
    let i = 5;
     return i;
}
function g () {
    let i = 10;
    return i;
}
const numeroMayor = (primera, segunda) => {
    let f = primera();
    let g = segunda();
    if(f>g){
        //primera();
        console.log("f");
    } else if(g>f){
        //segunda();
        console.log("g");
    } else if(f===g){
        console.log("ninguna"); 
    }
}
numeroMayor(f, g);