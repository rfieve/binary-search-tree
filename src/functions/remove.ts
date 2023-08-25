import { findMin } from 'src/functions/find-min';
import { hasLeft } from 'src/functions/has-left';
import { hasRight } from 'src/functions/has-right';
import { isLeaf } from 'src/functions/is-leaf';
import { BST, BSTNode, CompareFunction } from 'src/types';

function removeElement<T>(
    tree = {} as BST<T>,
    compare: CompareFunction<T>,
    element: T
): BST<T> | undefined {
    if (tree?.data === undefined) {
        return tree;
    }

    const comparison = compare(element, tree.data);

    // This node should be removed
    if (comparison === 0) {
        if (isLeaf(tree)) {
            // If no children:
            // => Just delete.
            return undefined;
        }
        if (hasLeft(tree) && hasRight(tree)) {
            // If two children:
            // => Determine the next inorder successor in the right subtree.
            // => Replace the node to be removed with the inorder successor.
            // => Delete the inorder successor duplicate.
            const nextInOrder = findMin(tree.right);

            return {
                ...tree,
                data  : nextInOrder.data,
                right : removeElement(
                    tree.right as BSTNode<T>,
                    compare,
                    nextInOrder.data as T
                ) as BSTNode<T>,
            };
        }

        // If a single child:
        // => Copy that child to the node.
        return (tree.left || tree.right) as BST<T>;
    }

    const direction = comparison < 0 ? 'left' : 'right';
    const subTree = tree[direction];

    return subTree ? { ...tree, [direction]: removeElement(subTree, compare, element) } : tree;
}

function removeElements<T>(
    tree = {} as BST<T>,
    compare: CompareFunction<T>,
    elements: T[]
): BST<T> {
    return elements.reduce((acc, curr) => removeElement(acc, compare, curr) || {}, tree);
}

/**
 * Removes a given node from the given binary search tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary search tree
 * @param compare The function used to determine the order of the elements (similar to Array.sort).
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @param element The element to be removed
 * @returns The new binary search tree
 */
export function remove<T>(
    tree = {} as BST<T>,
    compare: CompareFunction<T>,
    elements: T | T[]
): BST<T> | undefined {
    return Array.isArray(elements)
        ? removeElements(tree, compare, elements)
        : removeElement(tree, compare, elements);
}

/**
 * Creates an removeElement function for the given binary search tree with the given compare function.
 *
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @returns The bound removeElement function
 */
export function makeRemove<T>(compare: CompareFunction<T>) {
    return function (tree = {} as BST<T>, elements: T | T[]) {
        return remove(tree, compare, elements);
    };
}
