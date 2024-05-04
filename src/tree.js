function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const newNode = new Node(data);
    if (toNodeData) {
      const parent = this.findBFS(toNodeData);
      if (parent) {
        parent.children.push(newNode);
      } else {
        console.log("Parent not found");
      }
    } else {
      if (!this.root) {
        this.root = newNode;
      } else {
        console.log("Root already exists. Add the node to a specific node.");
      }
    }
  }

  remove(data) {
    if (this.root && this.root.data === data) {
      this.root = null;
      return;
    }

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].data === data) {
          node.children.splice(i, 1); // Removes the child
          return;
        }
        queue.push(node.children[i]);
      }
    }
  }

  contains(data) {
    return !!this.findBFS(data);
  }

  findBFS(data) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.data === data) {
        return node;
      }
      queue.push(...node.children);
    }
    return null;
  }

  preOrder(node, fn) {
    if (!node) return;
    fn(node);
    node.children.forEach((child) => this.preOrder(child, fn));
  }

  postOrder(node, fn) {
    if (!node) return;
    node.children.forEach((child) => this.postOrder(child, fn));
    fn(node);
  }

  traverseDFS(fn, method = "preOrder") {
    if (!this.root) {
      return console.log("Empty Tree");
    }
    this[method](this.root, fn);
  }

  traverseBFS(fn) {
    if (!this.root) {
      return console.log("Empty Tree");
    }
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      fn(node);
      queue.push(...node.children);
    }
  }

  print() {
    if (!this.root) {
      console.log("The tree is empty");
      return;
    }
    const newline = new Node("\n");
    const queue = [this.root, newline];
    let string = "";
    while (queue.length) {
      const node = queue.shift();
      string += node === newline ? "\n" : node.data + " ";
      if (node !== newline) {
        queue.push(...node.children);
      }
      if (node === newline && queue.length) {
        queue.push(newline);
      }
    }
    console.log(string.trim());
  }
}

// Usage example
const tree = new Tree();
tree.add("Root");
tree.add("Child1", "Root");
tree.add("Child2", "Root");
tree.add("Grandchild1", "Child1");

tree.traverseBFS((node) => console.log(node.data));
// Output should be: Root Child1 Child2 Grandchild1

tree.print();
// Output should visually display the tree levels
