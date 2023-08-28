import { findMinHeight } from '../functions/find-min-height';
import { mockedUnbalancedTree } from './_mocks';

describe('findMinHeight', () => {
    it('should return a correct height from a binary search tree', () => {
        expect(findMinHeight(mockedUnbalancedTree)).toBe(1);
    });
});
