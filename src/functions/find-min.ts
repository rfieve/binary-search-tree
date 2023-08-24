import { BinarySearchTree } from 'src/types';

/**
 * Finds the minimal node in the tree, beeing the bottom-left node.
 *
 * @param tree The source binary search tree
 *
 * @returns The node considered the minimal.
 */
export function findMin<T>(tree: BinarySearchTree<T>): BinarySearchTree<T> {
    return tree.left ? findMin(tree.left) : tree;
}
