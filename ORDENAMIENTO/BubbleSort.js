// El ordenamiento de burbuja utiliza un algoritmo de ordenamiento adyacente, es decir que compara dos elementos adyacentes.

// EJEMPLO: dado el array: [5, 2, 1, 6] el algoritmo comenzará a comparar, primero, si el numero 5 es mayor al 2, entonces intercambian posiciones, si no, se continúa con el ordenamiento, SE REPITE ESTE PROCESO hasta el final del bucle, entonces al terminar con el recorrido el array quedará así: [2, 1, 5, 6], aún no ha quedado ordenado.
// Esto es normal, pues el algoritmo está implementado de una forma que pueda realizar más de 1 bucle, con esto, el array se someterá a mas de 1 recorrido en caso de ser necesario, PARA ESTE CASO, el array necesita de 2 recorridos, en el segundo recorrido terminará ordenado así: [1, 2, 5, 6], y este si es el resultado esperado.

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    // Iteramos a través del arreglo
    for (let i = 0; i < arr.length - 1; i++) {
      // Comparamos elementos adyacentes
      if (arr[i] > arr[i + 1]) {
        // Intercambiamos si el elemento actual es mayor que el siguiente
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // Indicamos que hubo un intercambio
      }
    }
  } while (swapped);

  return arr;
}

const arr1 = [ 64, 34, 25, 12, 22, 11, 90 ];
const sorted1 = bubbleSort(arr1);
console.log(sorted1);

// La complejidad temporal del algoritmo Bubble Sort es O(n^2), lo que lo hace ineficiente para arreglos grandes. En el mejor caso, donde el arreglo ya está ordenado, la complejidad temporal es O(n).