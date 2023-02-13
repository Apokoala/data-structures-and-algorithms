const LinkedList = require('../linked.list.zip');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('append', () => {
    it('should add a new node with the given value to the end of the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.head.value).toEqual(1);
      expect(linkedList.head.next.value).toEqual(2);
      expect(linkedList.head.next.next.value).toEqual(3);
    });
  });

  describe('zipLists', () => {
    it('should merge two linked lists by alternating elements from each list', () => {
      let linkedListA = new LinkedList();
      linkedListA.append(1);
      linkedListA.append(3);
      linkedListA.append(5);
  
      let linkedListB = new LinkedList();
      linkedListB.append(2);
      linkedListB.append(4);
      linkedListB.append(6);
  
      let mergedList = linkedList.zipLists(linkedListA, linkedListB);
      expect(mergedList.head.value).toEqual(1);
      expect(mergedList.head.next.value).toEqual(2);
      expect(mergedList.head.next.next.value).toEqual(3);
      expect(mergedList.head.next.next.next.value).toEqual(4);
      expect(mergedList.head.next.next.next.next.value).toEqual(5);
      expect(mergedList.head.next.next.next.next.next.value).toEqual(6);
    });
  });
});
