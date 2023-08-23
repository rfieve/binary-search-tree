import {
    addElement,
    addElements,
    makeAddElement,
    makeAddElements,
} from 'src/functions/add-elements';
import { compareFunction, mockedTree } from 'src/functions/tests/_mocks';

describe('addElement', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addElement(mockedTree, compareFunction, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addElement(mockedTree, compareFunction, 11);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
    });

    it('should add a min node to the tree at the correct min-side position', () => {
        const modifiedTree = addElement(mockedTree, compareFunction, 0);
        expect(modifiedTree.min?.min?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct max-side position', () => {
        const modifiedTree = addElement(mockedTree, compareFunction, 100);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('makeAddElement', () => {
    const boundAddElement = makeAddElement(compareFunction);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddElement(mockedTree, 10);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddElement(mockedTree, 11);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
    });

    it('should add a min node to the tree at the correct min-side position', () => {
        const modifiedTree = boundAddElement(mockedTree, 0);
        expect(modifiedTree.min?.min?.data).toBe(0);
    });

    it('should add a max node to the tree at the correct max-side position', () => {
        const modifiedTree = boundAddElement(mockedTree, 100);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('addElements', () => {
    it('should not add a node which is already there', () => {
        const modifiedTree = addElements(mockedTree, compareFunction, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = addElements(mockedTree, compareFunction, [11, 100]);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});

describe('makeAddElements', () => {
    const boundAddElements = makeAddElements(compareFunction);

    it('should not add a node which is already there', () => {
        const modifiedTree = boundAddElements(mockedTree, [10]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = boundAddElements(mockedTree, [11, 100]);
        expect(modifiedTree.max?.min?.min?.data).toBe(11);
        expect(modifiedTree.max?.max?.max?.data).toBe(100);
    });
});
