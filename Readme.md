# Data Structure Implementations in JavaScript

This repository contains JavaScript implementations of several fundamental data structures. Each structure is implemented with methods for common operations and is accompanied by explanations and usage examples.

## Contents

- [Binary Search Tree (BST)](src/binary-search-tree.js)
- [Doubly Linked List](src/doubly-linked-list.js)
- [Graph](src/graph.js)
- [Hash Table](src/hash-table.js)
- [Queue](src/queue.js)
- [Singly Linked List](src/singly-linked-list.js)
- [Tree](src/tree.js)

## Binary Search Tree (BST)

A Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

**Features Implemented:**

- Insertion
- Deletion
- Searching
- Traversal (in-order, pre-order, post-order)

**Usage:**

```javascript
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
```

## Doubly Linked List

A Doubly Linked List is a linear data structure that includes a head and a tail, where each node contains a link to the next node and a link to the previous node.

**Features Implemented:**

- Insertion (at beginning, end, and after a given node)
- Deletion (from beginning, end, and a specific node)
- Search for a value in the list
- Traversal (forward and backward)

**Usage:**

```javascript
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
```

## Graph

A Graph is a non-linear data structure consisting of nodes (or vertices) and edges connecting pairs of nodes. Implemented as both directed and undirected graphs.

**Features Implemented:**

- Add vertex
- Add edge
- Graph traversal (Breadth-First Search and Depth-First Search)

**Usage:**

```javascript
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.print(); // A => B, C | B => A, C | C => A, B

graph.removeVertex("C");
graph.print(); // A => B | B => A

graph.traverseDFS("A", (vertex) => console.log(vertex)); // A B
graph.traverseBFS("A", (vertex) => console.log(vertex)); // A B
```

## Hash Table

A Hash Table is a data structure which organizes data using hash functions to enable quick insertion and search.

**Features Implemented:**

- Insertion
- Deletion
- Access

**Usage:**

```javascript
const hashTable = new HashTable(30);
hashTable.add("name", "John Doe");
hashTable.add("age", "30");
hashTable.add("occupation", "Software Engineer");

console.log("Search for age:", hashTable.search("age")); // Should output: 30
hashTable.print(); // Should output: name: John Doe age: 30 occupation: Software Engineer

hashTable.remove("age");
console.log("After removing age, length:", hashTable.length()); // Should output: 2
```

## Queue

A Queue is a linear structure which follows a particular order in which the operations are performed, specifically FIFO (First In, First Out).

**Features Implemented:**

- Enqueue
- Dequeue
- Peek

**Usage:**

```javascript
const queue = new Queue();
queue.enqueue("Apple");
queue.enqueue("Banana");
queue.enqueue("Cherry");

console.log("Current Queue:"); // Output will be: Apple Banana Cherry
queue.print();

console.log("First item:", queue.peek()); // Output will be: Apple
console.log("Queue length:", queue.length()); // Output will be: 3

const firstItem = queue.dequeue();
console.log("Dequeued item:", firstItem); // Output will be: Apple
console.log("Queue after dequeue:"); // Output will be: Banana Cherry
queue.print();

console.log("Is the queue empty?", queue.isEmpty()); // Output will be: false
queue.dequeue();
queue.dequeue();
console.log("Is the queue empty after removing all items?", queue.isEmpty()); // Output will be: true
```

## Singly Linked List

A Singly Linked List is a type of linked list that is unidirectional, that is, it can only be traversed in one direction from the head to the last node (tail).

**Features Implemented:**

- Insertion
- Deletion
- Search

**Usage:**

```javascript
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
```

## Tree

A Tree is a non-linear data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node.

**Features Implemented:**

- Insertion
- Deletion
- Traversal

**Usage:**

```javascript
const tree = new Tree();
tree.add("Root");
tree.add("Child1", "Root");
tree.add("Child2", "Root");
tree.add("Grandchild1", "Child1");

tree.traverseBFS((node) => console.log(node.data));
// Output should be: Root Child1 Child2 Grandchild1

tree.print();
// Output should visually display the tree levels
```

## Contributing

Contributions to this repository are welcome. See the [CONTRIBUTING.md](CONTRIBUTING.md). file for detailed contributing guidelines.

## License

This project is licensed under the [MIT License](LICENSE.txt).

## Author

Name: [Chi Thanh Dang](https://www.tcdtist.com)
