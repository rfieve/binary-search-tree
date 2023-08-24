import { mockedTree } from 'src/functions/__tests__/_mocks';
import { findMin } from 'src/functions/find-min';

describe('findMin', () => {
    it('should return the minimal value of the tree', () => {
        expect(findMin(mockedTree).data).toBe(2);
    });
});
