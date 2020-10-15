console.log("Ejercicio 6");
const detectarPalabra = (word) => {
    let char = '';
    let st = '';
    let sss = word.match(/[a-z]/g);
    console.log(sss.join(""));
/*
    for (let i = 0; i < word.length; i++) {
        char = word.charAt(i);
        if (char === char.toUpperCase()) {
            i++;
        } else if (char === char.toLowerCase()) {
            st += char;
            i++;
        }
    }
    console.log(st);
    */
}
detectarPalabra("APvAWERaLLrViWEaGJblPOEe");
detectarPalabra("AQROgSKVLaQWEtPOLMCKSOo");