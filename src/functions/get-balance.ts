import { BST } from '../types';
import { findMaxHeight } from './find-max-height';
import { findMinHeight } from './find-min-height';

/**
 * Gets the balance lof a binary search tree, being the diffence between its min and max height.
 * @param tree The source binary search tree
 * @returns The balance.
 */
export function getBalance<T>(tree: BST<T>): number {
    return findMaxHeight(tree) - findMinHeight(tree);
}
