const { Graph } = require('../graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addNode', () => {
    it('should add a node to the graph', () => {
      const node = graph.addNode('a');
      expect(graph.getNodes()).toContain(node);
    });

    it('should not add duplicate nodes to the graph', () => {
      const node1 = graph.addNode('a');
      const node2 = graph.addNode('a');
      expect(node1).toEqual(node2);
      expect(graph.getNodes()).toContain(node1);
      expect(graph.getNodes().length).toEqual(1);
    });
  });

  describe('addEdge', () => {
    it('should add an edge between two nodes', () => {
      const node1 = graph.addNode('a');
      const node2 = graph.addNode('b');
      graph.addEdge(node1, node2);
      const neighbors = graph.getNeighbors(node1);
      expect(neighbors).toContain(node2);
    });

    it('should add a weighted edge between two nodes', () => {
        const node1 = graph.addNode('a');
        const node2 = graph.addNode('b');
        const weight = 5;
        graph.addEdge(node1, node2, weight);
        const neighbors = graph.getNeighbors(node1);
        expect(neighbors).toContain(node2);
      });

    it('should throw an error if one of the nodes does not exist', () => {
      const node1 = graph.addNode('a');
      const node2 = 'b';
      expect(() => graph.addEdge(node1, node2)).toThrowError('Both nodes must be in the graph to add an edge.');
    });
  });

  describe('getNeighbors', () => {
    it('should return an empty array for a node with no neighbors', () => {
      const node = graph.addNode('a');
      const neighbors = graph.getNeighbors(node);
      expect(neighbors).toEqual([]);
    });

    it('should return an array of neighbors for a node with neighbors', () => {
      const node1 = graph.addNode('a');
      const node2 = graph.addNode('b');
      graph.addEdge(node1, node2);
      const neighbors = graph.getNeighbors(node1);
      expect(neighbors).toContain(node2);
    });
  });
});
