import { findMin } from '../functions/find-min';
import { mockedUnbalancedTree } from './_mocks';

describe('findMin', () => {
    it('should return the minimal value of the tree', () => {
        expect(findMin(mockedUnbalancedTree).data[0]).toBe(2);
    });
});
