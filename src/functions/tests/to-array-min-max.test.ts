import { mockedArrayOrdered, mockedTree } from 'src/functions/tests/_mocks';
import { toArrayMinMax } from 'src/functions/to-array-min-max';

describe('toArrayMinMax', () => {
    it('should convert binary tree to an array, ordered from min to max', () => {
        expect(toArrayMinMax(mockedTree)).toEqual(mockedArrayOrdered);
    });
});
