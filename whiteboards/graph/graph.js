//
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

//add node. param: string, returns: string.
  addNode(value) {
    //Edge case, node already exists, will return value.
    if (this.adjacencyList.has(value)) {
      return value;
    }
    // Otherwise, create a new node and add it to the graph
    this.adjacencyList.set(value, new Map());
    return value;
  }

//Add edge. Param 1: node 1, param2: node2, param3, weight of edge
  addEdge(node1, node2, weight = 0) {
    // If either node is not in the graph, throw an error
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error('Both nodes must be in the graph to add an edge.');
    }
    //making the edge bidirectional
    // Add an edge from node1 to node2 with the given weight
    this.adjacencyList.get(node1)?.set(node2, weight);

    // Add an edge from node2 to node1 with the same weight (undirected graph)
    this.adjacencyList.get(node2)?.set(node1, weight);
  }

 //isEdge takes in 2 params: node1 and node2, and will return if there is an edge between them
  isEdge(node1, node2) {
    // edge case one or both of the nodes is not in the graph
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      return false;
    }

    // edge case checks to see if edge already exists from n1 to n2
    if (this.adjacencyList.get(node1)?.has(node2)) {
      return true;
    }

    // check for undirected graph edge n2 to n1
    if (this.adjacencyList.get(node2)?.has(node1)) {
      return ('edge exists and is undirected');
    }

    //if no edge return false
    return false;
  }

  //getnodes returns all the nodes in the graph, returns as an array.
  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  //get all the neighbors of a node. Param is node to get neighbors for, returns node as a string, and weight as a number as an array of objects.
  getNeighbors(node) {
    // If the node is not in the graph, return an empty array
    if (!this.adjacencyList.has(node)) {
      return [];
    }

    // Get the map of edges for the given node
    const edgeMap = this.adjacencyList.get(node);

    // Convert the edge map to an array of neighbor nodes
    return Array.from(edgeMap || new Map()).map(([neighbor, weight]) => neighbor);
  }

 //returns number of nodes in a graph
  size() {
    return this.adjacencyList.size;
  }
}

module.exports = { Graph };