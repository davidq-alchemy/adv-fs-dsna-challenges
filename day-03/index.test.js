const { BinaryTreeNode } = require('./index');

describe('node based data structures', () => {
  it('binary tree add', () => {
    const A = new BinaryTreeNode('A');
    const B = new BinaryTreeNode('B');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    // B will be the root of the tree:
    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.left).toBe(A);
    expect(B.right).toBe(D);
    expect(D.left).toBe(C);
  });
});
