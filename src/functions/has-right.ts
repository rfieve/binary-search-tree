import { BST, BSTBranchWithRight } from '../types';

/**
 * Assesses if the given tree has a right branch (has right).
 * @param tree The source binary search tree.
 * @returns True if it has, false if it hasn't.
 */
export function hasRight<T>(tree: BST<T>): tree is BSTBranchWithRight<T> {
    return tree.data.length > 0 && !!tree.right;
}
