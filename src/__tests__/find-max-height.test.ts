import { findMaxHeight } from '../functions/find-max-height';
import { mockedUnbalancedTree } from './_mocks';

describe('findMaxHeight', () => {
    it('should return a correct height from a binary search tree', () => {
        expect(findMaxHeight(mockedUnbalancedTree)).toBe(3);
    });
});
