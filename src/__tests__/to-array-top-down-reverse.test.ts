import { mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { toArrayTopDownReverse } from 'src/functions/to-array-top-down-reverse';

describe('toArrayTopDownReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayTopDownReverse(mockedUnbalancedTree)).toEqual([10, 32, 2, 89, 13, 5, 50]);
    });
});
