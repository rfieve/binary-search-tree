import { BST } from '../types';
import { getBalance } from './get-balance';

/**
 * Assesses if the given tree is balanced.
 * @param tree The source binary search tree.
 * @returns True if it is, false if it isn't.
 */
export function isBalanced<T>(tree: BST<T>): boolean {
    return getBalance(tree) <= 1;
}
