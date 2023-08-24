# 🌳 binary-tree

A bunch of TypeScript utility functions to work with binary search trees and arrays of any types, with a functional-programming and immutable approach.

## Table of Content

-   [🌳 binary-tree](#-binary-tree)
    -   [Table of Content](#table-of-content)
    -   [Usage](#usage)
        -   [`toBinaryTree`](#tobinarytree)
        -   [`addElement` \& `makeAddElement`](#addelement--makeaddelement)
        -   [`addElements` \& `makeAddElements`](#addelements--makeaddelements)
        -   [`findNode` \& `makeFindNode`](#findnode--makefindnode)
        -   [`findMin` \& `findMax`](#findmin--findmax)
        -   [`toArrayLTR` \& `toArrayRTL`](#toarrayltr--toarrayrtl)
        -   [`traverseLTR` \& `traverseRTL`](#traverseltr--traversertl)
        -   [`isLeaf` \& `isBranch`](#isleaf--isbranch)
        -   [`hasLeftBranch` \& `hasRightBranch`](#hasleftbranch--hasrightbranch)

## Usage

### `toBinaryTree`

Converts the given array to a binary search tree, depending on a given compare function.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;

const tree = toBinaryTree(arr, compare);

// {                            |
//     data: 10,                |
//     left: {                  |
//         data: 2,             |
//         right: {             |
//             data : 5,        |
//         },                   |
//     },                       |            10
//     right: {                 |         /     \
//         data: 32,            |        2      32
//         left: {              |         \    /  \
//             data: 13,        |          5  13  89
//         },                   |                 /
//         right: {             |               50
//             data: 89,        |
//             left: {          |
//                 data : 50,   |
//             },               |
//         },                   |
//     },                       |
// };                           |
```

---

### `addElement` & `makeAddElement`

`addElement` adds a given node to the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

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

`findNode` finds a given node into the given binary search tree with the given compare function.

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

### `toArrayLTR` & `toArrayRTL`

Converts the given binary search tree to an array, with the elements sorted from left to right (`toArrayLTR`) or from right to left (`toArrayRTL`).

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

const elements = toArrayLTR(tree); // [2, 5, 10, 13, 32, 50, 89]
const elements = toArrayRTL(tree); // [89, 50, 32, 13, 10, 5, 2]
```

---

### `traverseLTR` & `traverseRTL`

Traverses a tree from left to right (`traverseLTR`) or from right to left (`traverseRTL`), invoking the callback function on each visited node.

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

const collect = (collection: number[]) => (node: { data: number }) => {
    collection.push(node.data);
};

const collection: number[] = [];
traverseLTR(collect(collection), tree);
// collection: [2, 5, 10, 13, 32, 50, 89]

const collection: number[] = [];
traverseRTL(collect(collection), tree);
// collection: [89, 50, 32, 13, 10, 5, 2]
```

---

### `isLeaf` & `isBranch`

Assesses if the given tree/node is a leaf (has no left nor right prop) (`isLeaf`) or a branch (has a left or a right prop or both) (`isBranch`).

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

const isLeaf_A = isLeaf(tree.left.left); // true
const isLeaf_B = isLeaf(tree); // false

const isBranch_A = isBranch(tree); // true
const isBranch_B = isBranch(tree.left.left); // false
```

---

### `hasLeftBranch` & `hasRightBranch`

Assesses if the given tree/node has a left branch (has a left prop) (`hasLeftBranch`) or a right branch (has a right prop) (`hasRightBranch`).

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

const hasLeft_A = hasLeftBranch(tree); // true
const hasLeft_B = hasLeftBranch(tree.left); // false

const hasRight_A = hasRightBranch(tree); // true
const hasRight_B = hasRightBranch(tree.left.left); // false
```

---
