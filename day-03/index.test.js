const {
  BinaryTreeNode,
  PersonTreeNode
} = require('./index');

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

  it('person tree search', () => {
    const jones = new PersonTreeNode({
      name: 'Jones',
      phone: '555-4890',
      address: '123 75th St'
    });
    const brook = new PersonTreeNode({
      name: 'Brook',
      phone: '555-1847',
      address: '123 Oak Ln'
    });
    const smith = new PersonTreeNode({
      name: 'Smith',
      phone: '555-9354',
      address: '123 Lincoln Ln'
    });
    const nelson = new PersonTreeNode({
      name: 'Nelson',
      phone: '555-1212',
      address: '123 Main St'
    });

    jones.add(brook);
    jones.add(smith);
    jones.add(nelson);

    const root = jones;

    expect(root.findPerson('Nelson')).toBe(nelson.person);
    expect(root.findPerson('Foo')).toBe(undefined);
  });
});
