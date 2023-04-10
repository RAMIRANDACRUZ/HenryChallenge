// escribe una funcion que apartir de un arreglo que contiene
// strings y enteros seleccione y retorne solo los strings
function soloString (arregloMixto){
    return arregloMixto.filter(function(elemento){
        return typeof elemento==="string";
    });
}


const arregloMixto=([1,"henry", 2, "toni"]);
const resultado = soloString(arregloMixto);
  console.log(resultado);