const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;

        if (currentHead) {
            newHead.setNextNode(currentHead);
            currentHead.setPreviousNode(newHead);
        } else {
            this.tail = newHead;
        }

        this.head = newHead;
        this.size++;
    }

    removeHead() {
        const removedHead = this.head;

        if (!removedHead) {
            return null
        }

        if (!removedHead.getNextNode()) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.getNextNode();
            this.head.setPreviousNode(null);
            removedHead.setNextNode(null);
        }

        this.size--;
        return removedHead;
    }

    addToTail(data) {
        if (!this.head) {
            return this.addToHead(data);
        } 

        const newTail = new Node(data);
        const previousTail = this.tail;

        this.tail = newTail;
        newTail.setPreviousNode(previousTail);
        previousTail.setNextNode(newTail);
        this.size++;
    }

    removeTail() {
        if (this.size === 0) {
            return null;
        }

        const removedTail = this.tail;

        if (removedTail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedTail.getPreviousNode();
            removedTail.setPreviousNode(null);
            this.tail.setNextNode(null);
        }

        this.size--;
        return removedTail;
    }

    getNodeByData(data) {
        if (this.size === 0) {
            return null;
        }

        let left = this.head;
        let right = this.tail;
        let leftIndex = 0;
        let rightIndex = this.size - 1;

        while(leftIndex < rightIndex) {
            if (left.data === data) {
                return left;
            } else if (right.data === data) {
                return right;
            }
            left = left.getNextNode();
            right = right.getPreviousNode();
            leftIndex++;
            rightIndex--;
        }

        return null;
    }

    removeNodeByIndex(index) {
        if (this.size - 1 < index) {
            return null;
        }

        let current = index < this.size / 2 ? this.head : this.tail;
        let counter = index < this.size / 2 ? 0 : this.size - 1;
        let front = index < this.size / 2;
        
        while(counter !== index) {
            if (front) {
                current = current.getNextNode();
                counter++;
            } else {
                current = current.getPreviousNode();
                counter--;
            }
        }
        current.getPreviousNode().setNextNode(current.getNextNode());
        current.getNextNode().setPreviousNode(current.getPreviousNode());
        current.setPreviousNode(null);
        current.setNextNode(null);
        this.size--;
        return current;
    }

    reverseList() {
        if (this.size < 2) {
            return this;
        }

        let current = this.head;

        while(current) {
            let temp = current.getNextNode();
            current.setNextNode(current.getPreviousNode());
            current.setPreviousNode(temp);
            current = temp;
        }

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this.head;
    }

    printList() {
        let str = '<head> ';
        let current = this.head;

        while(current) {
            str += `${current.data} `;
            current = current.getNextNode();
        }

        str += '<tail>';
        return str;
    }

    printListFromTail() {
        let str = '<tail> ';
        let current = this.tail;

        while(current) {
            str += `${current.data} `;
            current = current.getPreviousNode();
        }

        str += '<head>';
        return str;
    }
}

module.exports = DoublyLinkedList;