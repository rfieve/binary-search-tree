import { BinaryTree } from 'src/types';

function loop<T>(tree?: BinaryTree<T>, nodes = [] as T[]): T[] {
    if (tree?.data) {
        loop(tree.max, nodes);
        nodes.push(tree.data);
        loop(tree.min, nodes);
    }

    return nodes;
}

/**
 * Converts the given binary tree to an array, with the elements sorted from max to min.
 *
 * @param tree The source binary tree
 * @returns The array sorted from max to min.
 */
export function toArrayMaxMin<T>(tree?: BinaryTree<T>) {
    const nodes: T[] = [];

    return loop(tree, nodes);
}
