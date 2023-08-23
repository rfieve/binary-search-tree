import { findNode, makeFindNode } from 'src/functions/find-node';
import { compareFunction, mockedTree } from 'src/functions/tests/_mocks';

describe('findNode', () => {
    it('should not find a node which is not into the tree', () => {
        const node = findNode(mockedTree, compareFunction, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = findNode(mockedTree, compareFunction, 89);
        expect(node?.data).toBe(89);
    });

    it('should find a min node into the tree at the correct min-side position', () => {
        const node = findNode(mockedTree, compareFunction, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a max node into the tree at the correct max-side position', () => {
        const node = findNode(mockedTree, compareFunction, 50);
        expect(node?.data).toBe(50);
    });
});

describe('makeFindNode', () => {
    const boundFindNode = makeFindNode(mockedTree, compareFunction);

    it('should not find a node which is not into the tree', () => {
        const node = boundFindNode(11);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = boundFindNode(89);
        expect(node?.data).toBe(89);
    });

    it('should find a min node into the tree at the correct min-side position', () => {
        const node = boundFindNode(2);
        expect(node?.data).toBe(2);
    });

    it('should find a max node into the tree at the correct max-side position', () => {
        const node = boundFindNode(50);
        expect(node?.data).toBe(50);
    });
});
