import { compare, mockedArray, mockedBalancedTree, mockedTree } from 'src/__tests__/_mocks';
import { toBalancedBST, toBST } from 'src/functions/to-binary-search-tree';

describe('toBST', () => {
    it('should return a correct binary search tree', () => {
        expect(toBST(mockedArray, compare)).toEqual(mockedTree);
    });
});

describe('toBalancedBST', () => {
    it('should return a correct balanced binary search tree', () => {
        expect(toBalancedBST(mockedArray, compare)).toEqual(mockedBalancedTree);
    });
});
