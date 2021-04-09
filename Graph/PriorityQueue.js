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

    popMin() {
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        this.heapify();
        return min;
    }

    heapify() {
        let current = 1;
        let left = this.getLeft(current);
        let right = this.getRight(current);

        while(this.canSwap(current, left, right)) {
            if (this.exists(left) && this.exists(right)) {
                if (this.heap[left].priority < this.heap[right].priority) {
                    this.swap(current, left);
                    current = left;
                } else {
                    this.swap(current, right);
                    current = right;
                }
            } else {
                this.swap(current, left);
                current = left;
            }
            left = this.getLeft(current);
            right = this.getRight(current);
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

module.exports = PriorityQueue;