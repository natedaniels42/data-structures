const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const previousHead = this.head;

        if (previousHead) {
            newHead.setNextNode(previousHead);
        }

        this.head = newHead;
        this.size++;
    }

    removeHead() {
        const removedHead = this.head;

        if (!removedHead) {
            return null;
        }

        if (!removedHead.getNextNode()) {
            this.head = null;
        } else {
            this.head = removedHead.getNextNode();
            removedHead.setNextNode(null);
        }

        this.size--;
        return removedHead;
    }

    printList() {
        let str = '<head> ';
        let current = this.head;

        while (current) {
            str += `${current.data} `;
            current = current.getNextNode();
        }

        str += '<tail>';
        return str;
    }
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.removeHead();
list.removeHead();
list.removeHead();
list.removeHead();

console.log(list.size);
console.log(list.printList());