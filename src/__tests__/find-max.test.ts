import { findMax } from '../functions/find-max';
import { mockedUnbalancedTree } from './_mocks';

describe('findMax', () => {
    it('should return the maximal value of the tree', () => {
        expect(findMax(mockedUnbalancedTree).data).toBe(89);
    });
});
