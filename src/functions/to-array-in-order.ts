import { traverseInOrder } from 'src/functions/traverse-in-order';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';
import { BST } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from left to right.
 */
export function toArrayInOrder<T>(tree?: BST<T>) {
    return makeToArrayWithTraversal(traverseInOrder)(tree);
}
