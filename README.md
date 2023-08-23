# 🌳 binary-tree

A bunch of TypeScript functions to work with binary trees and arrays of any types.

## Usage

### `toBinaryTree`

Converts the given array to a binary tree, depending on a given compare function.

```typescript
const arr = [10, 32, 21, 2, 89, 5, 50];
const compareFunction = (node: number, parentNode: number) => currentNode - parentNode;

const tree = toBinaryTree(arr, compareFunction);

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
