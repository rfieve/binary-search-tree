import { BST } from 'src/types';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50];
export const mockedArrayInOrder = mockedArray.slice().sort((a, b) => a - b);
export const mockedArrayInOrderReversed = mockedArrayInOrder.slice().reverse();
export const mockedArrayPreOrder = [10, 2, 5, 32, 13, 89, 50];
export const mockedArrayPreOrderReverse = [10, 32, 89, 50, 13, 2, 5];
export const mockedArrayPostOrder = [5, 2, 13, 50, 89, 32, 10];
export const mockedArrayPostOrderReverse = [50, 89, 13, 32, 5, 2, 10];
export const mockedArrayLevelOrder = [10, 2, 32, 5, 13, 89, 50];
export const mockedArrayLevelOrderReverse = [10, 32, 2, 89, 13, 5, 50];
//       10
//    /     \
//   2      32
//    \    /  \
//     5  13  89
//            /
//          50

export const mockedUnbalancedTree: BST<number> = {
    data : 10,
    left : {
        data  : 2,
        right : {
            data : 5,
        },
    },
    right : {
        data : 32,
        left : {
            data : 13,
        },
        right : {
            data : 89,
            left : {
                data : 50,
            },
        },
    },
};

export const mockedBalancedTree: BST<number> = {
    data : 13,
    left : {
        data : 5,
        left : {
            data : 2,
        },
        right : {
            data : 10,
        },
    },
    right : {
        data : 50,
        left : {
            data : 32,
        },
        right : {
            data : 89,
        },
    },
};

export const mockedLeaf = (mockedUnbalancedTree.left as BST<number>).right;
export const mockedStrictLeftLeaf = (mockedUnbalancedTree.right as BST<number>).right;
export const mockedStrictRightLeaf = mockedUnbalancedTree.left;
