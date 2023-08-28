import { BST } from '../types';

export function makeCollectElementFromNode<T>(elements: T[]) {
    return function collectElementFromNode(node?: BST<T>) {
        if (node?.data) {
            elements.push(node.data);
        }
    };
}

export function makeCollectElement<T>(elements: T[]) {
    return function collectElement(element: T) {
        elements.push(element);
    };
}
