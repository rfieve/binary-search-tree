import { isMaxBranch } from 'src/functions/is-max-branch';
import {
    mockedLeaf,
    mockedStrictMaxLeaf,
    mockedStrictMinLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isMaxBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(isMaxBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a max branch', () => {
        expect(isMaxBranch(mockedStrictMaxLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a min branch', () => {
        expect(isMaxBranch(mockedStrictMinLeaf)).toBe(false);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(isMaxBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(isMaxBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isMaxBranch({ data: undefined })).toBe(false);
    });
});
