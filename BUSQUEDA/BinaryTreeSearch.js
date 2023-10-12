// La búsqueda en árboles binarios es un algoritmo utilizado para buscar un elemento específico en un árbol binario. La complejidad temporal de este algoritmo varía en función de la estructura del árbol y puede ser O(log n) en el caso de un árbol binario balanceado, pero en el peor caso, cuando el árbol no está balanceado, podría ser O(n), donde "n" es el número de nodos en el árbol. La complejidad no es constante y depende de la altura del árbol.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return this; // Valor ya existe en el árbol
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true; // Se encontró el valor
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false; // Valor no encontrado
  }

  remove(value) {
    const removeNode = (node, key) => {
      if (!node) {
        return null; // Nodo no encontrado
      }

      if (key < node.value) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.value) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        // Caso 1: Nodo sin hijos
        if (!node.left && !node.right) {
          return null;
        }
        // Caso 2: Nodo con un hijo
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        // Caso 3: Nodo con dos hijos
        let minRight = findMin(node.right);
        node.value = minRight.value;
        node.right = removeNode(node.right, minRight.value);
        return node;
      }
    };

    const findMin = (node) => {
      while (node.left) {
        node = node.left;
      }
      return node;
    };

    this.root = removeNode(this.root, value);
  }
}

// Ejemplo de uso:
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

console.log(binaryTree.search(12)); // Devuelve true
console.log(binaryTree.search(8));  // Devuelve false

binaryTree.remove(15);

console.log(binaryTree.search(15)); // Devuelve false

// La complejidad temporal de la búsqueda en un árbol binario depende de la altura del árbol. En un árbol binario balanceado, la altura es O(log n), lo que resulta en una búsqueda eficiente. Sin embargo, en un árbol desbalanceado, la altura puede ser O(n), lo que significa que la búsqueda podría ser menos eficiente. La variabilidad en la complejidad hace que la eficiencia de la búsqueda en árboles binarios dependa de la estructura del árbol.