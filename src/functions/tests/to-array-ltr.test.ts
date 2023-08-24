import { mockedArrayOrdered, mockedTree } from 'src/functions/tests/_mocks';
import { toArrayLTR } from 'src/functions/to-array-ltr';

describe('toArrayLTR', () => {
    it('should convert binary search tree to an array, ordered from left to right', () => {
        expect(toArrayLTR(mockedTree)).toEqual(mockedArrayOrdered);
    });
});
