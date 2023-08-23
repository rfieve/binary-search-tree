# 🌳 binary-tree

A bunch of TypeScript utility functions to work with binary trees and arrays of any types, with a functional-programming approach.

## Table of Content

-   [🌳 binary-tree](#-binary-tree)
    -   [Table of Content](#table-of-content)
    -   [Usage](#usage)
        -   [`toBinaryTree`](#tobinarytree)
        -   [`toArrayMinMax` \& `toArrayMaxMin`](#toarrayminmax--toarraymaxmin)
        -   [`traverseMinMax` \& `traverseMaxMin`](#traverseminmax--traversemaxmin)
        -   [`findMin` \& `findMax`](#findmin--findmax)
        -   [`addNode` \& `makeAddNode`](#addnode--makeaddnode)
        -   [`isLeaf` \& `isBranch`](#isleaf--isbranch)
        -   [`hasMinBranch` \& `hasMaxBranch`](#hasminbranch--hasmaxbranch)

## Usage

### `toBinaryTree`

Converts the given array to a binary tree, depending on a given compare function.

```typescript
const arr = [10, 32, 21, 2, 89, 5, 50];
const compare = (node: number, parentNode: number) => currentNode - parentNode;

const tree = toBinaryTree(arr, compare);

// {                            |
//     data : 10,               |            10
//     max  : {                 |         /     \
//         data : 32,           |        2      32
//         min  : {             |         \    /  \
//             data : 21,       |          5  21  89
//         },                   |                 /
//         max : {              |               50
//             data : 89,       |
//             min  : {         |
//                 data : 50,   |
//             },               |
//         },                   |
//     },                       |
//     min : {                  |
//         data : 2,            |
//         max  : {             |
//             data : 5,        |
//         },                   |
//     },                       |
// };                           |
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
//     5  21  89
//            /
//          50

const nodesMinMax = toArrayMinMax(tree);
// nodesMinMax : [2, 5, 10, 21, 32, 50, 89]

const nodesMaxMin = toArrayMaxMmin(tree);
// nodesMaxMin : [89, 50, 32, 21, 10, 5, 2]
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
//     5  21  89
//            /
//          50

const storeNodes = (store: number[]) => (node: { data: number }) => {
    store.push(node.data);
};

const nodesMinMax: number[] = [];
traverseMinMax(storeNodes(nodesMinMax), tree);
// nodesMinMax : [2, 5, 10, 21, 32, 50, 89]

const nodesMaxMin: number[] = [];
traverseMaxMmin(storeNodes(nodesMaxMin), tree);
// nodesMaxMin : [89, 50, 32, 21, 10, 5, 2]
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
//     5  21  89
//            /
//          50

const min = findMin(tree).data; // 2
const max = findMax(tree).data; // 89
```

---

### `addNode` & `makeAddNode`

Adds a given node to the given binary tree with the given compare function (`addNode`).

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinaryTree` will of course f\*\*k up the tree.

A safer approach consists of using `makeAddNode`. It curries an `addNode` closure function for the given binary tree with the given compare function.

```typescript
const arr = [10, 32, 21, 2, 89, 5, 50];
const compare = (node: number, parentNode: number) => currentNode - parentNode;

const tree = toBinaryTree(arr, compare);

// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  21  89
//            /
//          50

const modifiedTree = addNode(tree, compare, 12);

// schema of "modifiedTree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  21  89
//       /    /
//      12   50

const saferAndReusableAddNode = makeAddNode(tree, compare);
const reModifiedTree = saferAndReusableAddNode(12);

// schema of "reModifiedTree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  21  89
//       /    /
//      12   50
```

---

### `isLeaf` & `isBranch`

Assess if the given tree/node is a leaf (has no min nor max prop) (`isLeaf`) or a branch (has a min or a max prop or both) (`isBranch`).

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  21  89
//            /
//          50

const isLeaf_A = isLeaf(tree.min.min); // true
const isLeaf_B = isLeaf(tree); // false

const isBranch_A = isBranch(tree); // true
const isBranch_B = isBranch(tree.min.min); // false
```

---

### `hasMinBranch` & `hasMaxBranch`

Assess if the given tree/node has a min branch (has a min prop) (`hasMinBranch`) or a max branch (has a max prop) (`hasMaxBranch`).

```typescript
// schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  21  89
//            /
//          50

const hasMin_A = hasMinBranch(tree); // true
const hasMin_B = hasMinBranch(tree.min); // false

const hasMax_A = hasMaxBranch(tree); // true
const hasMax_B = hasMaxBranch(tree.min.min); // false
```

---
