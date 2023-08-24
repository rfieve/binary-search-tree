import {
    compare,
    mockedArray,
    mockedBalancedTree,
    mockedTree,
} from 'src/functions/__tests__/_mocks';
import {
    toBalancedBinarySearchTree,
    toBinarySearchTree,
} from 'src/functions/to-binary-search-tree';

describe('toBinarySearchTree', () => {
    it('should return a correct binary search tree', () => {
        expect(toBinarySearchTree(mockedArray, compare)).toEqual(mockedTree);
    });
});

describe('toBalancedBinarySearchTree', () => {
    it('should return a correct balanced binary search tree', () => {
        expect(toBalancedBinarySearchTree(mockedArray, compare)).toEqual(mockedBalancedTree);
    });
});
