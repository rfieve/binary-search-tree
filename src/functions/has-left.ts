import { BST, BSTLeftBranch } from '../types';

/**
 * Assesses if the given tree has a left branch (has left).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasLeft<T>(tree?: BST<T>): tree is BSTLeftBranch<T> {
    return tree?.data !== undefined && !!tree.left;
}
