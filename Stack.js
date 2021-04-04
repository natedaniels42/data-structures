const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(data) {
        if (!this.hasRoom()) {
            throw Error('Stack is full');
        } else {
            this.stack.addToHead(data);
            this.size++;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw Error('Stack is empty');
        } else {
            const removedHead = this.stack.removeHead();
            this.size--;
            return removedHead;
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw Error('Stack is empty');
        } else {
            return this.stack.head.data;
        }
    }
}

module.exports = Stack;