// La búsqueda binaria (Binary Search) es un algoritmo eficiente para buscar un elemento específico en un arreglo ordenado. Su complejidad temporal es de O(log n), donde "n" es el número de elementos en el arreglo. A diferencia de la búsqueda lineal, la búsqueda binaria no varía linealmente en función del input.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Devuelve el índice del elemento si se encuentra
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
}

// Ejemplo de uso:
const sortedArray = [1, 3, 5, 7, 9];
const targetElement = 5;
const index = binarySearch(sortedArray, targetElement);

if (index !== -1) {
  console.log(`El elemento ${targetElement} se encuentra en el índice ${index}`);
} else {
  console.log(`El elemento ${targetElement} no se encuentra en el arreglo`);
}

// La búsqueda binaria divide repetidamente el arreglo en dos mitades y descarta una mitad en función de si el elemento buscado es mayor o menor que el elemento del medio. Esto permite que la búsqueda binaria sea eficiente y logre una complejidad temporal de O(log n).

// Dado que la búsqueda binaria trabaja en arreglos ordenados y reduce el espacio de búsqueda a la mitad en cada iteración, su complejidad temporal no varía linealmente con el tamaño del arreglo. En cambio, se vuelve más eficiente a medida que el tamaño del arreglo aumenta, ya que el número de iteraciones requeridas es logarítmico en función del tamaño del arreglo.

// La búsqueda binaria es una excelente opción cuando trabajas con arreglos ordenados y deseas buscar elementos de manera eficiente, especialmente en arreglos grandes, donde su complejidad logarítmica es una ventaja significativa.