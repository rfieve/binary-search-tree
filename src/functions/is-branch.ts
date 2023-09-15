import { BST, BSTBranch } from '../types';
import { hasLeft } from './has-left';
import { hasRight } from './has-right';

/**
 * Assesses if the given tree is a branch (has either left or right).
 * @param tree The source binary search tree.
 * @returns True if it is, false if it isn't.
 */
export function isBranch<T>(tree: BST<T>): tree is BSTBranch<T> {
    return hasLeft(tree) || hasRight(tree);
}
