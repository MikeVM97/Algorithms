function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// Ejemplo de uso:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);

// La complejidad temporal del algoritmo Quick Sort varía en función del input. En el mejor caso, cuando el pivote divide el arreglo en dos subarreglos aproximadamente iguales, la complejidad temporal es O(n log n). Esto lo hace uno de los algoritmos de ordenamiento más eficientes.

// Sin embargo, en el peor caso, cuando el pivote no divide el arreglo de manera equitativa, la complejidad temporal puede llegar a ser O(n^2). En el caso promedio, Quick Sort sigue siendo muy eficiente con una complejidad esperada de O(n log n).

// La variabilidad en la complejidad temporal depende en gran medida de la elección del pivote y cómo se dividen los elementos. Para mejorar el rendimiento en el peor caso, se pueden aplicar variaciones del algoritmo, como la elección de un pivote aleatorio o el uso de algoritmos de selección de pivote más avanzados, como el pivote de mediana de tres.

// En resumen, la complejidad temporal de Quick Sort varía en función del input, y su rendimiento es óptimo en la mayoría de los casos, lo que lo hace uno de los algoritmos de ordenamiento más utilizados en la práctica.