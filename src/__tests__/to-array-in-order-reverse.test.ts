import { mockedArrayReversed, mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { toArrayInOrderReverse } from 'src/functions/to-array-in-order-reverse';

describe('toArrayInOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayReversed);
    });
});
