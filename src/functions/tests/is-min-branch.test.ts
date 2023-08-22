import { isMinBranch } from 'src/functions/is-min-branch';
import {
    mockedLeaf,
    mockedStrictMaxLeaf,
    mockedStrictMinLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isMinBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(isMinBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a min branch', () => {
        expect(isMinBranch(mockedStrictMinLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a max branch', () => {
        expect(isMinBranch(mockedStrictMaxLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(isMinBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(isMinBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isMinBranch({ data: undefined })).toBe(false);
    });
});
