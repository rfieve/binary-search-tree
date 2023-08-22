import { BinaryTree, BinaryTreeLeaf } from 'src/types';

/**
 * Assess if the given tree is a leaf (has neither min nor max).
 *
 * @param tree The source binary tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isLeaf<T>(tree?: BinaryTree<T>): tree is BinaryTreeLeaf<T> {
    return tree?.data !== undefined && !tree.min && !tree.max;
}
