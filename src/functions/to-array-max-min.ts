import { BinaryTree } from 'src/types';

function loop<T>(nodes: T[], tree?: BinaryTree<T>): T[] {
    if (tree?.data) {
        loop(nodes, tree.max);
        nodes.push(tree.data);
        loop(nodes, tree.min);
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

    return loop(nodes, tree);
}
