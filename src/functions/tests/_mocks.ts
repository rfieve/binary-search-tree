import { BinaryTree } from 'src/types';

export function compareFunction(a: number, b: number) {
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

export const mockedTree: BinaryTree<number> = {
    data : 10,
    min  : {
        data : 2,
        max  : {
            data : 5,
        },
    },
    max : {
        data : 32,
        min  : {
            data : 13,
        },
        max : {
            data : 89,
            min  : {
                data : 50,
            },
        },
    },
};

export const mockedLeaf = (mockedTree.min as BinaryTree<number>).max;
export const mockedStrictMinLeaf = (mockedTree.max as BinaryTree<number>).max;
export const mockedStrictMaxLeaf = mockedTree.min;
