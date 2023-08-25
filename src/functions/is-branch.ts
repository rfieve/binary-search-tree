import { hasLeft } from 'src/functions/has-left';
import { hasRight } from 'src/functions/has-right';
import { BST, BSTBranch } from 'src/types';

/**
 * Assesses if the given tree is a branch (has either left or right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isBranch<T>(tree?: BST<T>): tree is BSTBranch<T> {
    return hasLeft(tree) || hasRight(tree);
}
