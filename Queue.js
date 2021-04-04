const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }
    
}