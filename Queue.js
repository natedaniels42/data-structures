const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        if (!this.hasRoom()) {
            throw Error('Queue is full');
        } else {
            this.queue.addToTail(data);
            this.size++;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw Error('Queue is empty');
        } else {
            const removedHead = this.queue.removeHead();
            this.size--;
            return removedHead;
        }
    }
}

module.exports = Queue;