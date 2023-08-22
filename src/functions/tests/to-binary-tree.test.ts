import { compareFunction, mockedArray, mockedTree } from 'src/functions/tests/_mocks';
import { toBinaryTree } from 'src/functions/to-binary-tree';

describe('toBinaryTree', () => {
    it('should return a correct binary tree', () => {
        expect(toBinaryTree(mockedArray, compareFunction)).toEqual(mockedTree);
    });
});
