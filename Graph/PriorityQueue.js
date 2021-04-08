class PriorityQueue {
    constructor() {
        this.heap = null;
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