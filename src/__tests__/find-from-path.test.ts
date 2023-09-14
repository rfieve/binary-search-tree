import { findFromPath } from '../functions/find-from-path';
import { Direction } from '../types';
import { mockedUnbalancedTree } from './_mocks';

describe('findFromPath', () => {
    it('should return the correct node at path', () => {
        const result = findFromPath(mockedUnbalancedTree, [Direction.Left, Direction.Right]);
        expect(result?.node?.data?.[0]).toBe(5);
    });

    it('should return the root when no path', () => {
        const result = findFromPath(mockedUnbalancedTree, []);
        expect(result?.node?.data?.[0]).toBe(10);
    });

    it('should work with offset', () => {
        const result = findFromPath(mockedUnbalancedTree, [Direction.Left, Direction.Right], 1);
        expect(result?.node?.data?.[0]).toBe(32);
    });

    it('should return undefined when no node at path', () => {
        const result = findFromPath(mockedUnbalancedTree, [
            Direction.Left,
            Direction.Right,
            Direction.Right,
        ]);
        expect(result?.node?.data?.[0]).toBe(undefined);
    });
});
