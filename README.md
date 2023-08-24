# 🌳 binary-search-tree

A bunch of TypeScript utility functions to work with binary search trees and arrays of any types, with a functional-programming and immutable approach.

## Table of Content

-   [🌳 binary-search-tree](#-binary-search-tree)
    -   [Table of Content](#table-of-content)
    -   [Example](#example)
    -   [Usage](#usage)
        -   [`toBinarySearchTree`](#tobinarysearchtree)
        -   [`addElement` \& `makeAddElement`](#addelement--makeaddelement)
        -   [`addElements` \& `makeAddElements`](#addelements--makeaddelements)
        -   [`removeElement` \& `makeRemoveElement`](#removeelement--makeremoveelement)
        -   [`removeElements` \& `makeRemoveElements`](#removeelements--makeremoveelements)
        -   [`findNode` \& `makeFindNode`](#findnode--makefindnode)
        -   [`findMin` \& `findMax`](#findmin--findmax)
        -   [`toArrayInOrder` \& `toArrayInOrderReverse`](#toarrayinorder--toarrayinorderreverse)
        -   [`traverseInOrder` \& `traverseInOrderReverse`](#traverseinorder--traverseinorderreverse)
        -   [`isLeaf` \& `isBranch`](#isleaf--isbranch)
        -   [`hasLeftBranch` \& `hasRightBranch`](#hasleftbranch--hasrightbranch)

## Example

```typescript
type Element = { name: string };

const compareAlpha = (a: Element, b: Element) => a.name.localeCompare(b.name);

const addElementAlpha = makeAddElement(compareAlpha);
const addElementsAlpha = makeAddElements(compareAlpha);
const removeElementAlpha = makeRemoveElement(compareAlpha);
const removeElementsAlpha = makeRemoveElements(compareAlpha);
const findNodeAlpha = makeFindNode(compareAlpha);

const people: Element[] = [
    { name: 'Han' },
    { name: 'Anakin' },
    { name: 'Leia' },
    { name: 'Luke' },
    { name: 'Padme' },
    { name: 'Lando' },
    { name: 'Chewie' },
];
const tree = toBinarySearchTree(people, compareAlpha);

const updatedTree = pipe(
    (t) => addElementAlpha(t, { name: 'Yoda' }),
    (t) => addElementAlpha(t, { name: 'Obiwan' }),
    (t) => addElementsAlpha(t, [{ name: 'Boba' }, { name: 'Grogu' }]),
    (t) => removeElementsAlpha(t, [{ name: 'Han' }, { name: 'Padme' }]),
    (t) => removeElementAlpha(t, { name: 'Luke' })
)(tree);

// tree:                                     | Schema of "tree"
//                                           |
// {                                         |             Han
//     data: { name: 'Han' },                |           /     \
//     left: {                               |     Anakin       Leia
//         data: { name: 'Anakin' },         |           \     /    \
//         right: {                          |       Chewie  Lando   Luke
//             data : { name: 'Chewie' },    |                         \
//         },                                |                        Padme
//     },                                    |
//     right: {                              | Schema of "updatedTree"
//         data: { name: 'Leia' },           |
//         left: {                           |            Lando
//             data: { name: 'Lando' },      |           /     \
//         },                                |     Anakin       Leia
//         right: {                          |         \            \
//             data: { name: 'Luke' },       |       Chewie        Obiwan
//             right: {                      |        /    \            \
//                 data : { name: 'Padme' }, |      Boba  Grogu        Yoda
//             },                            |
//         },                                |
//     },                                    |
// };                                        |

const min = findMin(updatedTree).data.name; // Anakin
const max = findMax(updatedTree).data.name; // Yoda
const grogu = findNodeAlpha(updatedTree, { name: 'Grogu' }).data.name; // Grogu
// Thanks to the compare function, the search will traverse like this:
// Lando -> Anakin -> Chewie -> Grogu
```

## Usage

### `toBinarySearchTree`

Converts the given array to a binary search tree, depending on a given compare function.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;
const tree = toBinarySearchTree(arr, compare);

// Schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50
```

---

### `addElement` & `makeAddElement`

`addElement` adds a given node to the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinarySearchTree` will of course f\*\*k up the tree.

A safer approach consists of using `makeAddElement`. It curries an `addElement` closure function with the given compare function.

```typescript
const modifiedTree = addElement(tree, compare, 11);

// Schema of "tree"     =>     "modifiedTree"
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

// Schema of "tree"     =>   "safelyModifiedTree"
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

// Schema of "tree"     =>   "modifiedTree"
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

// Schema of "tree"     =>   "safelyModifiedTree"
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

### `removeElement` & `makeRemoveElement`

`removeElement` removes a given node from the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinarySearchTree` will of course f\*\*k up the tree.

A safer approach consists of using `makeRemoveElement`. It curries an `removeElement` closure function with the given compare function.

```typescript
const modifiedTree = removeElement(tree, compare, 10);

// Schema of "tree"     =>     "modifiedTree"
//                      |
//       10             |            13
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \       \
//     5  13  89        |          5      89
//            /         |                /
//          50          |              50

const safeAndReusableRemoveElement = makeRemoveElement(compare);
const safelyModifiedTree = safeAndReusableRemoveElement(tree, 10);

// Schema of "tree"     =>   "safelyModifiedTree"
//                      |
//       10             |            13
//    /     \           |         /     \
//   2      32          |        2      32
//    \    /  \         |         \       \
//     5  13  89        |          5      89
//            /         |                /
//          50          |              50
```

---

### `removeElements` & `makeRemoveElements`

Same as `removeElements` & `makeRemoveElements`, but with an array of elements to remove.

```typescript
const modifiedTree = removeElements(tree, compare, [10, 13]);

// Schema of "tree"     =>   "modifiedTree"
//                      |
//       10             |             32
//    /     \           |          /     \
//   2      32          |         2      89
//    \    /  \         |          \     /
//     5  13  89        |           5  50
//            /         |
//          50          |

const safeAndReusableRemoveElements = makeRemoveElements(compare);
const safelyModifiedTree = safeAndReusableRemoveElements(tree, [10, 13]);

// Schema of "tree"     =>   "safelyModifiedTree"
//                      |
//       10             |             32
//    /     \           |          /     \
//   2      32          |         2      89
//    \    /  \         |          \     /
//     5  13  89        |           5  50
//            /         |
//          50          |
```

---

### `findNode` & `makeFindNode`

`findNode` finds a given node into the given binary search tree with the given compare function.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBinarySearchTree` will of course f\*\*k up the search.

A safer approach consists of using `makeFindNode`. It curries a `findNode` closure function with the given compare function.

```typescript
// Schema of "tree"
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
// Schema of "tree"
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

### `toArrayInOrder` & `toArrayInOrderReverse`

Converts the given binary search tree to an array, with the elements sorted from left to right (`toArrayInOrder`) or from right to left (`toArrayInOrderReverse`).

```typescript
// Schema of "tree"
//
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//           /
//         50

const elements = toArrayInOrder(tree); // [2, 5, 10, 13, 32, 50, 89]
const elements = toArrayInOrderReverse(tree); // [89, 50, 32, 13, 10, 5, 2]
```

---

### `traverseInOrder` & `traverseInOrderReverse`

Traverses a tree from left to right (`traverseInOrder`) or from right to left (`traverseInOrderReverse`), invoking the callback function on each visited node.

```typescript
// Schema of "tree"
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
traverseInOrder(collect(collection), tree);
// collection: [2, 5, 10, 13, 32, 50, 89]

const collection: number[] = [];
traverseInOrderReverse(collect(collection), tree);
// collection: [89, 50, 32, 13, 10, 5, 2]
```

---

### `isLeaf` & `isBranch`

Assesses if the given tree/node is a leaf (has no left nor right prop) (`isLeaf`) or a branch (has a left or a right prop or both) (`isBranch`).

```typescript
// Schema of "tree"
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
// Schema of "tree"
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
