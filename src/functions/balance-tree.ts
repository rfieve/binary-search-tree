import { toArrayInOrder } from 'src/functions/to-array-in-order';
import { toBalancedBinarySearchTree } from 'src/functions/to-binary-search-tree';
import { BinarySearchTree, CompareFunction } from 'src/types';

/**
 * Balances the given binary search tree, depending on a given compare function.
 *
 * @param tree The source binary search tree
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @returns The balanced binary search tree.
 */
export function balanceTree<T>(tree: BinarySearchTree<T>, compare: CompareFunction<T>) {
    return toBalancedBinarySearchTree(toArrayInOrder(tree), compare, true);
}

/**
 * Creates a balanceTree function for the given binary search tree with the given compare function.
 *
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @returns The bound balanceTree function
 */
export function makeBalanceTree<T>(compare: CompareFunction<T>) {
    return function (tree: BinarySearchTree<T>) {
        return balanceTree(tree, compare);
    };
}
