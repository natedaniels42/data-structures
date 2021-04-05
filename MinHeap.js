class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add(value) {
        if (typeof value !== 'number') {
            throw Error('Must be a Number');
        } else {
            this.heap.push(value);
            this.size++;
            this.bubbleUp();
        }
    }

    bubbleUp() {
        let current = this.size;

        while (current > 1 && this.heap[current] < this.heap[this.getParent(current)]) {
            this.swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    popMin() {
        if (this.size === 0) {
            throw Error('Heap is empty');
        } else {
            this.swap(1, this.size);
            const min = this.heap.pop();
            this.size--;
            this.heapify();
            return min;
        }
    }

    heapify() {
        let current = 1;
        let left = this.getLeft(current);
        let right = this.getRight(current);

        while(this.canSwap(current, left, right)) {
            if (this.exists(left) && this.exists(right)) {
                if (this.heap[left] < this.heap[right]) {
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
        return (this.exists(left) && this.heap[left] < this.heap[current]) || (this.exists(right) && this.heap[right] < this.heap[current]);
    }

    exists(current) {
        return current <= this.size;
    } 

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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

module.exports = MinHeap;