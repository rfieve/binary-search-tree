import {
    toArrayInOrder,
    toArrayInOrderReverse,
    toArrayLevelOrder,
    toArrayLevelOrderReverse,
    toArrayPostOrder,
    toArrayPostOrderReverse,
    toArrayPreOrder,
    toArrayPreOrderReverse,
} from '../functions/to-array'
import {
    mockedArrayInOrder,
    mockedArrayInOrderReversed,
    mockedArrayLevelOrder,
    mockedArrayLevelOrderReverse,
    mockedArrayPostOrder,
    mockedArrayPostOrderReverse,
    mockedArrayPreOrder,
    mockedArrayPreOrderReverse,
    mockedUnbalancedTree,
} from './_mocks'

describe('toArrayInOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrder(mockedUnbalancedTree)).toEqual(mockedArrayInOrder)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayInOrder({ data: [] })).toEqual([])
    })
})

describe('toArrayInOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayInOrderReversed)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayInOrderReverse({ data: [] })).toEqual([])
    })
})

describe('toArrayPreOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPreOrder(mockedUnbalancedTree)).toEqual(mockedArrayPreOrder)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayPreOrder({ data: [] })).toEqual([])
    })
})

describe('toArrayPreOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPreOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayPreOrderReverse)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayPreOrderReverse({ data: [] })).toEqual([])
    })
})

describe('toArrayPostOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPostOrder(mockedUnbalancedTree)).toEqual(mockedArrayPostOrder)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayPostOrder({ data: [] })).toEqual([])
    })
})

describe('toArrayPostOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPostOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayPostOrderReverse)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayPostOrderReverse({ data: [] })).toEqual([])
    })
})

describe('toArrayLevelOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayLevelOrder(mockedUnbalancedTree)).toEqual(mockedArrayLevelOrder)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayLevelOrder({ data: [] })).toEqual([])
    })
})

describe('toArrayLevelOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayLevelOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayLevelOrderReverse)
    })

    it('should convert an empty binary search tree to an array correctly', () => {
        expect(toArrayLevelOrderReverse({ data: [] })).toEqual([])
    })
})
