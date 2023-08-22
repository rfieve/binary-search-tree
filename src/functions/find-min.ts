import { BinaryTree } from 'src/types';

/**
 * Finds the minimal node in the tree, beeing the bottom-min node.
 *
 * @param tree The source binary tree
 *
 * @returns The node considered the minimal.
 */
export function findMin<T>(tree: BinaryTree<T>): BinaryTree<T> {
    return tree.min ? findMin(tree.min) : tree;
}