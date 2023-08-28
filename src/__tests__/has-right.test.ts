import { hasRight } from '../functions/has-right';
import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedUnbalancedTree,
} from './_mocks';

describe('hasRight', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasRight(mockedUnbalancedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a right branch', () => {
        expect(hasRight(mockedStrictRightLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a left branch', () => {
        expect(hasRight(mockedStrictLeftLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasRight(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(hasRight()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasRight({ data: undefined })).toBe(false);
    });
});
