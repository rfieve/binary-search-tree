import { BST } from 'src/types';

/**
 * Traverses the tree from left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traversePreOrder<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (tree?.data !== undefined) {
        cb(tree);
        traversePreOrder(cb, tree.left);
        traversePreOrder(cb, tree.right);
    }
}

/**
 * Traverses the tree from right to left.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traversePreOrderReverse<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (tree?.data !== undefined) {
        cb(tree);
        traversePreOrderReverse(cb, tree.right);
        traversePreOrderReverse(cb, tree.left);
    }
}
