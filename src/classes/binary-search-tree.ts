import { add as addNode } from '../functions/add'
import { balance as balanceTree } from '../functions/balance'
import { count as countNodes } from '../functions/count'
import { find as findNode } from '../functions/find'
import { findFromPath as findTreeFromPath } from '../functions/find-from-path'
import { findGt as findGtNode } from '../functions/find-gt'
import { findGte as findGteNode } from '../functions/find-gte'
import { findLowestAncestor as findLowestTreeAncestor } from '../functions/find-lowest-ancestor'
import { findLt as findLtNode } from '../functions/find-lt'
import { findLte as findLteNode } from '../functions/find-lte'
import { findMax as findMaxNode } from '../functions/find-max'
import { findMaxHeight as findMaxHeightTree } from '../functions/find-max-height'
import { findMin as findMinNode } from '../functions/find-min'
import { findMinHeight as findMinHeightTree } from '../functions/find-min-height'
import { getBalance as getTreeBalance } from '../functions/get-balance'
import { getDistanceBetweenNodes as getDistanceBetweenTreeNodes } from '../functions/get-distance-between-nodes'
import { hasLeft as hasLeftNode } from '../functions/has-left'
import { hasRight as hasRightNode } from '../functions/has-right'
import { isBalanced as isBalancedTree } from '../functions/is-balanced'
import { isBranch as isBranchNode } from '../functions/is-branch'
import { isLeaf as isLeafNode } from '../functions/is-leaf'
import { remove as removeNode } from '../functions/remove'
import {
    toArrayInOrder as toArrayTreeInOrder,
    toArrayInOrderReverse as toArrayTreeInOrderReverse,
    toArrayLevelOrder as toArrayTreeLevelOrder,
    toArrayLevelOrderReverse as toArrayTreeLevelOrderReverse,
    toArrayPostOrder as toArrayTreePostOrder,
    toArrayPostOrderReverse as toArrayTreePostOrderReverse,
    toArrayPreOrder as toArrayTreePreOrder,
    toArrayPreOrderReverse as toArrayTreePreOrderReverse,
} from '../functions/to-array'
import { toBST } from '../functions/to-binary-search-tree'
import {
    traverseInOrder as traverseTreeInOrder,
    traverseInOrderReverse as traverseTreeInOrderReverse,
} from '../functions/traverse-in-order'
import {
    traverseLevelOrder as traverseTreeLevelOrder,
    traverseLevelOrderReverse as traverseTreeLevelOrderReverse,
} from '../functions/traverse-level-order'
import {
    traversePostOrder as traverseTreePostOrder,
    traversePostOrderReverse as traverseTreePostOrderReverse,
} from '../functions/traverse-post-order'
import {
    traversePreOrder as traverseTreePreOrder,
    traversePreOrderReverse as traverseTreePreOrderReverse,
} from '../functions/traverse-pre-order'
import { BinarySearchTreeOptions, BST, CompareFunction, Path } from '../types'

export class BinarySearchTree<T> {
    private t! : BST<T>

    private readonly compare! : CompareFunction<T>

    constructor(elements: T[], compare: CompareFunction<T>, options?: BinarySearchTreeOptions) {
        this.compare = compare
        this.t = toBST(elements, compare, options)
    }

    public get tree() {
        return this.t
    }

    // Updates
    public balance() {
        this.t = balanceTree(this.t, this.compare)
        return this
    }

    public add(elements: T | T[]) {
        this.t = addNode(this.t, this.compare, elements)
        return this
    }

    public remove(elements: T | T[]) {
        this.t = removeNode(this.t, this.compare, elements) || { data: [] }
        return this
    }

    public clear() {
        this.t = { data: [] }
        return this
    }

    // Traversals
    public traverseInOrder(cb: (node: BST<T>) => void) {
        traverseTreeInOrder(cb, this.t)
        return this
    }

    public traverseInOrderReverse(cb: (node: BST<T>) => void) {
        traverseTreeInOrderReverse(cb, this.t)
        return this
    }

    public traversePreOrder(cb: (node: BST<T>) => void) {
        traverseTreePreOrder(cb, this.t)
        return this
    }

    public traversePreOrderReverse(cb: (node: BST<T>) => void) {
        traverseTreePreOrderReverse(cb, this.t)
        return this
    }
    public traversePostOrder(cb: (node: BST<T>) => void) {
        traverseTreePostOrder(cb, this.t)
        return this
    }

    public traversePostOrderReverse(cb: (node: BST<T>) => void) {
        traverseTreePostOrderReverse(cb, this.t)
        return this
    }

    public traverseLevelOrder(cb: (node: BST<T>) => void) {
        traverseTreeLevelOrder(cb, this.t)
        return this
    }

    public traverseLevelOrderReverse(cb: (node: BST<T>) => void) {
        traverseTreeLevelOrderReverse(cb, this.t)
        return this
    }

    // To array conversions
    public toArrayInOrder() {
        return toArrayTreeInOrder(this.t)
    }

    public toArrayInOrderReverse() {
        return toArrayTreeInOrderReverse(this.t)
    }

    public toArrayPreOrder() {
        return toArrayTreePreOrder(this.t)
    }

    public toArrayPreOrderReverse() {
        return toArrayTreePreOrderReverse(this.t)
    }

    public toArrayPostOrder() {
        return toArrayTreePostOrder(this.t)
    }

    public toArrayPostOrderReverse() {
        return toArrayTreePostOrderReverse(this.t)
    }

    public toArrayLevelOrder() {
        return toArrayTreeLevelOrder(this.t)
    }

    public toArrayLevelOrderReverse() {
        return toArrayTreeLevelOrderReverse(this.t)
    }

    // Assessments
    public isBalanced() {
        return isBalancedTree(this.t)
    }

    public hasLeft(element: T) {
        return hasLeftNode(findNode(this.t, this.compare, element)?.node || { data: [] })
    }

    public hasRight(element: T) {
        return hasRightNode(findNode(this.t, this.compare, element)?.node || { data: [] })
    }

    public isBranch(element: T) {
        return isBranchNode(findNode(this.t, this.compare, element)?.node || { data: [] })
    }

    public isLeaf(element: T) {
        return isLeafNode(findNode(this.t, this.compare, element)?.node || { data: [] })
    }

    // Finders
    public find(element: T) {
        return findNode(this.t, this.compare, element)
    }

    public findFromPath(path: Path) {
        return findTreeFromPath(this.t, path)
    }

    public findLowestAncestor(elementA: T, elementB: T) {
        return findLowestTreeAncestor(this.t, this.compare, elementA, elementB)
    }

    public findGt(element: T) {
        return findGtNode(this.t, this.compare, element)
    }

    public findGte(element: T) {
        return findGteNode(this.t, this.compare, element)
    }

    public findLt(element: T) {
        return findLtNode(this.t, this.compare, element)
    }

    public findLte(element: T) {
        return findLteNode(this.t, this.compare, element)
    }

    public findMin() {
        return findMinNode(this.t)
    }

    public findMax() {
        return findMaxNode(this.t)
    }

    public findMinHeight() {
        return findMinHeightTree(this.t)
    }

    public findMaxHeight() {
        return findMaxHeightTree(this.t)
    }

    public count() {
        return countNodes(this.t)
    }

    public getBalance() {
        return getTreeBalance(this.t)
    }

    public getDistanceBetweenNodes(elementA: T, elementB: T) {
        return getDistanceBetweenTreeNodes(this.t, this.compare, elementA, elementB)
    }
}
