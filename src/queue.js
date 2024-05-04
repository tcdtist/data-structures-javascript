class Queue {
  constructor() {
    this.queue = []; // Initialize an empty array to store the elements of the queue.
  }

  enqueue(value) {
    // Add a new value to the end of the queue.
    this.queue.push(value);
  }

  dequeue() {
    // Remove the first element from the queue and return it.
    // This is the oldest element in the queue (FIFO order).
    return this.queue.shift();
  }

  peek() {
    // Return the first element in the queue without removing it.
    // If the queue is empty, return undefined.
    return this.queue[0];
  }

  isEmpty() {
    // Return true if the queue has no elements, false otherwise.
    return this.queue.length === 0;
  }

  length() {
    // Return the number of elements currently in the queue.
    return this.queue.length;
  }

  print() {
    // Print all elements in the queue from front to back.
    console.log(this.queue.join(" "));
  }
}

// Usage Example
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
