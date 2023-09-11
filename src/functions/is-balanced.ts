import { BST } from '../types';
import { findMaxHeight } from './find-max-height';
import { findMinHeight } from './find-min-height';

/**
 * Assesses if the given tree is balanced.
 * @param tree The source binary search tree
 * @returns true if it is, false if it isn't.
 */
export function isBalanced<T>(tree: BST<T>): boolean {
    return findMinHeight(tree) >= findMaxHeight(tree) - 1;
}
