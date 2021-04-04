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

    addToTail(data) {
        const newTail = new Node(data);

        if (!this.head) {
            this.head = newTail;
        } else {
            let current = this.head;

            while(current.getNextNode()) {
                current = current.getNextNode();
            }

            current.setNextNode(newTail);
        }

        this.size++;
    }

    removeTail() {
        let current = this.head;
        let previous = null;

        if (!this.head) {
            return null;
        } else if (!this.head.getNextNode()) {
            this.head = null;
        } else {
            while (current.getNextNode()) {
                previous = current;
                current = current.getNextNode();
            }
    
            previous.setNextNode(null);
        }

        this.size--;
        return current;
    }

    removeByData(data) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = null;

        
        while (current) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.getNextNode();
                } else {
                    previous.setNextNode(current.getNextNode());
                }
                current.setNextNode(null);
                this.size--;
                return current;
            }
            previous = current;
            current = current.getNextNode(); 
        }
        
        if (!current) {
            return null;
        }
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
list.addToTail(4);
list.addToTail(5);
list.removeByData(1);
list.removeByData(2);
list.removeByData(5);
list.removeByData(3);
list.removeByData(4);

console.log(list.size);
console.log(list.printList());