import { BST, FoundResult } from '../types';

export function makeCollectElementFromNode<T>(elements: T[]) {
    return function collectElementFromNode(node?: BST<T>) {
        if (!!node?.data.length) {
            node.data.forEach((e) => elements.push(e));
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
