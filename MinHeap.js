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

const mh = new MinHeap();
mh.add(10);
mh.add(9);
mh.add(8);
mh.add(7);
mh.add(6);
mh.add(5);

console.log(mh.heap);

