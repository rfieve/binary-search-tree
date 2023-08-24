import { mockedArrayReversed, mockedTree } from 'src/functions/__tests__/_mocks';
import { toArrayinOrderReverse } from 'src/functions/to-array-in-order-reverse';

describe('toArrayinOrderReverse', () => {
    it('should convert binary search tree to an array, ordered from right to left', () => {
        expect(toArrayinOrderReverse(mockedTree)).toEqual(mockedArrayReversed);
    });
});
