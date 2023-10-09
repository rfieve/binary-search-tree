import { BST } from '../types';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50],
             mockedArrayInOrder = mockedArray.slice().sort((a, b) => a - b),
             mockedArrayInOrderReversed = mockedArrayInOrder.slice().reverse(),
             mockedArrayPreOrder = [10, 2, 5, 32, 13, 89, 50],
             mockedArrayPreOrderReverse = [10, 32, 89, 50, 13, 2, 5],
             mockedArrayPostOrder = [5, 2, 13, 50, 89, 32, 10],
             mockedArrayPostOrderReverse = [50, 89, 13, 32, 5, 2, 10],
             mockedArrayLevelOrder = [10, 2, 32, 5, 13, 89, 50],
             mockedArrayLevelOrderReverse = [10, 32, 2, 89, 13, 5, 50];
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//            /
//          50

export const mockedUnbalancedTree: BST<number> = {
    data : [10],
    left : {
        data  : [2],
        right : {
            data : [5],
        },
    },
    right : {
        data : [32],
        left : {
            data : [13],
        },
        right : {
            data : [89],
            left : {
                data : [50],
            },
        },
    },
};

export const mockedBalancedTree: BST<number> = {
    data : [13],
    left : {
        data : [5],
        left : {
            data : [2],
        },
        right : {
            data : [10],
        },
    },
    right : {
        data : [50],
        left : {
            data : [32],
        },
        right : {
            data : [89],
        },
    },
};

export const mockedLeaf = mockedUnbalancedTree.left?.right as BST<number>,
             mockedStrictLeftLeaf = mockedUnbalancedTree?.right?.right as BST<number>,
             mockedStrictRightLeaf = mockedUnbalancedTree.left as BST<number>;
