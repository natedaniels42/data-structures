const LinkedList = require('./LinkedList');

class HashMap {
    constructor(size = 4) {
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        return key.split('').map(char => char.charCodeAt(0)).reduce((a,c) => a + c) % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const list = this.hashmap[arrayIndex];

        let current = list.head;

        if (!current) {
            list.addToHead({key, value});
        } else {
            while (current.getNextNode()) {
                if (current.data.key === key) {
                    current.data = {key, value};
                    return;
                }
                current = current.getNextNode();
                
            }
        
            if (current.data.key === key) {
                current.data = {key, value};
            } else {
                list.addToTail({key, value});
            }
        }
    }

    retrieve(key) {
        const arrayIndex = this.hash(key);
        const list = this.hashmap[arrayIndex];
       
        if (!list.head) {
            return null;
        } else {
            let current = list.head;

            while (current) {
                if (current.data.key === key) {
                    return current.data.value;
                }
                current = current.getNextNode();
            }

            return null;
        }
    }
}

const hm = new HashMap(4);
hm.assign('cat', 'Felix');
hm.assign('act', 'Play');
hm.assign('tac', 'Tic');
hm.assign('cat', 'Garfield');

console.log(hm.retrieve('tac'));