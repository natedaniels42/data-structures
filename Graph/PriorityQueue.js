class PriorityQueue {
    constructor() {
        this.heap = null;
        this.size = 0;
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