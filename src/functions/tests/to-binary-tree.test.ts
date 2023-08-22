import { toBinaryTree } from 'src/functions/to-binary-tree';
import { BinaryTree } from 'src/types';

type TestNode = { name: string };

function compareFunction(currentNode: TestNode, parentNode: TestNode) {
    return currentNode.name.localeCompare(parentNode.name);
}

const input: TestNode[] = [{ name: 'John' }, { name: 'Zoo' }, { name: 'Bar' }, { name: 'Foo' }];

const output: BinaryTree<TestNode> = {
    data  : { name: 'John' },
    right : { data: { name: 'Zoo' } },
    left  : { data: { name: 'Bar' }, right: { data: { name: 'Foo' } } },
};

describe('toBinaryTree', () => {
    it('should return a correct binary tree', () => {
        expect(toBinaryTree(input, compareFunction)).toEqual(output);
    });
});
