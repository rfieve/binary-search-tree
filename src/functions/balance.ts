import { isBalanced } from './is-balanced'
import { toArrayInOrder } from './to-array'
import { toBST } from './to-binary-search-tree'
import { BST, CompareFunction } from '../types'

/**
 * Balances the given binary search tree, depending on a given compare function.
 * @param tree The source binary search tree.
 * @param compare The compare function.
 * @returns The balanced binary search tree.
 */
export function balance<T>(tree: BST<T>, compare: CompareFunction<T>) {
    return isBalanced(tree)
        ? tree
        : toBST(toArrayInOrder(tree), compare, { isBalanced: true, isPresorted: true })
}

/**
 * Creates a balance function for the given binary search tree with the given compare function.
 * @param compare The compare function.
 * @returns The bound balance function.
 */
export function makeBalance<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>) {
        return balance(tree, compare)
    }
}
