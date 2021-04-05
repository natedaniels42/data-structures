class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    } 

    insert(value) {
        if (typeof value !== 'number') {
            throw Error('Must be a Number');
        } else {
            if (value < this.value) {
                if (this.left) {
                    this.left.insert(value);
                } else {
                    this.left = new BinaryTree(value, this.depth + 1);
                }
            } else {
                if (this.right) {
                    this.right.insert(value);
                } else {
                    this.right = new BinaryTree(value, this.depth + 1);
                }
            }
        }
    }

    getNodeByValue(value) {
        if (typeof value !== 'number') {
            throw Error('Must be a Number');
        } else {
            if (this.value === value) {
                return this;
            } else if (this.left && value < this.value) {
                return this.left.getNodeByValue(value);
            } else if (this.right && value > this.value) {
                return this.right.getNodeByValue(value);
            } else {
                return null;
            }
        }
    }

    depthFirstTraversal() {
        if (this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(this.value);
        if (this.right) {
            this.right.depthFirstTraversal();
        }
    }
}

const bt = new BinaryTree(50);

for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * 100);
    bt.insert(random);
}

bt.depthFirstTraversal();

module.exports = BinaryTree;