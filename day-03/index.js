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

class PersonTreeNode extends BinaryTreeNode {
  person;

  constructor(person) {
    super(person.name);
    this.person = person;
  }

  findPerson(name) {
    if (this.value === name) return this.person;
    if (this.left && name < this.value) return this.left.findPerson(name);
    if (this.right && name > this.value) return this.right.findPerson(name);

    return undefined;
  }
}

module.exports = {
  BinaryTreeNode,
  PersonTreeNode
};
