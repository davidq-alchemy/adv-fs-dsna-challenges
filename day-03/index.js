/* eslint-disable no-console */
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

class LinkedListNode {
  value;
  next;

  constructor(value) {
    this.value = value;
  }

  add(node) {
    this.next ? this.next.add(node) : this.next = node;
  }

  getList() {
    if (!this.next) return this.value.toString();
    return this.value.toString() + ' ' + this.next.getList();
  }

  /**
   * Removes the node at the given index and returns it.
   *
   * Note that you shouldn't remove the node at index zero if you aren't holding a reference to elsewhere in the list.
   *
   * @param {number} index - the index of the node to remove
   * @returns {LinkedListNode} the removed node, or undefined if index is invalid
   */
  remove(index, parent = undefined) {
    if (index <= 0) {
      if (parent) parent.next = this.next;
      this.next = undefined;
      return this;
    }

    if (this.next) return this.next.remove(index - 1, this);

    return undefined;
  }
}

function traverse(node, indent = 0) {
  console.log('  '.repeat(indent) + node.value);
  for (const child of node.children) {
    traverse(child, indent + 1);
  }
}

module.exports = {
  BinaryTreeNode,
  PersonTreeNode,
  LinkedListNode,
  traverse
};
