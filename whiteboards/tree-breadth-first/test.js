function createNode(value, left, right) {
    return { value, left, right };
  }
  
  test(() => {
    const tree = createNode(5, createNode(2, createNode(2), createNode(7)), createNode(9, createNode(5), createNode(11, null, createNode(6, createNode(4), null))));
    const actual = breadthFirstTraversal(tree);
    const expected = [5, 2, 9, 2, 7, 5, 11, 6, 4];
    expect(actual).toEqual(expected);
  });