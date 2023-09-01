import { hasLeft } from '../functions/has-left';
import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedUnbalancedTree,
} from './_mocks';

describe('hasLeft', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasLeft(mockedUnbalancedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a left branch', () => {
        expect(hasLeft(mockedStrictLeftLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a right branch', () => {
        expect(hasLeft(mockedStrictRightLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasLeft(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasLeft({ data: [] })).toBe(false);
    });
});
