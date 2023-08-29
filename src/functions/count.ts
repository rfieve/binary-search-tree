import { BST } from '../types';
import { traverseInOrder } from './traverse-in-order';

export function count<T>(tree?: BST<T>) {
    let counter = 0;

    traverseInOrder(() => counter++, tree);

    return counter;
}
