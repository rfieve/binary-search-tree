import { BinaryTree } from 'src/types';

/**
 * Traverses the tree from min to max.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseMinMax<T>(cb: (node: BinaryTree<T>) => void, tree?: BinaryTree<T>): void {
    if (tree?.data) {
        traverseMinMax(cb, tree.min);
        cb(tree);
        traverseMinMax(cb, tree.max);
    }
}
