function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list
    this.numberOfValues = 0; // Number of nodes in the list
  }

  addNode(data) {
    const node = new Node(data);
    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, append the new node at the end of the list and update the tail
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }

  removeNode(data) {
    if (!this.head) return; // If the list is empty, do nothing

    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          // If the node to remove is the head, update the head to the next node
          this.head = this.head.next;
          // If the head becomes null, also update the tail to null
          if (!this.head) this.tail = null;
        } else {
          // Link the previous node to the next node, bypassing the current node
          previous.next = current.next;
          // If the node to remove is the tail, update the tail to the previous node
          if (current === this.tail) this.tail = previous;
        }
        this.numberOfValues--;
        break; // Exit the loop after removing the node
      }
      previous = current;
      current = current.next;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        node.next = current.next;
        current.next = node;
        if (current === this.tail) {
          // If the node is inserted after the tail, update the tail to the new node
          this.tail = node;
        }
        this.numberOfValues++;
        break; // Exit the loop after inserting the node
      }
      current = current.next;
    }
  }

  traverse(fn) {
    let current = this.head;
    while (current) {
      fn(current); // Execute function on each node
      current = current.next;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" "));
  }
}

// Usage Example
const list = new SinglyLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.print(); // Output will be: 1 2 3

list.removeNode(2);
list.print(); // Output will be: 1 3

list.insertAfter(5, 1);
list.print(); // Output will be: 1 5 3

list.traverse((node) => console.log(node.data)); // Output will be: 1, 5, 3
