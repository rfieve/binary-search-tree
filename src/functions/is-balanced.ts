import { findMaxHeight } from 'src/functions/find-max-height';
import { findMinHeight } from 'src/functions/find-min-height';
import { BST } from 'src/types';

/**
 * Assesses if the given tree is balanced.
 *
 * @param tree The source binary search tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isBalanced<T>(tree: BST<T>): boolean {
    return findMinHeight(tree) >= findMaxHeight(tree) - 1;
}
