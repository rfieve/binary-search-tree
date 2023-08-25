import { BST } from 'src/types';

/**
 * Finds the height of the minimal branch of the tree.
 *
 * @param tree The source binary search tree
 *
 * @returns the height.
 */
export function findMinHeight<T>(tree?: BST<T>): number {
    if (tree?.data === undefined) {
        return -1;
    }

    const left = findMinHeight(tree?.left);
    const right = findMinHeight(tree?.right);

    return left < right ? left + 1 : right + 1;
}
