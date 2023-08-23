import { hasMaxBranch } from 'src/functions/has-max-branch';
import {
    mockedLeaf,
    mockedStrictMaxLeaf,
    mockedStrictMinLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isMaxBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(hasMaxBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a max branch', () => {
        expect(hasMaxBranch(mockedStrictMaxLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a min branch', () => {
        expect(hasMaxBranch(mockedStrictMinLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(hasMaxBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(hasMaxBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(hasMaxBranch({ data: undefined })).toBe(false);
    });
});
