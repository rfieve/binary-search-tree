import { compare, mockedArray, mockedBalancedTree, mockedTree } from 'src/__tests__/_mocks';
import { toBST } from 'src/functions/to-binary-search-tree';

describe('toBST', () => {
    it('should return a correct balanced binary search tree', () => {
        expect(toBST(mockedArray, compare)).toEqual(mockedBalancedTree);
    });

    it('should return a correct unbalanced binary search tree', () => {
        expect(toBST(mockedArray, compare, { isBalanced: false })).toEqual(mockedTree);
    });
});
