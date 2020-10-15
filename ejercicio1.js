console.log("Ejercicio 1");
const divisionNumeros = (numero) => {
    let mitades = []
    let mitad = 0
    numero%2 === 0 ? (
    mitad = numero/2,
     mitades.push(mitad),
     mitades.push(mitad),
     console.log(mitades)
    ) : (
        mitad = numero/2,
        mitades.push(Math.floor(mitad)),
        mitades.push(Math.ceil(mitad)),
        console.log(mitades)
    )
} 
divisionNumeros(11)