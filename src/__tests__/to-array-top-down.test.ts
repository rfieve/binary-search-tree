import { mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { toArrayTopDown } from 'src/functions/to-array-top-down';

describe('toArrayTopDown', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayTopDown(mockedUnbalancedTree)).toEqual([10, 2, 32, 5, 13, 89, 50]);
    });
});
