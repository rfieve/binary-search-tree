import { BinarySearchTree } from 'src/types';

/**
 * Traverses the tree from right to left.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseInOrderReverse<T>(cb: (node: BinarySearchTree<T>) => void, tree?: BinarySearchTree<T>): void {
    if (tree?.data) {
        traverseInOrderReverse(cb, tree.right);
        cb(tree);
        traverseInOrderReverse(cb, tree.left);
    }
}
