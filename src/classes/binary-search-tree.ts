import { add as addNode } from '../functions/add';
import { balance as balanceTree } from '../functions/balance';
import { count as countNodes } from '../functions/count';
import { find as findNode } from '../functions/find';
import { findFromPath as findTreeFromPath } from '../functions/find-from-path';
import { findGt as findGtNode } from '../functions/find-gt';
import { findGte as findGteNode } from '../functions/find-gte';
import { findLowestAncestor as findLowestTreeAncestor } from '../functions/find-lowest-ancestor';
import { findLt as findLtNode } from '../functions/find-lt';
import { findLte as findLteNode } from '../functions/find-lte';
import { findMax as findMaxNode } from '../functions/find-max';
import { findMaxHeight as findMaxHeightTree } from '../functions/find-max-height';
import { findMin as findMinNode } from '../functions/find-min';
import { findMinHeight as findMinHeightTree } from '../functions/find-min-height';
import { getBalance as getTreeBalance } from '../functions/get-balance';
import { getDistanceBetweenNodes as getDistanceBetweenTreeNodes } from '../functions/get-distance-between-nodes';
import { hasLeft as hasLeftNode } from '../functions/has-left';
import { hasRight as hasRightNode } from '../functions/has-right';
import { isBalanced as isBalancedTree } from '../functions/is-balanced';
import { isBranch as isBranchNode } from '../functions/is-branch';
import { isLeaf as isLeafNode } from '../functions/is-leaf';
import { remove as removeNode } from '../functions/remove';
import {
    toArrayInOrder as toArrayTreeInOrder,
    toArrayInOrderReverse as toArrayTreeInOrderReverse,
    toArrayLevelOrder as toArrayTreeLevelOrder,
    toArrayLevelOrderReverse as toArrayTreeLevelOrderReverse,
    toArrayPostOrder as toArrayTreePostOrder,
    toArrayPostOrderReverse as toArrayTreePostOrderReverse,
    toArrayPreOrder as toArrayTreePreOrder,
    toArrayPreOrderReverse as toArrayTreePreOrderReverse,
} from '../functions/to-array';
import { toBST } from '../functions/to-binary-search-tree';
import {
    traverseInOrder as traverseTreeInOrder,
    traverseInOrderReverse as traverseTreeInOrderReverse,
} from '../functions/traverse-in-order';
import {
    traverseLevelOrder as traverseTreeLevelOrder,
    traverseLevelOrderReverse as traverseTreeLevelOrderReverse,
} from '../functions/traverse-level-order';
import {
    traversePostOrder as traverseTreePostOrder,
    traversePostOrderReverse as traverseTreePostOrderReverse,
} from '../functions/traverse-post-order';
import {
    traversePreOrder as traverseTreePreOrder,
    traversePreOrderReverse as traverseTreePreOrderReverse,
} from '../functions/traverse-pre-order';
import { BinarySearchTreeOptions, BST, CompareFunction, Path } from '../types';

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
        this.t = removeNode(this.t, this.compare, elements) || { data: [] };
        return this;
    };

    public readonly clear = () => {
        this.t = { data: [] };
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

    public readonly hasLeft = (element: T) =>
        hasLeftNode(findNode(this.t, this.compare, element)?.node || { data: [] });

    public readonly hasRight = (element: T) =>
        hasRightNode(findNode(this.t, this.compare, element)?.node || { data: [] });

    public readonly isBranch = (element: T) =>
        isBranchNode(findNode(this.t, this.compare, element)?.node || { data: [] });

    public readonly isLeaf = (element: T) =>
        isLeafNode(findNode(this.t, this.compare, element)?.node || { data: [] });

    // Finders
    public readonly find = (element: T) => findNode(this.t, this.compare, element);

    public readonly findFromPath = (path: Path) => findTreeFromPath(this.t, path);

    public readonly findLowestAncestor = (elementA: T, elementB: T) =>
        findLowestTreeAncestor(this.t, this.compare, elementA, elementB);

    public readonly findGt = (element: T) => findGtNode(this.t, this.compare, element);

    public readonly findGte = (element: T) => findGteNode(this.t, this.compare, element);

    public readonly findLt = (element: T) => findLtNode(this.t, this.compare, element);

    public readonly findLte = (element: T) => findLteNode(this.t, this.compare, element);

    public readonly findMin = () => findMinNode(this.t);

    public readonly findMax = () => findMaxNode(this.t);

    public readonly findMinHeight = () => findMinHeightTree(this.t);

    public readonly findMaxHeight = () => findMaxHeightTree(this.t);

    public readonly count = () => countNodes(this.t);

    public readonly getBalance = () => getTreeBalance(this.t);

    public readonly getDistanceBetweenNodes = (elementA: T, elementB: T) =>
        getDistanceBetweenTreeNodes(this.t, this.compare, elementA, elementB);
}
