import { compare, mockedTree } from 'src/functions/__tests__/_mocks';
import {
    addElement,
    addElements,
    makeAddElement,
    makeAddElements,
} from 'src/functions/add-element';

describe('addElement', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addElement(mockedTree, compare, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addElement(mockedTree, compare, 11);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const modifiedTree = addElement(mockedTree, compare, 0);
        expect(modifiedTree.left?.left?.data).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const modifiedTree = addElement(mockedTree, compare, 100);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);
    });
});

describe('makeAddElement', () => {
    const boundAddElement = makeAddElement(compare);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddElement(mockedTree, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddElement(mockedTree, 11);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const modifiedTree = boundAddElement(mockedTree, 0);
        expect(modifiedTree.left?.left?.data).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const modifiedTree = boundAddElement(mockedTree, 100);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);
    });
});

describe('addElements', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addElements(mockedTree, compare, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addElements(mockedTree, compare, [11, 100]);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);
    });
});

describe('makeAddElements', () => {
    const boundAddElements = makeAddElements(compare);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddElements(mockedTree, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddElements(mockedTree, [11, 100]);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);
    });
});
