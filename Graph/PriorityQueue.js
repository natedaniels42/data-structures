const Vertex = require('./Vertex');

class PriorityQueue {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add({vertex, priority}) {
        this.heap.push({vertex, priority});
        this.size++;
        this.bubbleUp();
    }

    bubbleUp() {
        let current = this.size;

        while(current > 1 && this.heap[current].priority < this.heap[this.getParent(current)].priority) {
            this.swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    canSwap(current, left, right) {
        return (this.exists(left) && this.heap[left].priority < this.heap[current].priority) 
            || (this.exists(right) && this.heap[right].priority < this.heap[current].priority);
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    } 

    exists(index) {
        return index <= this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    getParent(current) {
        return Math.floor(current / 2);
    }

    getLeft(current) {
        return current * 2;
    }

    getRight(current) {
        return current * 2 + 1;
    }
}

const pq = new PriorityQueue();
const twenty = new Vertex(20);
const ten = new Vertex(10);
const five = new Vertex(5);
pq.add({vertex: twenty, priority: 20});
pq.add({vertex: ten, priority: 10});
pq.add({vertex: five, priority: 5});
console.log(pq.heap);