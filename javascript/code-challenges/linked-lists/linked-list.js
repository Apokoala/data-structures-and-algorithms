'use strict';

// default value being null so you don't have to pass it later
// node class, any new node we make will have this structure
// singly: always points or has reference to next node in chain
// doubly: points to previous and next
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// this is our linked list class
// head is the very first node of list
// size is a propery you could add to any data structure
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value){
    // add a new node to the head of the list with value argument
    // if this.head === null if it's empty
    // if there is something in the head??
    if (this.head === null){
      this.head = new Node(value);
    } else {
      // let leash = new Node(value, head);
      let current = new Node(value);
      // attaches new node to this.head
      current.next = this.head;
      /// assigns head to current
      this.head = current;
    }
  }

  includes(value){
    // takes value, iterates through list and returns true if a node has a matching value
    // returns false if not
    let current = this.head;
    while (current !== null){
      if (value === current.value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    // "{ a } -> { b } -> { c } -> NULL"
    // while loop that adds/prints each value until we get to null
    let string = '';
    let current = this.head;
    while (current !== null){
      // iterate through linked list and pull out the values
      string = `{ ${ current.value } } -> `;
      // go on to next value
      current = current.next;
    }
    return string += 'NULL';
  }

}

module.exports = LinkedList;