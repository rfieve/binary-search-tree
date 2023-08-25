import { mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { findMaxHeight } from 'src/functions/find-max-height';

describe('findMaxHeight', () => {
    it('should return a correct height from a binary search tree', () => {
        expect(findMaxHeight(mockedUnbalancedTree)).toBe(3);
    });
});
