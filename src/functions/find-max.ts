import { BinarySearchTree } from 'src/types';

/**
 * Finds the maximal node in the tree, beeing the bottom-right node.
 *
 * @param tree The source binary search tree
 *
 * @returns The node considered the maximal.
 */
export function findMax<T>(tree: BinarySearchTree<T>): BinarySearchTree<T> {
    return tree.right ? findMax(tree.right) : tree;
}
