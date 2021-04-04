const LinkedList = require('./LinkedList');

class HashMap {
    constructor(size = 4) {
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        return key.split('').map(char => char.charCodeAt(0)).reduce((a,c) => a + c) % this.hashmap.length;
    }
}

const hm = new HashMap(4);

console.log(hm.hash('car'));