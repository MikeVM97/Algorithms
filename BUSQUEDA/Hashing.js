// La búsqueda por hash (hashing) es una técnica que utiliza una función de hash para mapear claves a valores en una estructura de datos llamada tabla hash. La complejidad temporal de la búsqueda por hash depende en gran medida de la implementación de la función de hash y de cómo se manejan las colisiones en la tabla hash. No es necesariamente una complejidad constante, ya que puede variar en función del input y de la distribución de las claves.

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  search(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    for (let item of this.table[index]) {
      if (item.key === key) {
        return item.value;
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return; // No hay elementos con esta clave
    }

    const updatedTable = this.table[index].filter((item) => item.key !== key);

    if (updatedTable.length === 0) {
      this.table[index] = undefined;
    } else {
      this.table[index] = updatedTable;
    }
  }
}

// Ejemplo de uso:
const hashTable = new HashTable(10);
hashTable.insert("nombre", "Juan");
hashTable.insert("edad", 25);

console.log(hashTable.search("nombre")); // Devuelve "Juan"
console.log(hashTable.search("edad"));   // Devuelve 25
console.log(hashTable.search('ciudad')); // Devuelve null (no se encontró)
console.log(hashTable.hash('nombre')); // Devuelve 3, la posición en la que se encuentra.
console.log(hashTable.hash('edad')); // Devuelve 8

hashTable.remove('edad');
console.log(hashTable.search('edad')); // Devuelve null (ha sido eliminado);

// La complejidad temporal de la búsqueda por hash depende de varios factores:

// Función de hash: La eficiencia de la función de hash es crítica. Una buena función de hash debería distribuir las claves de manera uniforme en la tabla hash. En el mejor de los casos, una función de hash bien diseñada puede lograr una complejidad O(1) para búsquedas, pero en el peor de los casos, si todas las claves colisionan en el mismo índice, la complejidad podría ser O(n), donde "n" es el número de elementos.

// Colisiones: Las colisiones ocurren cuando múltiples claves se asignan al mismo índice en la tabla hash. La forma en que se gestionan las colisiones, como a través de listas enlazadas o árboles, puede afectar la complejidad de la búsqueda.

// Tamaño de la tabla hash: El tamaño de la tabla hash puede influir en la complejidad. Una tabla hash más grande tiende a reducir las colisiones, pero también aumenta el costo de memoria.

// En resumen, la complejidad temporal de la búsqueda por hash puede variar en función de la distribución de claves, la función de hash y la gestión de colisiones. En el mejor de los casos, cuando se diseñan adecuadamente, las búsquedas por hash pueden ser O(1), pero en el peor de los casos, la complejidad puede ser mayor, dependiendo de la implementación.

// ----------------------------------------------------------------

function createHashTable(size) {
  const table = new Array(size);

  function hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % size;
  }

  function insert(table, key, value) {
    const index = hash(key);
    if (!table[index]) {
      table[index] = [];
    }
    table[index].push({ key, value });
  }

  function search(table, key) {
    const index = hash(key);
    if (!table[index]) {
      return null;
    }
    for (let item of table[index]) {
      if (item.key === key) {
        return item.value;
      }
    }
    return null;
  }

  function remove(table, key) {
    const index = hash(key);
    if (!table[index]) {
      return; // No hay elementos con esta clave
    }

    const updatedTable = table[index].filter((item) => item.key !== key);

    if (updatedTable.length === 0) {
      table[index] = undefined;
    } else {
      table[index] = updatedTable;
    }
  }
     

  return { insert: insert.bind(null, table), search: search.bind(null, table), hash, remove: remove.bind(null, table) };
}

// const ht1 = createHashTable(10);
// ht1.insert('nombre', ' Mike');
// ht1.insert('edad', 26);

// console.log(ht1.search('nombre')); // 'Mike'
// console.log(ht1.search('edad')); // 26
// console.log(ht1.hash('nombre')); // 3
// console.log(ht1.hash('edad')); // 8

// ht1.remove('edad');

// console.log(ht1.search('edad')); // null