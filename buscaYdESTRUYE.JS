//RECIBE UN ARREGLO DE NUMEROS Y UN NUMERO,ELIMINE DEL 
//ARREGLO TODOS LOS ELEMENTOS QUE SEAN IGUAL A ESE NUMERO

function buscaDestruye(numeros, n){
    return numeros.filter(function(elemento){
return elemento !== n;
    });
    }





const numeros=([1,2,3,4],2);
const resultado = buscaDestruye(numeros,n);
  console.log(resultado);