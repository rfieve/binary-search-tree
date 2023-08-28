import { isLeaf } from '../functions/is-leaf';
import { mockedLeaf, mockedUnbalancedTree } from './_mocks';

describe('isLeaf', () => {
    it('should return true when the given tree is a leaf', () => {
        expect(isLeaf(mockedLeaf)).toBe(true);
    });

    it('should return false when the given tree is a branch', () => {
        expect(isLeaf(mockedUnbalancedTree)).toBe(false);
    });

    it('should return false when the given tree is undefined', () => {
        expect(isLeaf()).toBe(false);
    });

    it('should return false when the given tree has no data', () => {
        expect(isLeaf({ data: undefined })).toBe(false);
    });

    it('should return false when the given tree has no left branch', () => {
        expect(isLeaf({ data: 0, right: { data: 1 } })).toBe(false);
    });

    it('should return false when the given tree has no right branch', () => {
        expect(isLeaf({ data: 0, left: { data: 1 } })).toBe(false);
    });
});
