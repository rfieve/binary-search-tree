# 🌳 binary-tree

A bunch of TypeScript utility functions to work with binary trees and arrays of any types, with a functional-programming approach.

## Table of Content

-   [🌳 binary-tree](#-binary-tree)
    -   [Table of Content](#table-of-content)
    -   [Usage](#usage)
        -   [`toBinaryTree`](#tobinarytree)
        -   [`addElement` \& `makeAddElement`](#addelement--makeaddelement)
        -   [`addElements` \& `makeAddElements`](#addelements--makeaddelements)
        -   [`findNode` \& `makeFindNode`](#findnode--makefindnode)
        -   [`findMin` \& `findMax`](#findmin--findmax)
        -   [`toArrayMinMax` \& `toArrayMaxMin`](#toarrayminmax--toarraymaxmin)
        -   [`traverseMinMax` \& `traverseMaxMin`](#traverseminmax--traversemaxmin)
        -   [`isLeaf` \& `isBranch`](#isleaf--isbranch)
        -   [`hasMinBranch` \& `hasMaxBranch`](#hasminbranch--hasmaxbranch)

## Usage

### `toBinaryTree`

Converts the given array to a binary tree, depending on a given compare function.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;

const tree = toBinaryTree(arr, compare);

// {                            |
//     data: 10,                |
//     min: {                   |
//         data: 2,             |
//         max: {               |
//             data : 5,        |
//         },                   |
//     },                       |            10
//     max: {                   |         /     \
//         data: 32,            |        2      32
//         min: {               |         \    /  \
//             data: 13,        |          5  13  89
//         },                   |                 /
//         max: {               |               50
//             data: 89,        |
//             min: {           |
//                 data : 50,   |
//             },               |
//         },                   |
//     },                       |
// };                           |
```

---

### `addElement` & `makeAddElement`

`addElement` adds a given node to the given binary tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinaryTree` will of course f\*\*k up the tree.

A safer approach consists of using `makeAddElement`. It curries an `addElement` closure function with the given compare function.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;
const tree = toBinaryTree(arr, compare);

const modifiedTree = addElement(tree, compare, 11);

// schema of "tree"     =>     "modifiedTree"
//                      |
//       10             |            10
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \    /  \
//     5  13  89        |          5  13  89
//            /         |            /   /
//          50          |           11  50

const safeAndReusableAddElement = makeAddElement(compare);
const safelyModifiedTree = safeAndReusableAddElement(tree, 11);

// schema of "tree"     =>   "safelyModifiedTree"
//                      |
//       10             |            10
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \    /  \
//     5  13  89        |          5  13  89
//            /         |            /   /
//          50          |           11  50
```

---

### `addElements` & `makeAddElements`

Same as `addElements` & `makeAddElements`, but with an array of elements to add.

```typescript
const modifiedTree = addElements(tree, compare, [11, 100]);

// schema of "tree"     =>   "modifiedTree"
//                      |
//       10             |            10
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \    /  \
//     5  13  89        |          5  13  89
//            /         |            /   /  \
//          50          |           11  50   100

const safeAndReusableAddElements = makeAddElements(compare);
const safelyModifiedTree = safeAndReusableAddElements(tree, [11, 100]);

// schema of "tree"     =>   "safelyModifiedTree"
//                      |
//       10             |            10
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \    /  \
//     5  13  89        |          5  13  89
//            /         |            /   /  \
//          50          |           11  50   100
```

---

### `findNode` & `makeFindNode`

`findNode` finds a given node into the given binary tree with the given compare function.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinaryTree` will of course f\*\*k up the search.

A safer approach consists of using `makeFindNode`. It curries a `findNode` closure function with the given compare function.

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const node = findNode(tree, compare, 13).data; // 13
// or
const safeAndReusableFindNode = makeFindNode(compare);
const safelyModifiedTree = safeAndReusableFindNode(tree, 13).data; // 13
```

---

### `findMin` & `findMax`

Finds the min (`findMin`) or the max (`findMax`) node of the tree.

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const min = findMin(tree).data; // 2
const max = findMax(tree).data; // 89
```

---

### `toArrayMinMax` & `toArrayMaxMin`

Converts the given binary tree to an array, with the elements sorted from min to max (`toArrayMinMax`) or from max to min (`toArrayMaxMin`).

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const elements = toArrayMinMax(tree); // [2, 5, 10, 13, 32, 50, 89]
const elements = toArrayMaxMmin(tree); // [89, 50, 32, 13, 10, 5, 2]
```

---

### `traverseMinMax` & `traverseMaxMin`

Traverses a tree from min to max (`traverseMinMax`) or from max to min (`traverseMaxMin`), invoking the callback function on each visited node.

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const collect = (store: number[]) => (node: { data: number }) => {
    store.push(node.data);
};

const elements: number[] = [];
traverseMinMax(collect(elements), tree);
// elements: [2, 5, 10, 13, 32, 50, 89]

const elements: number[] = [];
traverseMaxMmin(collect(nodesMaxMin), tree);
// elements: [89, 50, 32, 13, 10, 5, 2]
```

---

### `isLeaf` & `isBranch`

Assesses if the given tree/node is a leaf (has no min nor max prop) (`isLeaf`) or a branch (has a min or a max prop or both) (`isBranch`).

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const isLeaf_A = isLeaf(tree.min.min); // true
const isLeaf_B = isLeaf(tree); // false

const isBranch_A = isBranch(tree); // true
const isBranch_B = isBranch(tree.min.min); // false
```

---

### `hasMinBranch` & `hasMaxBranch`

Assesses if the given tree/node has a min branch (has a min prop) (`hasMinBranch`) or a max branch (has a max prop) (`hasMaxBranch`).

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const hasMin_A = hasMinBranch(tree); // true
const hasMin_B = hasMinBranch(tree.min); // false

const hasMax_A = hasMaxBranch(tree); // true
const hasMax_B = hasMaxBranch(tree.min.min); // false
```

---
