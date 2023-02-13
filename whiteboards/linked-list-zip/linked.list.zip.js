class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return this.head;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return this.head;
    }
  
    zipLists(list1, list2) {
      let newList = new LinkedList();
      let currentA = list1.head;
      let currentB = list2.head;
      while (currentA || currentB) {
        if (currentA) {
          newList.append(currentA.value);
          currentA = currentA.next;
        }
        if (currentB) {
          newList.append(currentB.value);
          currentB = currentB.next;
        }
      }
      return newList;
    }
  }
  
  module.exports = LinkedList;