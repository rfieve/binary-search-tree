import { compare, mockedTree } from 'src/functions/__tests__/_mocks';
import { findNode, makeFindNode } from 'src/functions/find-node';

describe('findNode', () => {
    it('should not find a node which is not into the tree', () => {
        const node = findNode(mockedTree, compare, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const node = findNode({}, compare, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = findNode(mockedTree, compare, 89);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = findNode(mockedTree, compare, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = findNode(mockedTree, compare, 50);
        expect(node?.data).toBe(50);
    });
});

describe('makeFindNode', () => {
    const boundFindNode = makeFindNode(compare);

    it('should not find a node which is not into the tree', () => {
        const node = boundFindNode(mockedTree, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const node = boundFindNode({}, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const node = boundFindNode(mockedTree, 89);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = boundFindNode(mockedTree, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = boundFindNode(mockedTree, 50);
        expect(node?.data).toBe(50);
    });
});