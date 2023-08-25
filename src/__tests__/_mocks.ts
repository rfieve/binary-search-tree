import { BST } from 'src/types';

export function compare(a: number, b: number) {
    return a - b;
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50];
export const mockedArrayOrdered = mockedArray.slice().sort((a, b) => a - b);
export const mockedArrayReversed = mockedArrayOrdered.slice().reverse();

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
