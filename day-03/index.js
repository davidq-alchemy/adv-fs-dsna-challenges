class BinaryTreeNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      this.left ? this.left.add(node) : this.left = node;
    } else {
      this.right ? this.right.add(node) : this.right = node;
    }
  }
}

module.exports = {
  BinaryTreeNode
};
