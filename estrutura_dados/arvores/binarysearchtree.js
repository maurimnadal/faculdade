const Node = require('./node');

class BinarySearchTree {
    constructor() {
        this._root = null
    }

    insert(key) {
        if (this._root == null) {
            this._root = new Node(key);
        } else {
            this.insertNode(this._root, key);
        }
    }

    insertNode(node, key) {
        if (node._key > key) {
            if (node._left == null) {
                node._left = new Node(key);
            } else {
                this.insertNode(node._left, key);
            }
        } else {
            if (node._right == null) {
                node._right = new Node(key);
            } else {
                this.insertNode(node._right, key);
            }
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this._root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node._left, callback);
            callback(node._key);
            this.inOrderTraverseNode(node._right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this._root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node._key);
            this.preOrderTraverseNode(node._left, callback);
            this.preOrderTraverseNode(node._right, callback);
        }
    }


    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this._root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node._left, callback);
            this.postOrderTraverseNode(node._right, callback);
            callback(node._key);
        }
    }


    min() {
        return this.minNode(this._root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current._left != null) {
            current = current._left;
        }
        return current._key;
    }


    max() {
        return this.maxNode(this._root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current._right != null) {
            current = current._right;
        }
        return current._key;
    }

    search(key) {
        return this.searchNode(this._root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (node._key > key) {
            return this.searchNode(node._left, key);
        } else if (node._key < key) {
            return this.searchNode(node._right, key);
        } else {
            return true;
        }
    }

    remove(key) {
        return this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (node.key > key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            // cenario 1             
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // cenario 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            // cenario 3
            const aux = this.minNode(node.right);
            node.key = aux;
            node.right = this.removeNode(node.right, aux);
            return node;
        }

    }
}

const printNode = (value) => console.log(value); //função callback


let tree = new BinarySearchTree

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.postOrderTraverse(printNode)

console.log(tree.search(10))
console.log(tree.search(100))
