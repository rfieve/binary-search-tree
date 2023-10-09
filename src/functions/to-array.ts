import { makeToArrayFromTraversal } from '../helpers/make-to-array-from-traversal'
import { traverseInOrder, traverseInOrderReverse } from './traverse-in-order'
import { traverseLevelOrder, traverseLevelOrderReverse } from './traverse-level-order'
import { traversePostOrder, traversePostOrderReverse } from './traverse-post-order'
import { traversePreOrder, traversePreOrderReverse } from './traverse-pre-order'

/**
 * Converts the given binary search tree to an array, with a In-Order tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayInOrder = makeToArrayFromTraversal(traverseInOrder)

/**
 * Converts the given binary search tree to an array, with a In-Order reversed tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayInOrderReverse = makeToArrayFromTraversal(traverseInOrderReverse)

/**
 * Converts the given binary search tree to an array, with a Pre-Order tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayPreOrder = makeToArrayFromTraversal(traversePreOrder)

/**
 * Converts the given binary search tree to an array, with a Pre-Order reversed tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayPreOrderReverse = makeToArrayFromTraversal(traversePreOrderReverse)

/**
 * Converts the given binary search tree to an array, with a Post-Order tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayPostOrder = makeToArrayFromTraversal(traversePostOrder)

/**
 * Converts the given binary search tree to an array, with a Post-Order reversed tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayPostOrderReverse = makeToArrayFromTraversal(traversePostOrderReverse)

/**
 * Converts the given binary search tree to an array, with a Level-Order tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayLevelOrder = makeToArrayFromTraversal(traverseLevelOrder)

/**
 * Converts the given binary search tree to an array, with a Level-Order reversed tree traversal.
 * @param tree The source binary search tree.
 * @returns The sorted array.
 */
export const toArrayLevelOrderReverse = makeToArrayFromTraversal(traverseLevelOrderReverse)
