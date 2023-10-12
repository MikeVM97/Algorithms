// CALCULAR COMPLEJIDAD TEMPORAL DE UN ALGORITMO.

function sumaArreglo(arr) {
  let suma = 0; // Inicializamos la suma en cero
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i]; // Sumamos cada elemento del arreglo
  }
  return suma; // Devolvemos la suma total
}

// Ahora, vamos a calcular la complejidad temporal de este algoritmo paso a paso:

// Paso 1: Identifica las operaciones fundamentales.
// En este caso, las operaciones fundamentales son las siguientes:

//     Inicializar la variable suma en cero.
//     Iniciar un bucle for.
//     Sumar un elemento del arreglo a la variable suma.
//     Incrementar el índice i.

// Paso 2: Establece el tamaño de la entrada.
// La variable n representa el tamaño de la entrada, que es la longitud del arreglo arr.

// Paso 3: Cuantifica la cantidad de operaciones.

//     La operación de inicialización de suma se realiza una vez, por lo que es O(1).
//     El bucle for se ejecuta exactamente n veces (una vez para cada elemento del arreglo).
//     La suma de un elemento del arreglo y el incremento de i se realizan n veces.

// Paso 4: Expresa la complejidad en notación "O".

//     La inicialización de suma es O(1) porque es una operación constante.
//     El bucle for es O(n) porque se ejecuta n veces en función del tamaño de la entrada.
//     Las operaciones dentro del bucle también son O(n) porque se ejecutan n veces.

// Paso 5: Complejidad temporal total.
// La complejidad temporal total es la suma de las complejidades individuales, por lo que en este caso, la complejidad temporal del algoritmo es O(1) + O(n) + O(n), que se simplifica a O(n).

// Entonces, la complejidad temporal de este algoritmo es lineal, lo que significa que el tiempo de ejecución crece linealmente con el tamaño del arreglo de entrada. En resumen, para este algoritmo de suma, la complejidad es O(n), lo que es eficiente y aceptable para arreglos de cualquier tamaño.