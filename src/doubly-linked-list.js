class Node {
  constructor(data) {
    this.data = data; // The data stored in the node
    this.previous = null; // Reference to the previous node
    this.next = null; // Reference to the next node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // The first node of the list
    this.tail = null; // The last node of the list
    this.numberOfValues = 0; // The number of nodes in the list
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      // If the list is empty, initialize head and tail to be this new node
      this.head = node;
      this.tail = node;
    } else {
      // Add the new node at the end of the list and adjust pointers
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          // Node is the only node in the list
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          // Node is the head node
          this.head = current.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          // Node is the tail node
          this.tail = current.previous;
          this.tail.next = null;
        } else {
          // Node is in the middle
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.numberOfValues--;
        break; // Exit the loop after removing the node
      }
      current = current.next;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.add(data);
        } else {
          node.next = current.next;
          node.previous = current;
          current.next.previous = node;
          current.next = node;
          this.numberOfValues++;
        }
        break; // Exit the loop after inserting the node
      }
      current = current.next;
    }
  }

  traverse(fn) {
    let current = this.head;
    while (current) {
      fn(current);
      current = current.next;
    }
  }

  traverseReverse(fn) {
    let current = this.tail;
    while (current) {
      fn(current);
      current = current.previous;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let string = "";
    let current = this.head;
    while (current) {
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}

// Usage example
const dll = new DoublyLinkedList();
dll.add(10);
dll.add(20);
dll.add(30);
dll.print(); // Output should be: 10 20 30

dll.remove(20);
dll.print(); // Output should be: 10 30

dll.insertAfter(25, 10);
dll.print(); // Output should be: 10 25 30

dll.traverseReverse((node) => console.log(node.data)); // Output should be: 30 25 10
