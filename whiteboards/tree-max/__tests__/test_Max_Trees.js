const { BinaryTree } = require('../max_Trees');

describe('BinaryTree', () => {
    describe('findMaximumValue', () => {
        it('should return the maximum value in the tree', () => {
            const tree1 = new BinaryTree(5);
            tree1.left = new BinaryTree(3);
            tree1.left.left = new BinaryTree(1);
            tree1.left.right = new BinaryTree(4);
            tree1.right = new BinaryTree(7);
            tree1.right.left = new BinaryTree(6);
            tree1.right.right = new BinaryTree(8);
            expect(tree1.findMaximumValue()).toBe(8);

            const tree2 = new BinaryTree(10);
            tree2.left = new BinaryTree(5);
            tree2.left.left = new BinaryTree(2);
            tree2.left.right = new BinaryTree(7);
            tree2.right = new BinaryTree(15);
            tree2.right.left = new BinaryTree(12);
            tree2.right.right = new BinaryTree(20);
            expect(tree2.findMaximumValue()).toBe(20);
        });
    });
});