function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);

// El algoritmo de ordenamiento "Insertion Sort" tiene una complejidad temporal de:

// Mejor caso: O(n)
// Peor caso: O(n^2)
// Caso promedio: O(n^2)

// La complejidad temporal puede variar dependiendo del input en función de la cantidad de inversiones en el arreglo no ordenado. En el mejor caso, cuando el arreglo ya está casi ordenado (pocas inversiones), el algoritmo es muy eficiente y realiza un número lineal de comparaciones y movimientos. En el peor caso, cuando el arreglo está ordenado en orden inverso, se realizan muchas inversiones y el algoritmo es cuadrático.

// En el caso promedio, se espera que el algoritmo tenga una complejidad cuadrática. La cantidad de inversiones y su distribución en el arreglo afecta en gran medida el rendimiento. En general, para arreglos pequeños o casi ordenados, el Insertion Sort puede ser una opción eficiente, pero para arreglos más grandes o desordenados, existen algoritmos más eficientes como Quick Sort o Merge Sort.