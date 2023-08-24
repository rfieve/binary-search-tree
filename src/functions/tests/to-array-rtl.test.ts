import { mockedArrayReversed, mockedTree } from 'src/functions/tests/_mocks';
import { toArrayRTL } from 'src/functions/to-array-rtl';

describe('toArrayRTL', () => {
    it('should convert binary search tree to an array, ordered from right to left', () => {
        expect(toArrayRTL(mockedTree)).toEqual(mockedArrayReversed);
    });
});
