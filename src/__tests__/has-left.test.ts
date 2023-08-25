import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedUnbalancedTree,
} from 'src/__tests__/_mocks';
import { hasLeft } from 'src/functions/has-left';

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

    it('should return false when the given tree is undefined', () => {
        expect(hasLeft()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasLeft({ data: undefined })).toBe(false);
    });
});
