import { BST, FoundResult } from '../types';

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

export function makeCollectFoundResult<T>(results: FoundResult<T>[]) {
    return function collectFoundResult(result: FoundResult<T>) {
        results.push(result);
    };
}
