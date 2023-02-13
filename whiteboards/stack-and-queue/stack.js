class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            throw new Error('Stack is empty');
        }
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    peek() {
        if (!this.top) {
            throw new Error('Stack is empty');
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            throw new Error('Queue is empty');
        }
        const value = this.front.value;
        this.front = this.front.next;
        return value;
    }

    peek() {
        if (!this.front) {
            throw new Error('Queue is empty');
        }
        return this.front.value;
    }

    isEmpty() {
        return this.front === null;
    }
}

module.exports = { Stack, Queue };