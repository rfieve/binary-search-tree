import { mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { findMinHeight } from 'src/functions/find-min-height';

describe('findMinHeight', () => {
    it('should return a correct height from a binary search tree', () => {
        expect(findMinHeight(mockedUnbalancedTree)).toBe(1);
    });
});
