// El ordenamiento por selección consiste en tomar un elemento y comparar con el resto de elementos, en cada recorrido se coloca el número más grande en la última posición de la estructura de datos, EN EL SIGUIENTE RECORRIDO, se obtiene el número más grande de entre los elementos restantes y se coloca en la penúltima posición. SE REPITE EL PROCESO hasta que la estructura queda ordenada.

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Encontrar el índice del mínimo en el subarreglo no ordenado
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Intercambiar el elemento actual con el mínimo encontrado
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const sorted1 = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(sorted1);
console.log(sortedArray);

// La complejidad temporal del algoritmo de ordenamiento "Selection Sort" es O(n^2), donde "n" es el número de elementos en el arreglo que se está ordenando. Esto significa que el tiempo que le lleva a Selection Sort ordenar un arreglo crece cuadráticamente en relación con el tamaño del arreglo.

// El algoritmo realiza una cantidad fija de comparaciones e intercambios en cada iteración, lo que resulta en una cantidad total de operaciones proporcional a n * (n-1) / 2, lo que se simplifica a O(n^2) en notación de orden de tiempo.

// Debido a su complejidad cuadrática, Selection Sort no es la opción más eficiente para arreglos grandes, ya que tiende a volverse muy lento a medida que el tamaño del arreglo aumenta. Por lo tanto, se prefieren otros algoritmos de ordenamiento como Quick Sort, Merge Sort o incluso el método sort() incorporado en JavaScript para arreglos grandes.