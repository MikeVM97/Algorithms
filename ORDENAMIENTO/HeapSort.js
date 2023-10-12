function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    // Intercambiar el primer elemento (máximo) con el último elemento del arreglo no ordenado
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapify(arr, i, arr.length);
  }
}

function maxHeapify(arr, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < arr.length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < arr.length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest);
  }
}

// Ejemplo de uso:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray);

// La complejidad temporal de Heap Sort no es constante, sino que varía en función del input. La complejidad temporal en el peor caso y en el caso promedio es O(n log n), lo que lo convierte en un algoritmo de ordenamiento muy eficiente.

// Heap Sort crea una estructura de datos conocida como "montículo" (heap), que garantiza que el elemento más grande (en un montículo máximo) esté en la raíz del montículo. Luego, se extrae el elemento máximo, se coloca en su posición final y se ajusta el montículo para mantener la propiedad del montículo.

// La variabilidad en la complejidad temporal de Heap Sort depende de cómo se construye el montículo y de la eficiencia de las operaciones de ajuste del montículo. En el mejor caso, el rendimiento es O(n log n), y en el peor caso, sigue siendo O(n log n). Esto lo hace muy eficiente en comparación con algoritmos cuadráticos como Bubble Sort o Selection Sort. Por lo tanto, Heap Sort es una elección eficiente para ordenar arreglos de cualquier tamaño.
