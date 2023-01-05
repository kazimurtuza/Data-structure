class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class inserBinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
      var noteValue = this.root.value;

      var newroot = this.root;
      var i = 1;
      while (i != 0) {
        let currentNode = newroot;
        if (currentNode.value === val) i = 0;
        if (currentNode.value > val) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            i = 0;
          } else {
            newroot = currentNode.left;
          }
        }

        if (currentNode.value < val) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            i = 0;
          } else {
            newroot = currentNode.right;
          }
        }
      }
    }

    return this.root;
  }

  search(value) {
    if (this.root == null) return "empty tree";
    let fount = false;
    let current = this.root;
    while (current && !fount) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        fount = true;
      }
    }
    if (!fount) return undefined;
    return current;
  }
}

let tree = new inserBinaryTree();

tree.insert(10);
tree.insert(6);
tree.insert(7);
tree.insert(4);
tree.insert(16);
tree.insert(18);
tree.insert(67);
console.log(tree.search(6));
