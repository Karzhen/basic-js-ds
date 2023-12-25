const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (node === null) {
      return new Node(data);
    } else if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }
    return node;
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        node.data = this.minValue(node.right);
        node.right = this.removeNode(node.right, node.data);
        return node;
      }
    }
  }

  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  maxValue(node) {
    let current = node;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    } else {
      return this.minValue(this.rootNode);
    }
  }

  max() {
    if (this.rootNode === null) {
      return null;
    } else {
      return this.maxValue(this.rootNode);
    }
  }
}

module.exports = {
  BinarySearchTree
};