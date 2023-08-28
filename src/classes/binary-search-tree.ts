import { add as addNode } from 'src/functions/add';
import { balance as balanceTree } from 'src/functions/balance';
import { find as findNode } from 'src/functions/find';
import { findMax as findMaxNode } from 'src/functions/find-max';
import { findMaxHeight as findMaxHeightTree } from 'src/functions/find-max-height';
import { findMin as findMinNode } from 'src/functions/find-min';
import { findMinHeight as findMinHeightTree } from 'src/functions/find-min-height';
import { hasLeft as hasLeftNode } from 'src/functions/has-left';
import { hasRight as hasRightNode } from 'src/functions/has-right';
import { isBalanced as isBalancedTree } from 'src/functions/is-balanced';
import { isBranch as isBranchNode } from 'src/functions/is-branch';
import { isLeaf as isLeafNode } from 'src/functions/is-leaf';
import { remove as removeNode } from 'src/functions/remove';
import {
    toArrayInOrder as toArrayTreeInOrder,
    toArrayInOrderReverse as toArrayTreeInOrderReverse,
    toArrayLevelOrder as toArrayTreeLevelOrder,
    toArrayLevelOrderReverse as toArrayTreeLevelOrderReverse,
    toArrayPostOrder as toArrayTreePostOrder,
    toArrayPostOrderReverse as toArrayTreePostOrderReverse,
    toArrayPreOrder as toArrayTreePreOrder,
    toArrayPreOrderReverse as toArrayTreePreOrderReverse,
} from 'src/functions/to-array';
import { toBST } from 'src/functions/to-binary-search-tree';
import {
    traverseInOrder as traverseTreeInOrder,
    traverseInOrderReverse as traverseTreeInOrderReverse,
} from 'src/functions/traverse-in-order';
import {
    traverseLevelOrder as traverseTreeLevelOrder,
    traverseLevelOrderReverse as traverseTreeLevelOrderReverse,
} from 'src/functions/traverse-level-order';
import {
    traversePostOrder as traverseTreePostOrder,
    traversePostOrderReverse as traverseTreePostOrderReverse,
} from 'src/functions/traverse-post-order';
import {
    traversePreOrder as traverseTreePreOrder,
    traversePreOrderReverse as traverseTreePreOrderReverse,
} from 'src/functions/traverse-pre-order';
import { BinarySearchTreeOptions, BST, CompareFunction } from 'src/types';

export class BinarySearchTree<T> {
    private t! : BST<T>;

    private readonly compare! : CompareFunction<T>;

    constructor(elements: T[], compare: CompareFunction<T>, options?: BinarySearchTreeOptions) {
        this.compare = compare;
        this.t = toBST(elements, compare, options);
    }

    public get tree() {
        return this.t;
    }

    // Updates
    public readonly balance = () => {
        this.t = balanceTree(this.t, this.compare);
        return this;
    };

    public readonly add = (elements: T | T[]) => {
        this.t = addNode(this.t, this.compare, elements);
        return this;
    };

    public readonly remove = (elements: T | T[]) => {
        this.t = removeNode(this.t, this.compare, elements) || {};
        return this;
    };

    // Traversals
    public readonly traverseInOrder = (cb: (node: BST<T>) => void) => {
        traverseTreeInOrder(cb, this.t);
        return this;
    };

    public readonly traverseInOrderReverse = (cb: (node: BST<T>) => void) => {
        traverseTreeInOrderReverse(cb, this.t);
        return this;
    };

    public readonly traversePreOrder = (cb: (node: BST<T>) => void) => {
        traverseTreePreOrder(cb, this.t);
        return this;
    };

    public readonly traversePreOrderReverse = (cb: (node: BST<T>) => void) => {
        traverseTreePreOrderReverse(cb, this.t);
        return this;
    };
    public readonly traversePostOrder = (cb: (node: BST<T>) => void) => {
        traverseTreePostOrder(cb, this.t);
        return this;
    };

    public readonly traversePostOrderReverse = (cb: (node: BST<T>) => void) => {
        traverseTreePostOrderReverse(cb, this.t);
        return this;
    };

    public readonly traverseLevelOrder = (cb: (node: BST<T>) => void) => {
        traverseTreeLevelOrder(cb, this.t);
        return this;
    };

    public readonly traverseLevelOrderReverse = (cb: (node: BST<T>) => void) => {
        traverseTreeLevelOrderReverse(cb, this.t);
        return this;
    };

    // To array conversions
    public readonly toArrayInOrder = () => toArrayTreeInOrder(this.t);

    public readonly toArrayInOrderReverse = () => toArrayTreeInOrderReverse(this.t);

    public readonly toArrayPreOrder = () => toArrayTreePreOrder(this.t);

    public readonly toArrayPreOrderReverse = () => toArrayTreePreOrderReverse(this.t);

    public readonly toArrayPostOrder = () => toArrayTreePostOrder(this.t);

    public readonly toArrayPostOrderReverse = () => toArrayTreePostOrderReverse(this.t);

    public readonly toArrayLevelOrder = () => toArrayTreeLevelOrder(this.t);

    public readonly toArrayLevelOrderReverse = () => toArrayTreeLevelOrderReverse(this.t);

    // Assessments
    public readonly isBalanced = () => isBalancedTree(this.t);

    public readonly hasLeft = (element: T) => hasLeftNode(findNode(this.t, this.compare, element));

    public readonly hasRight = (element: T) =>
        hasRightNode(findNode(this.t, this.compare, element));

    public readonly isBranch = (element: T) =>
        isBranchNode(findNode(this.t, this.compare, element));

    public readonly isLeaf = (element: T) => isLeafNode(findNode(this.t, this.compare, element));

    // Finders
    public readonly find = (element: T) => findNode(this.t, this.compare, element);

    public readonly findMin = () => findMinNode(this.t);

    public readonly findMax = () => findMaxNode(this.t);

    public readonly findMinHeight = () => findMinHeightTree(this.t);

    public readonly findMaxHeight = () => findMaxHeightTree(this.t);
}
