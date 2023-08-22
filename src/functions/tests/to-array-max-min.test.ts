import { mockedArrayReversed, mockedTree } from 'src/functions/tests/_mocks';
import { toArrayMaxMin } from 'src/functions/to-array-max-min';

describe('toArrayMaxMin', () => {
    it('should convert binary tree to an array, ordered from max to min', () => {
        expect(toArrayMaxMin(mockedTree)).toEqual(mockedArrayReversed);
    });
});
