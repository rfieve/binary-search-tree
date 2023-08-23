import { hasMinBranch } from 'src/functions/has-min-branch';
import {
    mockedLeaf,
    mockedStrictMaxLeaf,
    mockedStrictMinLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isMinBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasMinBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a min branch', () => {
        expect(hasMinBranch(mockedStrictMinLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a max branch', () => {
        expect(hasMinBranch(mockedStrictMaxLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasMinBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(hasMinBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasMinBranch({ data: undefined })).toBe(false);
    });
});
