// escribir una funcion que reciba un objeto y lo retorne
// con los pares clave-valor intercambiados
function intercambio(objeto){
    let nuevoObjeto = {};
    for ( let propiedad in objeto){
        nuevoObjeto[objeto[propiedad]]=propiedad;
    }
    return nuevoObjeto;

}
const objeto = {nombre:"fulano",apellido:"rodriguez"}
  const resultado = intercambio(objeto);
  console.log(resultado);