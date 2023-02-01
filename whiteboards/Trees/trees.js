'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let numbers = [];

    let _walk = (node) => {
      result.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      return;
    };
    _walk(this.root);
    return numbers;
  }

  inOrder() {
    let numbers = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      numbers.push(node.value);
      if (node.right) _walk(node.right);
      return;
    };
    _walk(this.root);
    return numbers;
  }

  postOrder() {
    let numbers = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      numbers.push(node.value);
      return;
    };

    _walk(this.root);
    return numbers;
  }
}

class BST extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      _walk(this.root, newNode);
    }

    function _walk(current, newNode) {
      if (newNode.value < current.value) {
        if (current.left) _walk(current.left, newNode);
        else current.left = newNode;
      }
      if (newNode.value > current.value) {
        if (current.right) _walk(current.right, newNode);
        else current.right = newNode;
      }
      return;
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}

module.exports = {BinaryTree,BST,Node};