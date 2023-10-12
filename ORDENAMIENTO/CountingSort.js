// El algoritmo Counting Sort es una técnica de ordenamiento que es eficiente cuando se utilizan números enteros no negativos y la diferencia entre los valores no es significativamente mayor que la cantidad de elementos en el arreglo.

function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Crear un arreglo para contar la frecuencia de cada elemento
  const countArray = new Array(max - min + 1).fill(0);

  // Contar la frecuencia de cada elemento en el arreglo original
  for (let num of arr) {
    countArray[num - min]++;
  }

  // Reconstruir el arreglo ordenado
  const sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i + min);
    }
  }

  return sortedArray;
}

// Ejemplo de uso:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);

// La complejidad temporal de Counting Sort es lineal, O(n), donde "n" es el número de elementos en el arreglo. En este caso, la complejidad temporal es constante en función del input, siempre y cuando los valores en el arreglo cumplan con las condiciones mencionadas anteriormente (números enteros no negativos y diferencia limitada entre los valores).

// Counting Sort es eficiente cuando estas condiciones se cumplen y es especialmente rápido cuando se trata de un rango limitado de valores enteros. Sin embargo, si los valores en el arreglo son extremadamente grandes o si la diferencia entre los valores es significativamente mayor que la cantidad de elementos en el arreglo, entonces Counting Sort puede no ser la mejor opción, ya que requiere espacio adicional para almacenar el arreglo de frecuencias.