import { BST, CompareFunction, Direction } from '../types';

function addElement<T>(tree: BST<T>, compare: CompareFunction<T>, element: T): BST<T> {
    if (tree.data.length === 0) {
        return { data: [element] };
    }

    const comparison = compare(element, tree.data[0]);

    if (comparison === 0) {
        return { ...tree, data: [...tree.data, element] };
    }

    const direction = comparison < 0 ? Direction.Left : Direction.Right;
    const subTree = tree[direction];

    return {
        ...tree,
        [direction] : subTree ? addElement(subTree, compare, element) : { data: [element] },
    };
}

// Impure, but way more efficient, pass a precloned tree in order to ensure immutablibilty
function addElementImpure<T>(tree: BST<T>, compare: CompareFunction<T>, element: T): void {
    if (tree.data.length === 0) {
        tree.data = [element];
    } else {
        let currentNode = tree;

        while (true) {
            const comparison = compare(element, currentNode.data[0]);

            if (comparison === 0) {
                currentNode.data.push(element);
                break;
            }

            const direction = comparison < 0 ? Direction.Left : Direction.Right;

            if (currentNode[direction]) {
                currentNode = currentNode[direction]!;
            } else {
                currentNode[direction] = { data: [element] };
                break;
            }
        }
    }
}

function addElements<T>(tree: BST<T>, compare: CompareFunction<T>, elements: T[]): BST<T> {
    const clone = structuredClone(tree);

    for (const element of elements) {
        addElementImpure(clone, compare, element);
    }

    return clone;
}

/**
 * Adds the given elements to the given binary search tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 * @param tree The source binary search tree
 * @param compare The compare function
 * @param nodes The nodes to be added
 * @returns The new binary search tree
 */
export function add<T>(tree: BST<T>, compare: CompareFunction<T>, elements: T | T[]): BST<T> {
    return Array.isArray(elements)
        ? addElements(tree, compare, elements)
        : addElement(tree, compare, elements);
}

/**
 * Creates an add function for the given binary search tree with the given compare function.
 * @param compare The compare function
 * @returns The bound add function
 */
export function makeAdd<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, elements: T | T[]) {
        return add(tree, compare, elements);
    };
}
