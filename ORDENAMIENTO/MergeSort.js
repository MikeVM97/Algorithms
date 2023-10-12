function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Ejemplo de uso:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);

// La complejidad temporal del algoritmo de ordenamiento "Merge Sort" es O(n log n). Esta complejidad es eficiente y se mantiene constante en la mayoría de los casos, independientemente del input. La razón de esta eficiencia radica en la naturaleza dividir-y-conquistar de Merge Sort, que divide el arreglo en mitades y luego combina las mitades ordenadas para obtener el arreglo ordenado final.

// En Merge Sort, se realiza una división recursiva del arreglo hasta que cada subarreglo tenga un solo elemento (caso base). Luego, se combinan de manera eficiente los subarreglos ordenados en un solo arreglo ordenado, lo que resulta en un rendimiento consistente en la mayoría de las situaciones.

// La complejidad de Merge Sort es especialmente útil para arreglos grandes y es una elección eficiente para ordenar datos en aplicaciones del mundo real. La desventaja de Merge Sort es que requiere espacio adicional en memoria para mantener los subarreglos durante la división y combinación, pero su rendimiento y estabilidad hacen que sea una opción popular para ordenamiento en múltiples escenarios.