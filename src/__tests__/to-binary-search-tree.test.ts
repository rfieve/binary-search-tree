import { toBST } from '../functions/to-binary-search-tree';
import {
    compare,
    mockedArray,
    mockedBalancedTree,
    mockedUnbalancedTree,
} from './_mocks';

describe('toBST', () => {
    it('should return a correct balanced binary search tree', () => {
        expect(toBST(mockedArray, compare)).toEqual(mockedBalancedTree);
    });

    it('should return a correct unbalanced binary search tree', () => {
        expect(toBST(mockedArray, compare, { isBalanced: false })).toEqual(mockedUnbalancedTree);
    });
});
