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

    reverseList() {
        if (!this.head) {
            throw Error('List is empty');
        }
        
        let current = this.head;
        let previous = null;
        let next = current.getNextNode();

        if (!next) {
            return this;
        } else {
            while(current) {
                current.setNextNode(previous);
                previous = current;
                current = next;
                if (current) {
                    next = current.getNextNode();
                }
            }
            this.head = previous;
            return this;
        }
    }

    reverseListRecursively(head = this.head) {
        if (!head || !head.getNextNode()) {
            return head;
        }

        const newHead = this.reverseListRecursively(head.getNextNode());
        head.getNextNode().setNextNode(head);
        head.setNextNode(null);
        this.head = newHead;
        return newHead;
    }

    deleteList() {
        if (!this.head) {
            return null
        }

        while (this.head) {
            this.removeHead();
        }
    }

    getNthNodeFromEnd(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;
        let counter = 0;

        if (!firstPointer) {
            return null;
        }

        while (firstPointer) {
            counter++;
            firstPointer = firstPointer.getNextNode();
            if (counter > n) {
                secondPointer = secondPointer.getNextNode();
            }
        }

        if (counter < n) {
            return null;
        } 

        return secondPointer.data;
    }

    getMiddleNode() {
        let firstPointer = this.head;
        let secondPointer = this.head;
        let counter = 0;

        if (!firstPointer) {
            return null;
        }

        while (firstPointer) {
            counter++;
            firstPointer = firstPointer.getNextNode();
            if (counter % 2 === 0) {
                secondPointer = secondPointer.getNextNode();
            }
        }

        return secondPointer.data;
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

    printListFromTail() {
        let str = '';
        let current = this.head;

        while (current) {
            str = `${current.data} ${str}`;
            current = current.getNextNode();
        }

        str = `<tail> ${str}<head>`;
        return str;
    }
}

module.exports = LinkedList;