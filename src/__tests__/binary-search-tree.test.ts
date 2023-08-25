import {
    compare,
    mockedArray,
    mockedArrayOrdered,
    mockedArrayReversed,
    mockedBalancedTree,
    mockedTree,
} from 'src/__tests__/_mocks';
import { BinarySearchTree } from 'src/classes/binary-search-tree';
import { makeCollectElementFromNode } from 'src/helpers/collect';

describe('BinarySearchTree', () => {
    it('should initialize correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare);
        expect(tree).toEqual(mockedTree);
    });

    it('should initialize correctly as balanced', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, { isBalanced: true });
        expect(tree).toEqual(mockedBalancedTree);
    });

    it('should balance correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).balance();
        expect(tree).toEqual(mockedBalancedTree);
    });

    it('should add a node correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare).add(11);
        expect(tree.right?.left?.left?.data).toBe(11);
    });

    it('should fill the tree correctly', () => {
        const { tree } = new BinarySearchTree([], compare).add(mockedArray);
        expect(tree).toEqual(mockedTree);
    });

    it('should remove a node correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare).remove(50);
        expect(tree?.right?.right?.data).toBe(89);
        expect(tree?.right?.right?.left?.data).toBe(undefined);
    });

    it('should empty the tree correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare).remove(mockedArray);
        expect(tree).toEqual({});
    });

    it('should be converted in order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare).toArrayInOrder();
        expect(arr).toEqual(mockedArrayOrdered);
    });

    it('should be converted in order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare).toArrayInOrderReverse();
        expect(arr).toEqual(mockedArrayReversed);
    });

    it('should be traversed in order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare).traverseInOrder(collect);
        expect(arr).toEqual(mockedArrayOrdered);
    });

    it('should be traversed in order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare).traverseInOrderReverse(collect);
        expect(arr).toEqual(mockedArrayReversed);
    });

    it('should find correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).find(10);
        expect(node?.data).toEqual(10);
    });

    it('should findMin correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).findMin();
        expect(node?.data).toEqual(2);
    });

    it('should findMax correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).findMax();
        expect(node?.data).toEqual(89);
    });

    it('should hasLeft correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare);
        expect(result.hasLeft(10)).toEqual(true);
        expect(result.hasLeft(2)).toEqual(false);
    });

    it('should hasRight correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare);
        expect(result.hasRight(10)).toEqual(true);
        expect(result.hasRight(89)).toEqual(false);
    });

    it('should isBranch correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare);
        expect(result.isBranch(10)).toEqual(true);
        expect(result.isBranch(5)).toEqual(false);
    });

    it('should isLeaf correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare);
        expect(result.isLeaf(5)).toEqual(true);
        expect(result.isLeaf(10)).toEqual(false);
    });
});
