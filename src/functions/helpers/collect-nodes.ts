import { BinarySearchTree } from 'src/types';

export function makeCollectElements<T>(elements: T[]) {
    return function collectElement(node?: BinarySearchTree<T>) {
        if (node?.data) {
            elements.push(node.data);
        }
    };
}
