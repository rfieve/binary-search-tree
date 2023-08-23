import { BinaryTree } from 'src/types';

export function makeCollectElements<T>(elements: T[]) {
    return function storeElement(node?: BinaryTree<T>) {
        if (node?.data) {
            elements.push(node.data);
        }
    };
}
