class Graph{
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }
// add node and add edge just for testing
addNode(node){
    this.nodes.push(node);
    this.adjacencyList[node] = [];
}
// add node and add edge just for testing
addEdge(node1, node2){
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
}

breadthFirst(startNode) {
    const queue = [startNode];
    //I am specifically storing visited as an object rather than a set. This is because while i recognize that the "has" method on set
    //is O(1) and an object can be O(1) best case and O(n) worst case, object lookups in this case will be constant-time, will allow for arbitrary keys
    //and will allow us to add or pull other data, such as the distance from the start node. Additionally, set has to store all of the values where objects 
    //can be more memory efficient and specify specific values.
    const visited = {};
    const result = [];

    visited[startNode] = true;

    while (queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode);

        this.adjacencyList[currentNode].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
 }
}
module.exports = {Graph}