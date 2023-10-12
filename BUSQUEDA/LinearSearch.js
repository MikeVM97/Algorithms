// La búsqueda lineal, también conocida como Linear Search, es un algoritmo simple que busca un elemento específico en un arreglo recorriéndolo uno por uno. La complejidad temporal de la búsqueda lineal es lineal y varía en función del input.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Devuelve el índice del elemento si se encuentra
    }
  }
  return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
}

// Ejemplo de uso:
const array = [3, 7, 1, 9, 5];
const targetElement = 9;
const index = linearSearch(array, targetElement);

if (index !== -1) {
  console.log(`El elemento ${targetElement} se encuentra en el índice ${index}`);
} else {
  console.log(`El elemento ${targetElement} no se encuentra en el arreglo`);
}

// La complejidad temporal de la búsqueda lineal es O(n), donde "n" es el número de elementos en el arreglo. Esto significa que el tiempo de ejecución crece linealmente con el tamaño del arreglo. En el peor caso, la búsqueda lineal debe recorrer todo el arreglo para determinar si el elemento buscado está presente o no. Por lo tanto, la complejidad temporal es variable y aumenta linealmente con el tamaño del input.

// La búsqueda lineal es un algoritmo simple pero ineficiente para arreglos grandes, ya que debe recorrer todos los elementos en el peor caso. Es más adecuado para arreglos pequeños o cuando no se dispone de información adicional sobre la ubicación del elemento que se está buscando. En situaciones en las que la eficiencia es una preocupación, los algoritmos de búsqueda más avanzados como la búsqueda binaria suelen ser preferibles.