import { compare, mockedArray, mockedTree } from 'src/functions/__tests__/_mocks';
import { toBinarySearchTree } from 'src/functions/to-binary-search-tree';

describe('toBinarySearchTree', () => {
    it('should return a correct binary search tree', () => {
        expect(toBinarySearchTree(mockedArray, compare)).toEqual(mockedTree);
    });
});
