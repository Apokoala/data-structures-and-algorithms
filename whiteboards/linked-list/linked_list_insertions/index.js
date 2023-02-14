class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    insertBefore(value, newValue) {
      if (!this.head) return false;
  
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode) {
        if (currentNode.value === value) {
          const newNode = new Node(newValue);
          newNode.next = currentNode;
          if (previousNode) {
            previousNode.next = newNode;
          } else {
            this.head = newNode;
          }
          this.length++;
          return true;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return false;
    }
  
    insertAfter(value, newValue) {
      if (!this.head) return false;
  
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          const newNode = new Node(newValue);
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          if (currentNode === this.tail) {
            this.tail = newNode;
          }
          this.length++;
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }
  
  module.exports = { LinkedList };
  
  
  