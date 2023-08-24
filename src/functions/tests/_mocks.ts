import { BinarySearchTree } from 'src/types';

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

export const mockedTree: BinarySearchTree<number> = {
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

export const mockedLeaf = (mockedTree.left as BinarySearchTree<number>).right;
export const mockedStrictLeftLeaf = (mockedTree.right as BinarySearchTree<number>).right;
export const mockedStrictRightLeaf = mockedTree.left;
