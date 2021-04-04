class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(node) {
        if (!(node instanceof Node) && node !== null) {
            throw Error('Must be a Node or null');
        } else {
            this.next = node;
        }
    } 

    getPreviousNode() {
        return this.previous;
    }

    setPreviousNode(node) {
        if (!(node instanceof Node) && node !== null) {
            throw Error('Must be a Node or null');
        } else {
            this.previous = node;
        }
    }
}

module.exports = Node;