function palabraMasLarga(arr) {
    let fraseCombinada = arr.join(" ");
    let palabras = fraseCombinada.split(" ");
    let maxPalabra = "";
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > maxPalabra.length) {
        maxPalabra = palabras[i];
      }
    }
    return maxPalabra;
  }
  


  //la funcion PalabraMasLarga recibe un arreglo de frases y 
  //debe devolver la palabra mas larga entre todas las frases, 
  //es decir, devolver la palabra con mayor caracteres