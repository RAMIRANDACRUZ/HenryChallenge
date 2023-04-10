function sumaTodosPrimos(numeros){
    let suma = 0;
function esPrimo(numeros){
    if (numeros < 2 ){
        return false;
    }
for (let i = 2 ; i <= Math.sqrt(numeros); i++){
    if (numeros % i === 0){
        return false;

    }
}
return true;
}
for(let i = 0;i<numeros.length; i++){
    if (esPrimo(numeros[i])){
        suma += numeros[i];
    }
}
return suma;
}
const numeros = [1, 5, 2, 9, 3, 4, 11];
const resultado = sumaTodosPrimos(numeros);
console.log(resultado);