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

const list = new DoublyLinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);



console.log(list.printList());
console.log(list.printListFromTail());
console.log(list.size);