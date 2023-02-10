const KTNode = require("./KTNode");
const fizzBuzzTree = require("./fizzBuzzTree");

describe("fizzBuzzTree", () => {
  test("changes the values of the tree based on the FizzBuzz rules", () => {
    const test = new KTNode(1, [
      new KTNode(2),
      new KTNode(3, [new KTNode(4, [new KTNode(5), new KTNode(6)]), new KTNode(7)]),
      new KTNode(8, [new KTNode(9, [new KTNode(10), new KTNode(11)]), new KTNode(12)]),
      new KTNode(13, [new KTNode(14, [new KTNode(15), new KTNode(16)])]),
    ]);

    const expected = new KTNode(1, [
      new KTNode(2),
      new KTNode("Fizz", [new KTNode(4, [new KTNode(5), new KTNode(6)]), new KTNode("Fizz")]),
      new KTNode(8, [new KTNode("Fizz", [new KTNode("Buzz"), new KTNode(11)]), new KTNode("Fizz")]),
      new KTNode("Fizz", [new KTNode(14, [new KTNode("FizzBuzz"), new KTNode(16)])]),
    ]);

    expect(fizzBuzzTree(test)).toEqual(expected);
  });
});