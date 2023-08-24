import { hasLeftBranch } from 'src/functions/has-left-branch';
import {
    mockedLeaf,
    mockedStrictLeftLeaf,
    mockedStrictRightLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isLeftBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasLeftBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a left branch', () => {
        expect(hasLeftBranch(mockedStrictLeftLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a right branch', () => {
        expect(hasLeftBranch(mockedStrictRightLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasLeftBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(hasLeftBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasLeftBranch({ data: undefined })).toBe(false);
    });
});
