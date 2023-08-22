import { findMin } from 'src/functions/find-min';
import { mockedTree } from 'src/functions/tests/_mocks';

describe('findMin', () => {
    it('should return the minimal value of the tree', () => {
        expect(findMin(mockedTree).data).toBe(2);
    });
});
