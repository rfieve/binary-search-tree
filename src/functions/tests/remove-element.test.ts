import {
    makeRemoveElement,
    makeRemoveElements,
    removeElement,
    removeElements,
} from 'src/functions/remove-element';
import { compare, mockedArray, mockedTree } from 'src/functions/tests/_mocks';

describe('removeElement', () => {
    it('should not remove a node which is not there', () => {
        const modifiedTree = removeElement(mockedTree, compare, 86);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should not remove an empty node', () => {
        const modifiedTree = removeElement({ data: undefined }, compare, 86);
        expect(modifiedTree).toEqual({});
    });

    it('should work with undefined', () => {
        const modifiedTree = removeElement(undefined, compare, 86);
        expect(modifiedTree).toEqual({});
    });

    it('should remove a leaf correctly', () => {
        const modifiedTree = removeElement(mockedTree, compare, 50);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(undefined);
    });

    it('should remove a single branch with left node correctly', () => {
        const modifiedTree = removeElement(mockedTree, compare, 89);
        expect(modifiedTree?.right?.right?.data).toBe(50);
    });

    it('should remove a single branch with right node correctly', () => {
        const modifiedTree = removeElement(mockedTree, compare, 2);
        expect(modifiedTree?.left?.data).toBe(5);
    });

    it('should remove a branch with both left and right nodes correctly', () => {
        const modifiedTree = removeElement(mockedTree, compare, 10);
        const reModifiedTree = removeElement(modifiedTree, compare, 13);

        //       10        |       13         |
        //    /     \      |    /     \       |       32
        //   2      32     |   2      32      |    /     \
        //    \    /  \    |    \       \     |   2      89
        //     5  13  89   |     5      89    |    \     /
        //            /    |            /     |     5  50
        //          50     |          50      |

        expect(modifiedTree?.data).toBe(13);
        expect(modifiedTree?.left?.data).toBe(2);
        expect(modifiedTree?.left?.right?.data).toBe(5);
        expect(modifiedTree?.right?.data).toBe(32);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(50);

        expect(reModifiedTree?.data).toBe(32);
        expect(reModifiedTree?.left?.data).toBe(2);
        expect(reModifiedTree?.left?.right?.data).toBe(5);
        expect(reModifiedTree?.right?.data).toBe(89);
        expect(reModifiedTree?.right?.left?.data).toBe(50);
    });
});

describe('makeRemoveElement', () => {
    const boundRemoveElement = makeRemoveElement(compare);

    it('should not remove a node which is not there', () => {
        const modifiedTree = boundRemoveElement(mockedTree, 86);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should work with undefined', () => {
        const modifiedTree = boundRemoveElement(undefined, 86);
        expect(modifiedTree).toEqual({});
    });

    it('should remove a leaf correctly', () => {
        const modifiedTree = boundRemoveElement(mockedTree, 50);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(undefined);
    });

    it('should remove a single branch with left node correctly', () => {
        const modifiedTree = boundRemoveElement(mockedTree, 89);
        expect(modifiedTree?.right?.right?.data).toBe(50);
    });

    it('should remove a single branch with right node correctly', () => {
        const modifiedTree = boundRemoveElement(mockedTree, 2);
        expect(modifiedTree?.left?.data).toBe(5);
    });

    it('should remove a branch with both left and right nodes correctly', () => {
        const modifiedTree = boundRemoveElement(mockedTree, 10);
        expect(modifiedTree?.data).toBe(13);
        expect(modifiedTree?.left?.data).toBe(2);
        expect(modifiedTree?.left?.right?.data).toBe(5);
        expect(modifiedTree?.right?.data).toBe(32);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(50);
    });
});

describe('removeElements', () => {
    it('should not remove a node which is not there', () => {
        const modifiedTree = removeElements(mockedTree, compare, [86]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should work with undefined', () => {
        const modifiedTree = removeElements(undefined, compare, [86]);
        expect(modifiedTree).toEqual({});
    });

    it('should empty the tree correctly', () => {
        const modifiedTree = removeElements(mockedTree, compare, mockedArray);
        expect(modifiedTree).toEqual({});
    });
});

describe('makeRemoveElements', () => {
    const boundRemoveElements = makeRemoveElements(compare);

    it('should not remove a node which is not there', () => {
        const modifiedTree = boundRemoveElements(mockedTree, [86]);
        expect(modifiedTree).toEqual(mockedTree);
    });

    it('should work with undefined', () => {
        const modifiedTree = boundRemoveElements(undefined, [86]);
        expect(modifiedTree).toEqual({});
    });

    it('should empty the tree correctly', () => {
        const modifiedTree = boundRemoveElements(mockedTree, mockedArray);
        expect(modifiedTree).toEqual({});
    });
});
