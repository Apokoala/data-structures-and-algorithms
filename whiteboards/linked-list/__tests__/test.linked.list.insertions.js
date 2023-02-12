const { LinkedList } = require('../linked_list_insertions/index');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
  });

  describe('append', () => {
    it('adds a new node to the end of the linked list', () => {
      linkedList.append(5);
      expect(linkedList.tail.value).toBe(5);
      expect(linkedList.head.next.next.next.value).toBe(5);
    });
  });

  describe('insertBefore', () => {
    it('inserts a new node before a target node', () => {
      linkedList.insertBefore(3, 5);
      expect(linkedList.head.next.value).toBe(5);
      expect(linkedList.head.next.next.value).toBe(3);
    });
  });

  describe('insertAfter', () => {
    it('inserts a new node after a target node', () => {
      linkedList.insertAfter(3, 5);
      expect(linkedList.head.next.value).toBe(3);
      expect(linkedList.head.next.next.value).toBe(5);
    });
  });
});