import { BST, BSTRightBranch } from '../types';

/**
 * Assesses if the given tree has a right branch (has right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasRight<T>(tree?: BST<T>): tree is BSTRightBranch<T> {
    return tree?.data !== undefined && !!tree.right;
}
