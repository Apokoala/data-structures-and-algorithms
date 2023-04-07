const { Graph } = require("../graph.breadth.first");

describe('Graph', () => {
    let graph;
  
    beforeEach(() => {
      graph = new Graph();
    });
  
    describe('addNode', () => {
      it('should add a node to the graph', () => {
        graph.addNode(1);
        expect(graph.nodes).toContain(1);
        expect(graph.adjacencyList[1]).toEqual([]);
      });
    });
  
    describe('addEdge', () => {
      it('should add an edge between two nodes', () => {
        graph.addNode(1);
        graph.addNode(2);
        graph.addEdge(1, 2);
        expect(graph.adjacencyList[1]).toContain(2);
        expect(graph.adjacencyList[2]).toContain(1);
      });
    });
  
    describe('breadthFirst', () => {
      it('should return the correct order of visited nodes', () => {
        graph.addNode(1);
        graph.addNode(2);
        graph.addNode(3);
        graph.addNode(4);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 4);
        const result = graph.breadthFirst(1);
        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });
  