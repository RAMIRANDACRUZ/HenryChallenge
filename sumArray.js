function sumArray(numeros, n) {
    const numSet = new Set();

  for (let num of numeros) {
    if (numSet.has(n - num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
    // Tu código aquí
}