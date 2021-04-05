class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
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


console.log(mh.getParent(5));
console.log(mh.getLeft(5));
console.log(mh.getRight(5));