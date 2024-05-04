class Graph {
  constructor() {
    this.vertices = []; // List of vertices
    this.edges = {}; // Adjacency list for storing edges
    this.numberOfEdges = 0; // Count of total edges
  }

  addVertex(vertex) {
    // Add the vertex to the vertices array if not already included
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.edges[vertex] = []; // Initialize an empty array for edges
    }
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index >= 0) {
      // Remove the vertex
      this.vertices.splice(index, 1);
      // Also remove all edges associated with this vertex
      while (this.edges[vertex].length) {
        const adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
      }
      delete this.edges[vertex]; // Finally, remove the vertex from the edge list
    }
  }

  addEdge(vertex1, vertex2) {
    // Ensure both vertices exist in the graph
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    // Add an edge if it doesn't already exist
    if (!this.edges[vertex1].includes(vertex2)) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
      this.numberOfEdges++;
    }
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.edges[vertex1]
      ? this.edges[vertex1].indexOf(vertex2)
      : -1;
    const index2 = this.edges[vertex2]
      ? this.edges[vertex2].indexOf(vertex1)
      : -1;
    if (index1 >= 0) {
      this.edges[vertex1].splice(index1, 1);
      this.numberOfEdges--;
    }
    if (index2 >= 0) {
      this.edges[vertex2].splice(index2, 1);
    }
  }

  size() {
    return this.vertices.length; // Number of vertices
  }

  relations() {
    return this.numberOfEdges; // Number of edges
  }

  traverseDFS(vertex, fn, visited = {}) {
    // Depth-first search
    if (this.vertices.includes(vertex) && !visited[vertex]) {
      visited[vertex] = true;
      fn(vertex);

      this.edges[vertex].forEach((adjacentVertex) => {
        this.traverseDFS(adjacentVertex, fn, visited);
      });
    }
  }

  traverseBFS(vertex, fn) {
    // Breadth-first search
    if (this.vertices.indexOf(vertex) < 0) {
      return console.log("Vertex not found");
    }
    const queue = [vertex];
    const visited = { [vertex]: true };

    while (queue.length) {
      const currentVertex = queue.shift();
      fn(currentVertex);
      this.edges[currentVertex].forEach((adjacentVertex) => {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      });
    }
  }

  print() {
    console.log(
      this.vertices
        .map((vertex) => {
          return `${vertex} => ${this.edges[vertex].join(", ")}`.trim();
        })
        .join(" | ")
    );
  }
}

// Usage example
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
