import { isLeaf } from 'src/functions/is-leaf';
import { mockedLeaf, mockedTree } from 'src/functions/tests/_mocks';

describe('isLeaf', () => {
    it('should return true when the given tree is a leaf', () => {
        expect(isLeaf(mockedLeaf)).toBe(true);
    });

    it('should return false when the given tree is a branch', () => {
        expect(isLeaf(mockedTree)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(isLeaf()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isLeaf({ data: undefined })).toBe(false);
    });

    it('should return false when the given tree has no min', () => {
        expect(isLeaf({ data: 0, max: { data: 1 } })).toBe(false);
    });

    it('should return false when the given tree has no max', () => {
        expect(isLeaf({ data: 0, min: { data: 1 } })).toBe(false);
    });
});
