const Node = require('./node');

class BinarySearchTree{
    constructor(){
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

// tree.inOrderTraverse(printNode)
console.log(tree.max())
console.log(tree.min())