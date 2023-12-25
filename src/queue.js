const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.front = null; // Pointer to the front of the queue
    this.rear = null; // Pointer to the rear of the queue
  }

  // Adds an element to the queue
  enqueue(value) {
    let newNode = new ListNode(value);

    if (this.rear === null) {
      // Queue is empty
      this.front = this.rear = newNode;
    } else {
      // Add the new node at the end of the queue and change rear
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Removes and returns the front element from the queue
  dequeue() {
    if (this.front === null) {
      // Queue is empty
      return null;
    }

    let value = this.front.value;
    this.front = this.front.next;

    // If the queue becomes empty, make the rear null as well
    if (this.front === null) {
      this.rear = null;
    }

    return value;
  }

  // Returns the underlying linked list
  getUnderlyingList() {
    return this.front;
  }
}

module.exports = {
  Queue
};
