const { Stack, Queue } = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push method adds a value to the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
  });

  test('pop method removes a value from the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
  });

  test('peek method returns the value at the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('isEmpty method returns true if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('pop method throws an error if the stack is empty', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('peek method throws an error if the stack is empty', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue method adds a value to the back of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.back.value).toBe(3);
  });

  test('dequeue method removes a value from the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  test('peek method returns the value at the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  test('isEmpty method returns true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('dequeue method throws an error if the queue is empty', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  test('peek method throws an error if the queue is empty', () => {
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});