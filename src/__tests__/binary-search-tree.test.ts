import {
    compare,
    mockedArray,
    mockedArrayOrdered,
    mockedArrayReversed,
    mockedBalancedTree,
    mockedUnbalancedTree,
} from 'src/__tests__/_mocks';
import { BinarySearchTree } from 'src/classes/binary-search-tree';
import { makeCollectElementFromNode } from 'src/helpers/collect';

describe('BinarySearchTree', () => {
    // ___ Init ___

    it('should initialize correctly as balanced', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare);
        expect(tree).toEqual(mockedBalancedTree);
    });

    it('should initialize correctly as unbalanced', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(tree).toEqual(mockedUnbalancedTree);
    });

    // ___ Updates ___

    it('should balance correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).balance();
        expect(tree).toEqual(mockedBalancedTree);
    });

    it('should add a node correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).add(11);
        expect(tree.right?.left?.left?.data).toBe(11);
    });

    it('should fill the tree correctly', () => {
        const { tree } = new BinarySearchTree([], compare).add(mockedArray);
        expect(tree).toEqual(mockedUnbalancedTree);
    });

    it('should remove a node correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).remove(
            50
        );
        expect(tree?.right?.right?.data).toBe(89);
        expect(tree?.right?.right?.left?.data).toBe(undefined);
    });

    it('should empty the tree correctly', () => {
        const { tree } = new BinarySearchTree(mockedArray, compare).remove(mockedArray);
        expect(tree).toEqual({});
    });

    // ___ Traversals ___

    // In order
    it('should be converted in order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayInOrder();
        expect(arr).toEqual(mockedArrayOrdered);
    });

    it('should be traversed in order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseInOrder(collect);

        expect(arr).toEqual(mockedArrayOrdered);
    });

    // In order reversed
    it('should be converted in order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayInOrderReverse();
        expect(arr).toEqual(mockedArrayReversed);
    });

    it('should be traversed in order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseInOrderReverse(
            collect
        );

        expect(arr).toEqual(mockedArrayReversed);
    });

    // Pre order
    it('should be converted pre order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPreOrder();
        expect(arr).toEqual([10, 2, 5, 32, 13, 89, 50]);
    });

    it('should be traversed pre order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePreOrder(collect);

        expect(arr).toEqual([10, 2, 5, 32, 13, 89, 50]);
    });

    // Pre order reversed
    it('should be converted pre order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPreOrderReverse();
        expect(arr).toEqual([10, 32, 89, 50, 13, 2, 5]);
    });

    it('should be traversed pre order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePreOrderReverse(
            collect
        );

        expect(arr).toEqual([10, 32, 89, 50, 13, 2, 5]);
    });

    // Top down
    it('should be converted top down correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayTopDown();
        expect(arr).toEqual([10, 2, 32, 5, 13, 89, 50]);
    });

    it('should be traversed top down correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseTopDown(collect);

        expect(arr).toEqual([10, 2, 32, 5, 13, 89, 50]);
    });

    // Top down reversed
    it('should be converted top down reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayTopDownReverse();
        expect(arr).toEqual([10, 32, 2, 89, 13, 5, 50]);
    });

    it('should be traversed top down reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseTopDownReverse(
            collect
        );

        expect(arr).toEqual([10, 32, 2, 89, 13, 5, 50]);
    });

    // ___ Finds ___

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
        const result = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(result.hasLeft(10)).toEqual(true);
        expect(result.hasLeft(2)).toEqual(false);
    });

    // ___ Assesments ___

    it('should hasRight correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(result.hasRight(10)).toEqual(true);
        expect(result.hasRight(89)).toEqual(false);
    });

    it('should isBranch correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(result.isBranch(10)).toEqual(true);
        expect(result.isBranch(5)).toEqual(false);
    });

    it('should isLeaf correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(result.isLeaf(5)).toEqual(true);
        expect(result.isLeaf(10)).toEqual(false);
    });
});
