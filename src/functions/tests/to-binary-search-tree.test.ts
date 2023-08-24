import { compareFunction, mockedArray, mockedTree } from 'src/functions/tests/_mocks';
import { toBinarySearchTree } from 'src/functions/to-binary-search-tree';

describe('toBinarySearchTree', () => {
    it('should return a correct binary search tree', () => {
        expect(toBinarySearchTree(mockedArray, compareFunction)).toEqual(mockedTree);
    });
});
