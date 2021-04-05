class MinHeap {
    constructor() {
        this.heap = [null,1,2,0];
        this.size = 0;
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


console.log(mh.heap);

