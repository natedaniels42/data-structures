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

console.log(list.size);
console.log(list.printList());