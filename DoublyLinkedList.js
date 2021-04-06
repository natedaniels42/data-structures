const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
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

console.log(list.printList());
console.log(list.printListFromTail());