class Node {
  constructor(data) {
    this.data = data; // Node data
    this.left = null; // Reference to the left child
    this.right = null; // Reference to the right child
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Initialize the root to null
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root) {
      // If there is no root, make newNode the root
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          // Place data in the left subtree
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (data > current.data) {
          // Place data in the right subtree
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          // Data already exists, do not add duplicate
          return undefined;
        }
      }
    }
    return this;
  }

  findMinNode(node) {
    // Find the node with the minimum data
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  remove(data, node = this.root) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      // Node found
      if (!node.left) return node.right; // Node has no left child
      if (!node.right) return node.left; // Node has no right child

      // Node has two children, find the inorder successor
      let temp = this.findMinNode(node.right);
      node.data = temp.data;
      node.right = this.remove(temp.data, node.right);
    }
    return node;
  }

  contains(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true; // Data found
      current = data < current.data ? current.left : current.right;
    }
    return false; // Data not found
  }

  traverseDFS(fn, method = "preOrder") {
    const current = this.root;
    this[method](current, fn);
  }

  traverseBFS(fn) {
    let queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (fn) fn(node); // Process the current node
      if (node.left) queue.push(node.left); // Add left child to queue
      if (node.right) queue.push(node.right); // Add right child to queue
    }
  }

  getHeight(node = this.root) {
    if (!node) return -1;
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  isBalanced(node = this.root) {
    if (!node) return true;
    let leftHeight = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);
    let diff = Math.abs(leftHeight - rightHeight) <= 1;
    return diff && this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  preOrder(node, fn) {
    if (node) {
      if (fn) fn(node); // Process the node
      this.preOrder(node.left, fn); // Process all the left subtree
      this.preOrder(node.right, fn); // Process all the right subtree
    }
  }

  inOrder(node, fn) {
    if (node) {
      this.inOrder(node.left, fn); // Process all the left subtree
      if (fn) fn(node); // Process the node
      this.inOrder(node.right, fn); // Process all the right subtree
    }
  }

  postOrder(node, fn) {
    if (node) {
      this.postOrder(node.left, fn); // Process all the left subtree
      this.postOrder(node.right, fn); // Process all the right subtree
      if (fn) fn(node); // Process the node
    }
  }

  print() {
    if (!this.root) {
      return console.log("No root node");
    }
    let queue = [this.root];
    let string = "";
    while (queue.length) {
      const node = queue.shift();
      string += node.data.toString() + " ";
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log(string.trim());
  }

  printByLevel() {
    if (!this.root) {
      return console.log("No root node");
    }
    let queue = [this.root];
    let string = "";
    while (queue.length) {
      const node = queue.shift();
      string += node.data.toString() + " ";
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log(string.trim());
  }
}

// Usage example
const bst = new BinarySearchTree();
bst.add(15);
bst.add(10);
bst.add(20);
bst.add(25);
bst.add(8);
bst.add(12);

console.log("BST contains 20:", bst.contains(20)); // Should return true
console.log("BST contains 100:", bst.contains(100)); // Should return false

bst.remove(20);
console.log("BST contains 20 after removal:", bst.contains(20)); // Should return false

// Traversing with print
bst.print(); // Prints all nodes in BFS order
bst.traverseDFS((node) => console.log(node.data), "inOrder"); // Print in-order traversal
