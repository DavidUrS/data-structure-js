class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value > temp.value) {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      } else {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  minimunValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(3);
binarySearchTree.insert(2);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(11);
binarySearchTree.contains(11);
console.log(JSON.stringify(binarySearchTree, null, 5));
console.log(binarySearchTree.contains(2));
console.log(binarySearchTree.contains(3));
console.log(binarySearchTree.minimunValue(binarySearchTree.root));
