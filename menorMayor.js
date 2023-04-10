function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return [min, max];
  }
  const numeros = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10];
  const resultado = minMax(numeros);
  console.log(resultado);

  //Aquí se utiliza un bucle for para iterar por el arreglo
  // se inicializa con el primer número del arreglo, y luego se 
   //compara cada elemento del arreglo con min. Si se encuentra 
   //un número menor que min, se actualiza el valor de min. 
   //De manera similar, la variable max se inicializa con el 
   //primer número del arreglo, y luego se compara cada elemento 
   //del arreglo con max. Si se encuentra un número mayor que max,
   // se actualiza el valor de max. Al final, se devuelve un
   //  arreglo con el valor de min en la posición 0 y el valor
    //  de max en la posición 1//



