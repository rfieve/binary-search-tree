import { mockedArrayOrdered, mockedTree } from 'src/functions/tests/_mocks';
import { toArrayInOrder } from 'src/functions/to-array-in-order';

describe('toArrayInOrder', () => {
    it('should convert binary search tree to an array, ordered from left to right', () => {
        expect(toArrayInOrder(mockedTree)).toEqual(mockedArrayOrdered);
    });
});
