import { mockedArrayOrdered, mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { toArrayInOrder } from 'src/functions/to-array-in-order';

describe('toArrayInOrder', () => {
    it('should convert binary search tree to an array, ordered from left to right', () => {
        expect(toArrayInOrder(mockedUnbalancedTree)).toEqual(mockedArrayOrdered);
    });
});
