import { isBranch } from '../functions/is-branch';
import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedUnbalancedTree,
} from './_mocks';

describe('isBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(isBranch(mockedUnbalancedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a left branch', () => {
        expect(isBranch(mockedStrictLeftLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a right branch', () => {
        expect(isBranch(mockedStrictRightLeaf)).toBe(true);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(isBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isBranch({ data: [] })).toBe(false);
    });
});
