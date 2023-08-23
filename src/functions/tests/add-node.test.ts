import { addNode, addNodes, makeAddNode, makeAddNodes } from 'src/functions/add-node';
import { compareFunction, mockedTree } from 'src/functions/tests/_mocks';

describe('addNode', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 11);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
    });

    it('should add a min node to the tree at the correct min-side position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 0);
        expect(modifiedTree.min?.min?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct max-side position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 100);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('makeAddNode', () => {
    const boundAddNode = makeAddNode(compareFunction);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddNode(mockedTree, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddNode(mockedTree, 11);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
    });

    it('should add a min node to the tree at the correct min-side position', () => {
        const modifiedTree = boundAddNode(mockedTree, 0);
        expect(modifiedTree.min?.min?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct max-side position', () => {
        const modifiedTree = boundAddNode(mockedTree, 100);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('addNodes', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addNodes(mockedTree, compareFunction, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addNodes(mockedTree, compareFunction, [11, 100]);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('makeAddNodes', () => {
    const boundAddNodes = makeAddNodes(compareFunction);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddNodes(mockedTree, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddNodes(mockedTree, [11, 100]);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});
