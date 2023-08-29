import { BinarySearchTree } from '../classes/binary-search-tree';
import { makeCollectElementFromNode } from '../helpers/collect';
import {
    compare,
    mockedArray,
    mockedArrayInOrder,
    mockedArrayInOrderReversed,
    mockedArrayLevelOrder,
    mockedArrayLevelOrderReverse,
    mockedArrayPostOrder,
    mockedArrayPostOrderReverse,
    mockedArrayPreOrder,
    mockedArrayPreOrderReverse,
    mockedBalancedTree,
    mockedUnbalancedTree,
} from './_mocks';

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
        expect(arr).toEqual(mockedArrayInOrder);
    });

    it('should be traversed in order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseInOrder(collect);

        expect(arr).toEqual(mockedArrayInOrder);
    });

    // In order reversed
    it('should be converted in order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayInOrderReverse();
        expect(arr).toEqual(mockedArrayInOrderReversed);
    });

    it('should be traversed in order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseInOrderReverse(
            collect
        );

        expect(arr).toEqual(mockedArrayInOrderReversed);
    });

    // Pre order
    it('should be converted pre order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPreOrder();
        expect(arr).toEqual(mockedArrayPreOrder);
    });

    it('should be traversed pre order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePreOrder(collect);

        expect(arr).toEqual(mockedArrayPreOrder);
    });

    // Pre order reversed
    it('should be converted pre order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPreOrderReverse();
        expect(arr).toEqual(mockedArrayPreOrderReverse);
    });

    it('should be traversed pre order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePreOrderReverse(
            collect
        );

        expect(arr).toEqual(mockedArrayPreOrderReverse);
    });

    // Post order
    it('should be converted post order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPostOrder();
        expect(arr).toEqual(mockedArrayPostOrder);
    });

    it('should be traversed post order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePostOrder(
            collect
        );

        expect(arr).toEqual(mockedArrayPostOrder);
    });

    // Post order reversed
    it('should be converted post order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayPostOrderReverse();
        expect(arr).toEqual(mockedArrayPostOrderReverse);
    });

    it('should be traversed post order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traversePostOrderReverse(
            collect
        );

        expect(arr).toEqual(mockedArrayPostOrderReverse);
    });

    // Level order
    it('should be converted level order correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayLevelOrder();
        expect(arr).toEqual(mockedArrayLevelOrder);
    });

    it('should be traversed level order correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseLevelOrder(
            collect
        );

        expect(arr).toEqual(mockedArrayLevelOrder);
    });

    // Level order reversed
    it('should be converted level order reversed correctly', () => {
        const arr = new BinarySearchTree(mockedArray, compare, {
            isBalanced : false,
        }).toArrayLevelOrderReverse();
        expect(arr).toEqual(mockedArrayLevelOrderReverse);
    });

    it('should be traversed level order reversed correctly', () => {
        const arr: number[] = [];
        const collect = makeCollectElementFromNode(arr);
        new BinarySearchTree(mockedArray, compare, { isBalanced: false }).traverseLevelOrderReverse(
            collect
        );

        expect(arr).toEqual(mockedArrayLevelOrderReverse);
    });

    // ___ Finds ___

    it('should find correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).find(10)?.node;
        expect(node?.data).toEqual(10);
    });

    it('should findGt correctly', () => {
        const results = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).findGt(
            10
        );
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([32, 13, 89, 50]);
    });

    it('should findGte correctly', () => {
        const results = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).findGte(
            10
        );
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([10, 32, 13, 89, 50]);
    });

    it('should findLt correctly', () => {
        const results = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).findLt(
            13
        );
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5]);
    });

    it('should findLte correctly', () => {
        const results = new BinarySearchTree(mockedArray, compare, { isBalanced: false }).findLte(
            13
        );
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5, 13]);
    });

    it('should findMin correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).findMin();
        expect(node?.data).toEqual(2);
    });

    it('should findMax correctly', () => {
        const node = new BinarySearchTree(mockedArray, compare).findMax();
        expect(node?.data).toEqual(89);
    });

    it('should findMinHeight correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare).findMinHeight();
        expect(result).toEqual(2);
    });

    it('should findMaxHeight correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare).findMaxHeight();
        expect(result).toEqual(2);
    });

    it('should count correctly', () => {
        const result = new BinarySearchTree(mockedArray, compare).count();
        expect(result).toEqual(7);
    });

    // ___ Assesments ___
    it('should hasLeft correctly', () => {
        const bst = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(bst.hasLeft(10)).toEqual(true);
        expect(bst.hasLeft(2)).toEqual(false);
    });

    it('should hasRight correctly', () => {
        const bst = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(bst.hasRight(10)).toEqual(true);
        expect(bst.hasRight(89)).toEqual(false);
    });

    it('should isBalanced correctly', () => {
        const bst = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        const bstBalanced = new BinarySearchTree(mockedArray, compare);
        expect(bst.isBalanced()).toEqual(false);
        expect(bstBalanced.isBalanced()).toEqual(true);
    });

    it('should isBranch correctly', () => {
        const bst = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(bst.isBranch(10)).toEqual(true);
        expect(bst.isBranch(5)).toEqual(false);
    });

    it('should isLeaf correctly', () => {
        const bst = new BinarySearchTree(mockedArray, compare, { isBalanced: false });
        expect(bst.isLeaf(5)).toEqual(true);
        expect(bst.isLeaf(10)).toEqual(false);
    });
});
