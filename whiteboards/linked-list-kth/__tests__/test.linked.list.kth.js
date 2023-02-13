const { LinkedList } = require("../index");

describe('Linked List', () => {
  it('returns null when k is greater than the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(4);
    expect(result).toBe(null);
  });

  it('returns the last node when k and the length of the list are the same', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(3);
    expect(result).toBe(1);
  });

  it('returns null when k is not a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(0);
    expect(result).toBe(null);
  });

  it('returns the only node when the linked list is of size 1', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    const result = linkedList.kthFromEnd(1);
    expect(result).toBe(1);
  });

  it('returns the node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    const result = linkedList.kthFromEnd(2);
    expect(result).toBe(4);
  });
});