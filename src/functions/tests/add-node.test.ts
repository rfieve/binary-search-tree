import { addNode, makeAddNode } from 'src/functions/add-node';
import { compareFunction, mockedTree } from 'src/functions/tests/_mocks';

describe('addNode', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 12);
        expect(modifiedTree.right?.left?.data).toBe(12);
    });

    it('should add a min node to the tree at the correct left-side position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 0);
        expect(modifiedTree.left?.left?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct right-side position', () => {
        const modifiedTree = addNode(mockedTree, compareFunction, 70);
        expect(modifiedTree.right?.right?.data).toBe(70);
    });
});

describe('makeAddNode', () => {
    const boundAddNode = makeAddNode(mockedTree, compareFunction);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddNode(10);
        expect(modifiedTree).toEqual(modifiedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddNode(12);
        expect(modifiedTree.right?.left?.data).toBe(12);
    });

    it('should add a min node to the tree at the correct left-side position', () => {
        const modifiedTree = boundAddNode(0);
        expect(modifiedTree.left?.left?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct right-side position', () => {
        const modifiedTree = boundAddNode(70);
        expect(modifiedTree.right?.right?.data).toBe(70);
    });
});
