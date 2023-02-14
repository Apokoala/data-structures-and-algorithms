const { BinaryTree, BST, Node } = require('../trees');

describe('BinaryTree', () => {
  it('preOrder() should return node values in pre-order', () => {
    const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));
    const binaryTree = new BinaryTree(root);
    expect(binaryTree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  it('inOrder() should return node values in in-order', () => {
    const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));
    const binaryTree = new BinaryTree(root);
    expect(binaryTree.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });
});

describe('BST', () => {
  it('add() should add a new node to the BST', () => {
    const bst = new BST();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  it('contains() should return true if the value is in the BST', () => {
    const bst = new BST();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });
});