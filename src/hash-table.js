class HashTable {
  constructor(size) {
    this.values = {}; // Stores the hash table items
    this.numberOfValues = 0; // Count of current stored items
    this.size = size; // The size of the hash table
  }

  calculateHash(key) {
    // Simple hash function to calculate hash based on the length of the key modulo size
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      // If there's no entry for this hash, create a new bucket
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      // Only increment numberOfValues if the key is new
      this.numberOfValues++;
    }
    // Store the key and value in the correct bucket
    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      // Remove the key from the bucket
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      // Return the value associated with the key
      return this.values[hash][key];
    }
    return null; // If key is not found, return null
  }

  length() {
    // Return the number of key-value pairs in the hash table
    return this.numberOfValues;
  }

  print() {
    let string = "";
    for (const hash in this.values) {
      for (const key in this.values[hash]) {
        string += `${key}: ${this.values[hash][key]} `;
      }
    }
    console.log(string.trim());
  }
}

// Usage Example
const hashTable = new HashTable(30);
hashTable.add("name", "John Doe");
hashTable.add("age", "30");
hashTable.add("occupation", "Software Engineer");

console.log("Search for age:", hashTable.search("age")); // Should output: 30
hashTable.print(); // Should output: name: John Doe age: 30 occupation: Software Engineer

hashTable.remove("age");
console.log("After removing age, length:", hashTable.length()); // Should output: 2
