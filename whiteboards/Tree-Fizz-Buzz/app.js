"use strict";
class KTNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}
const test = new KTNode(1, [
  new KTNode(2),
  new KTNode(3, [new KTNode(4, [new KTNode(5), new KTNode(6)]), new KTNode(7)]),
  new KTNode(8, [new KTNode(9, [new KTNode(10), new KTNode(11)]), new KTNode(12)]),
  new KTNode(13, [new KTNode(14, [new KTNode(15), new KTNode(16)])]),
]);


function fizzBuzzTree(tree) {
  // escape clause if no tree
  if (!tree) return null;

  if (tree.value % 3 === 0 && tree.value % 5 === 0) {
    tree.value = "FizzBuzz";
  } else if (tree.value % 3 === 0) {
    tree.value = "Fizz";
  } else if (tree.value % 5 === 0) {
    tree.value = "Buzz";
  }

  tree.children.forEach(child => fizzBuzzTree(child));

  return tree;
}

function printTree(tree, level = 0) {
  if (!tree) return;

  console.log(" ".repeat(level * 4) + `new KTNode(${tree.value}, [`);

  tree.children.forEach(child => printTree(child, level + 1));

  if (tree.children.length === 0) {
    console.log(" ".repeat(level * 4) + "]),");
  } else {
    console.log(" ".repeat(level * 4) + "]),");
  }
}

fizzBuzzTree(test);
printTree(test);