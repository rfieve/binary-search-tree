import { isBranch } from 'src/functions/is-branch';
import {
    mockedLeaf,
    mockedStrictMaxLeaf,
    mockedStrictMinLeaf,
    mockedTree,
} from 'src/functions/tests/_mocks';

describe('isBranch', () => {
    it('should return true when the given tree is a branch', () => {
        expect(isBranch(mockedTree)).toBe(true);
    });

    it('should return true when the given tree is srictly a min branch', () => {
        expect(isBranch(mockedStrictMinLeaf)).toBe(true);
    });

    it('should return true when the given tree is srictly a max branch', () => {
        expect(isBranch(mockedStrictMaxLeaf)).toBe(true);
    });

    it('should return false when the given tree is a leaf', () => {
        expect(isBranch(mockedLeaf)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(isBranch()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isBranch({ data: undefined })).toBe(false);
    });
});
