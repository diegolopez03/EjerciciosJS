console.log("Ejercicio 7");
const matches = (houses) => {
    let n = 6;
    let sum = 1;
    if (houses>1) {
       for(i = 1; i<=houses; i++){
        sum += n;
        sum --;
       }
       console.log(sum); 
    } else if(houses===1){
        let n = 6;
        console.log(6);
    } else if(houses===0){
        console.log(0);
    }
    else{
        console.log("No se aceptan números negativos");
    }
}
matches(4);