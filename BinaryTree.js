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

    preorderTraversal() {
        console.log(this.value);
        if (this.left) {
            this.left.preorderTraversal();
        }
        if (this.right) {
            this.right.preorderTraversal();
        }
    }

    postorderTraversal() {
        if (this.left) {
            this.left.postorderTraversal();
        }
        if (this.right) {
            this.right.postorderTraversal();
        }
        console.log(this.value);
    }

    isIdentical(tree2, tree1 = this) {
        if (tree1 === null && tree2 === null) {
            return true;
        }

        return tree1.value === tree2.value && tree1.isIdentical(tree1.left, tree2.left) && tree1.isIdentical(tree1.right, tree2.right)
    }

    printBottomView() {
        if (this.left) {
            this.left.printBottomView();
        }
        if (this.right) {
            this.right.printBottomView();
        }
        if (!this.left && !this.right) {
            console.log(this.value);
        }
    }
}

const bt = new BinaryTree(50);
bt.insert(25);
bt.insert(75);
bt.insert(10);
bt.insert(60);
bt.insert(35);
bt.insert(90);
bt.insert(30);
bt.insert(85);


bt.printBottomView();

module.exports = BinaryTree;