import { add as addNode } from 'src/functions/add';
import { balance as balanceTree } from 'src/functions/balance';
import { find as findNode } from 'src/functions/find';
import { findMax as findMaxNode } from 'src/functions/find-max';
import { findMin as findMinNode } from 'src/functions/find-min';
import { hasLeft as hasLeftNode } from 'src/functions/has-left';
import { hasRight as hasRightNode } from 'src/functions/has-right';
import { isBranch as isBranchNode } from 'src/functions/is-branch';
import { isLeaf as isLeafNode } from 'src/functions/is-leaf';
import { remove as removeNode } from 'src/functions/remove';
import { toArrayInOrder as toArrayTreeInOrder } from 'src/functions/to-array-in-order';
import { toArrayInOrderReverse as toArrayTreeInOrderReverse } from 'src/functions/to-array-in-order-reverse';
import { toBST } from 'src/functions/to-binary-search-tree';
import { traverseInOrder as traverseTreeInOrder } from 'src/functions/traverse-in-order';
import { traverseInOrderReverse as traverseTreeInOrderReverse } from 'src/functions/traverse-in-order-reverse';
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

    public readonly traverseInOrder = (cb: (node: BST<T>) => void) => {
        traverseTreeInOrder(cb, this.t);
        return this;
    };

    public readonly traverseInOrderReverse = (cb: (node: BST<T>) => void) => {
        traverseTreeInOrderReverse(cb, this.t);
        return this;
    };

    public readonly toArrayInOrder = () => toArrayTreeInOrder(this.t);

    public readonly toArrayInOrderReverse = () => toArrayTreeInOrderReverse(this.t);

    public readonly hasLeft = (element: T) => hasLeftNode(findNode(this.t, this.compare, element));

    public readonly hasRight = (element: T) =>
        hasRightNode(findNode(this.t, this.compare, element));

    public readonly isBranch = (element: T) =>
        isBranchNode(findNode(this.t, this.compare, element));

    public readonly isLeaf = (element: T) => isLeafNode(findNode(this.t, this.compare, element));

    public readonly find = (element: T) => findNode(this.t, this.compare, element);

    public readonly findMin = () => findMinNode(this.t);

    public readonly findMax = () => findMaxNode(this.t);
}
