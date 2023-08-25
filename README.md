# ✌️🔍🌳 binary-search-tree

A bunch of TypeScript utility functions to work with binary search trees and arrays of any types, with a functional-programming and immutable approach.

## Table of Content

-   [✌️🔍🌳 binary-search-tree](#️-binary-search-tree)
    -   [Table of Content](#table-of-content)
    -   [Example](#example)
    -   [Usage](#usage)
        -   [`toBST` \& `toBalancedBST`](#tobst--tobalancedbst)
        -   [`balance`](#balance)
        -   [`add`](#add)
        -   [`remove`](#remove)
        -   [`find`](#find)
        -   [`findMin` \& `findMax`](#findmin--findmax)
        -   [`toArrayInOrder` \& `toArrayInOrderReverse`](#toarrayinorder--toarrayinorderreverse)
        -   [`traverseInOrder` \& `traverseInOrderReverse`](#traverseinorder--traverseinorderreverse)
        -   [`isLeaf` \& `isBranch`](#isleaf--isbranch)
        -   [`hasLeft` \& `hasRight`](#hasleft--hasright)
        -   [The infamous `BinarySearchTree` class](#the-infamous-binarysearchtree-class)

## Example

```typescript
type Hero = { name: string };

const compareAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name);

const addAlpha = makeAdd(compareAlpha);
const removeAlpha = makeRemove(compareAlpha);
const findAlpha = makeFind(compareAlpha);

const heroes: Hero[] = [
    { name: 'Han' },
    { name: 'Anakin' },
    { name: 'Leia' },
    { name: 'Luke' },
    { name: 'Padme' },
    { name: 'Lando' },
    { name: 'Chewie' },
];
const tree = toBST(heroes, compareAlpha);

const updatedTree = pipe(
    (t) => addAlpha(t, { name: 'Yoda' }),
    (t) => addAlpha(t, { name: 'Obiwan' }),
    (t) => addAlpha(t, [{ name: 'Boba' }, { name: 'Grogu' }]),
    (t) => removeAlpha(t, [{ name: 'Han' }, { name: 'Padme' }]),
    (t) => removeAlpha(t, { name: 'Luke' })
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
const grogu = findAlpha(updatedTree, { name: 'Grogu' }).data.name; // Grogu
// Thanks to the compare function, the search will traverse like this:
// Lando -> Anakin -> Chewie -> Grogu
```

## Usage

### `toBST` & `toBalancedBST`

Converts the given array to a binary search tree (`toBST`) or a balanced binary search tree(`toBalancedBST`), depending on a given compare function.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;
const tree = toBST(arr, compare);
const balancedTree = toBalancedBST(arr, compare);

// Schema of "tree"     |     "balancedTree"
//                      |
//       10             |            13
//    /     \           |         /     \
//   2      32          |        5      50
//    \    /  \         |      /  \    /  \
//     5  13  89        |     2   10  32   89
//            /         |
//          50          |
```

---

### `balance`

`balance` balances the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBST` will of course f\*\*k up the tree. A safer approach consists of using `makeBalance`. It curries a `balance` closure function with the given compare function.

```typescript
const balancedTree = balance(tree, compare);
// or
const safeBalance = makeBalance(compare);
const balancedTree = safeBalance(tree);

// Schema of "tree"     =>    "balancedTree"
//                      |
//       10             |            13
//    /     \           |         /     \
//   2      32          |        5      50
//    \    /  \         |      /  \    /  \
//     5  13  89        |     2   10  32   89
//            /         |
//          50          |
```

---

### `add`

`add` adds a (or list of) given node(s) to the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBST` will of course f\*\*k up the tree. A safer approach consists of using `makeAdd`. It curries an `add` closure function with the given compare function.

```typescript
const modifiedTree = add(tree, compare, 11);
const reModifiedTree = add(modifiedTree, compare, [1, 100]);
//or
const safeAdd = makeAdd(compare);
const modifiedTree = safeAdd(tree, 11);
const reModifiedTree = safeAdd(modifiedTree, [1, 100]);

// Schema of "tree"     =>     "modifiedTree"      =>   "reModifiedTree"
//                      |                          |
//       10             |            10            |            10
//    /     \           |         /     \          |         /     \
//   2      32          |        2      32         |        2      32
//    \    /  \         |         \    /  \        |      /  \    /  \
//     5  13  89        |          5  13  89       |     1    5  13  89
//            /         |            /   /         |            /   /  \
//          50          |           11  50         |           11  50   100
```

---

### `remove`

`remove` removes a (or list of) given node(s) from the given binary search tree with the given compare function and returns a new tree, without modifing the original tree in place.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBST` will of course f\*\*k up the tree. A safer approach consists of using `makeRemove`. It curries a `remove` closure function with the given compare function.

```typescript
const modifiedTree = remove(tree, compare, 10);
const reModifiedTree = remove(modifiedTree, compare, [13, 5]);
// or
const safeRemove = makeRemove(compare);
const modifiedTree = safeRemove(tree, 10);
const reModifiedTree = safeRemove(modifiedTree, [13, 5]);

// Schema of "tree"     =>     "modifiedTree"      =>   "reModifiedTree"
//                      |                          |
//       10             |            13            |             32
//    /     \           |         /     \          |          /     \
//   2      32          |        2      32         |         2      89
//    \    /  \         |         \       \        |                /
//     5  13  89        |          5      89       |              50
//            /         |                /         |
//          50          |              50          |
```

---

### `find`

`find` finds a given node into the given binary search tree with the given compare function.

⚠️ Caveats: using another compare function than the one used to create the tree with `toBST` will of course f\*\*k up the search. A safer approach consists of using `makeFind`. It curries a `find` closure function with the given compare function.

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

const element = find(tree, compare, 13).data; // 13
// or
const safeFind = makeFind(compare);
const element = safeFind(tree, 13).data; // 13
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
const elementsReversed = toArrayInOrderReverse(tree); // [89, 50, 32, 13, 10, 5, 2]
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

const elements: number[] = [];
traverseInOrder(collect(elements), tree);
// elements: [2, 5, 10, 13, 32, 50, 89]

const elementsReversed: number[] = [];
traverseInOrderReverse(collect(elementsReversed), tree);
// elementsReversed: [89, 50, 32, 13, 10, 5, 2]
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

const isLeafA = isLeaf(tree.left.left); // true
const isLeafB = isLeaf(tree); // false

const isBranchA = isBranch(tree); // true
const isBranchB = isBranch(tree.left.left); // false
```

---

### `hasLeft` & `hasRight`

Assesses if the given tree/node has a left branch (has a left prop) (`hasLeft`) or a right branch (has a right prop) (`hasRight`).

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

const hasLeftA = hasLeft(tree); // true
const hasLeftB = hasLeft(tree.left); // false

const hasRightA = hasRight(tree); // true
const hasRightB = hasRight(tree.left.left); // false
```

---

---

---

### The infamous `BinarySearchTree` class

While diverging from the functional approach, the `BinarySearchTree` class offers many advantages, depending on the situation:

-   natural chaining
-   tree state
-   compare function encapsulation
-   has all methods listed functions before

Let's rewrite the Star Wars example with this approach:

```typescript
type Hero = { name: string };

const compareAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name);

const heroes: Hero[] = [
    { name: 'Han' },
    { name: 'Anakin' },
    { name: 'Leia' },
    { name: 'Luke' },
    { name: 'Padme' },
    { name: 'Lando' },
    { name: 'Chewie' },
];

const bst = new BinarySearchTree(heroes, compareAlpha);
// Schema of bst.tree
//
//             Han
//           /     \
//     Anakin       Leia
//           \     /    \
//       Chewie  Lando   Luke
//                         \
//                        Padme

bst.add({ name: 'Yoda' })
    .add({ name: 'Obiwan' })
    .add([{ name: 'Boba' }, { name: 'Grogu' }])
    .remove([{ name: 'Han' }, { name: 'Padme' }])
    .remove({ name: 'Luke' });

// Schema of bst.tree, after update
//
//            Lando
//           /     \
//     Anakin       Leia
//         \            \
//       Chewie        Obiwan
//        /    \            \
//      Boba  Grogu        Yoda

bst.findMin().data.name; // Anakin
bst.findMax().data.name; // Yoda
bst.find({ name: 'Grogu' }).data.name; // Grogu
// Thanks to the compare function, the search will traverse like this:
// Lando -> Anakin -> Chewie -> Grogu
```
