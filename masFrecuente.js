// funcion que reciba un arreglo de entero y retor el num que mas se repite

function masFrecuente(numeros){
    let conteo= {};
    let enteroMasFrecuente;
    let maximoConteo=0;
    for (let i=0;i<numeros.length;i++){
        let entero = numeros[i];
        if (conteo[entero]===undefined){
            conteo[entero]=1;

        }else{
            conteo[entero]++;
        }
        if(conteo[entero ]> maximoConteo){
            enteroMasFrecuente = entero;
            maximoConteo = conteo[entero];
        }
    }
    return enteroMasFrecuente;
}

const numeros=[1,1,2,3,4];
const resultado = masFrecuente(numeros);
  console.log(resultado); 