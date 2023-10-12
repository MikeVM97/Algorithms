// La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números anteriores. La función recursiva de Fibonacci es una de las implementaciones más comunes para calcular los números de Fibonacci. Sin embargo, esta implementación tiene una complejidad temporal exponencial y varía en función del input. La complejidad es O(2^n), donde "n" es el número de términos de la secuencia que deseas calcular. Esto significa que el tiempo de ejecución aumenta de manera exponencial con el valor de "n".

// 1. IMPLEMENTACIÓN RECURSIVA
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Ejemplo de uso:
console.log(fibonacciRecursive(10)); // Devuelve 55

// Esta implementación es sencilla y fácil de comprender, pero no es eficiente para valores grandes de "n" debido a su complejidad exponencial. Para calcular números de Fibonacci de manera eficiente, se recomienda utilizar una implementación iterativa o memoización para evitar recálculos innecesarios.






// 2. IMPLEMENTACIÓN ITERATIVA
function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }

  let prev1 = 0;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
}

// Ejemplo de uso:
console.log(fibonacciIterative(10)); // Devuelve 55






// 3. IMPLEMENTACIÓN CON MEMOIZACIÓN

function fibonacciMemoization(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}

// Ejemplo de uso:
console.log(fibonacciMemoization(10)); // Devuelve 55

// La implementación con memoización almacena los valores de Fibonacci previamente calculados en un objeto memo para evitar repetir cálculos. Esta técnica mejora significativamente el rendimiento para valores grandes de "n".