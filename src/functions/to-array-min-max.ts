import { BinaryTree } from 'src/types';

function loop<T>(tree?: BinaryTree<T>, nodes = [] as T[]): T[] {
    if (tree?.data) {
        loop(tree.min, nodes);
        nodes.push(tree.data);
        loop(tree.max, nodes);
    }

    return nodes;
}

export function toArrayMinMax<T>(tree?: BinaryTree<T>) {
    const nodes: T[] = [];

    return loop(tree, nodes);
}
