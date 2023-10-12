// La implementación de Radix Sort puede variar dependiendo del tipo de datos que estés ordenando, ya que se adapta a la cantidad de dígitos necesarios para representar los valores en el sistema de numeración.

function radixSort(arr) {
  const getMax = (arr) => {
    let max = 0;
    for (let num of arr) {
      max = Math.max(max, num);
    }
    return max;
  };

  const countingSort = (arr, exp) => {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    for (let num of arr) {
      const digit = Math.floor(num / exp) % 10;
      count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  };

  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Ejemplo de uso:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);

// La complejidad temporal de Radix Sort es O(k * n), donde "n" es el número de elementos en el arreglo y "k" es la cantidad de dígitos necesarios para representar el número más grande en el arreglo. Si "k" es una constante, entonces la complejidad temporal puede considerarse lineal, O(n).

// La variabilidad de la complejidad temporal en Radix Sort depende principalmente de la magnitud de los números en el arreglo. Para números con una magnitud constante, la complejidad es lineal. Sin embargo, si los números tienen magnitudes significativamente diferentes y "k" es grande, la complejidad puede acercarse a O(n log n). En general, Radix Sort es eficiente para ordenar números enteros con una cantidad constante de dígitos.