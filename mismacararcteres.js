function mismaCantidadCaracteres(strings, caracteres) {
    
    const resultados = [];

  for (let str of strings) {
    if (str.length === caracteres) {
      resultados.push(str);
    }
  }

  return resultados;
    // Tu código aquí
}