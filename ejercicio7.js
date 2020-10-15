
exports.matches = (houses) => {
    let n = 6;
    let sum = 1;
    console.log(houses);
    if (houses>1) {
       for(i = 1; i<=houses; i++){
        sum += n;
        sum --;
       }
       return sum;
    } else if(houses==1){
        sum = 6;
        return sum;
    } else if(houses==0){
        
        return sum-1;
    }
    else{
        sum = "No se aceptan números negativos"
        return sum;
    }
}
