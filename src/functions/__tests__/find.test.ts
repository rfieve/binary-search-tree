import { compare, mockedTree } from 'src/functions/__tests__/_mocks';
import { find, makeFind } from 'src/functions/find';

describe('find', () => {
    it('should not find a node which is not into the tree', () => {
        const node = find(mockedTree, compare, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const node = find({}, compare, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = find(mockedTree, compare, 89);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = find(mockedTree, compare, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = find(mockedTree, compare, 50);
        expect(node?.data).toBe(50);
    });
});

describe('makeFind', () => {
    const boundFind = makeFind(compare);

    it('should not find a node which is not into the tree', () => {
        const node = boundFind(mockedTree, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const node = boundFind({}, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = boundFind(mockedTree, 89);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = boundFind(mockedTree, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = boundFind(mockedTree, 50);
        expect(node?.data).toBe(50);
    });
});
