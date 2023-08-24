import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedTree,
} from 'src/functions/__tests__/_mocks';
import { hasRightBranch } from 'src/functions/has-right-branch';

describe('isRightBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasRightBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a right branch', () => {
        expect(hasRightBranch(mockedStrictRightLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a left branch', () => {
        expect(hasRightBranch(mockedStrictLeftLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasRightBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(hasRightBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasRightBranch({ data: undefined })).toBe(false);
    });
});
