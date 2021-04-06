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
        }

        str += '<tail>';
        return str;
    }
}

const list = new DoublyLinkedList();

console.log(list.printList());