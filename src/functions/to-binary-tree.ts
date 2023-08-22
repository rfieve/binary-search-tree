import { addNode } from 'src/functions/add-node';
import { BinaryTree, CompareFunction } from 'src/types';

/**
 * Converts the given array to a binary tree, depending on a given compare function.
 *
 * @param source The source array
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as min node of its parent
 *
 *  => Positive : the current element should be placed as max node of its parent
 *
 *  => Zero     : the current element should be placed as max node of its parent
 *
 * @returns The elements of the source array organized as a binary tree.
 */
export function toBinaryTree<T>(source: T[], compareFn: CompareFunction<T>): BinaryTree<T> {
    return source.reduce((acc, curr) => addNode(acc, compareFn, curr), {} as BinaryTree<T>);
}
