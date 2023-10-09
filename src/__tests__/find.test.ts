import { find, makeFind } from '../functions/find'
import { compare, mockedUnbalancedTree } from './_mocks'

describe('find', () => {
    it('should not find a node which is not into the tree', () => {
        const node = find(mockedUnbalancedTree, compare, 11)?.node
        expect(node?.data[0]).toBeUndefined()
    })

    it('should not find a node in an empty tree', () => {
        const node = find({ data: [] }, compare, 0)?.node
        expect(node?.data[0]).toBeUndefined()
    })

    it('should find a random node into the tree at the correct position', () => {
        const result = find(mockedUnbalancedTree, compare, 89)
        expect(result?.path).toEqual(['right', 'right'])
        expect(result?.node?.data[0]).toBe(89)
    })

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = find(mockedUnbalancedTree, compare, 2)?.node
        expect(node?.data[0]).toBe(2)
    })

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = find(mockedUnbalancedTree, compare, 50)?.node
        expect(node?.data[0]).toBe(50)
    })
})

describe('makeFind', () => {
    const boundFind = makeFind(compare)

    it('should not find a node which is not into the tree', () => {
        const node = boundFind(mockedUnbalancedTree, 11)?.node
        expect(node?.data[0]).toBeUndefined()
    })

    it('should not find a node in an empty tree', () => {
        const node = boundFind({ data: [] }, 0)?.node
        expect(node?.data[0]).toBeUndefined()
    })

    it('should find a random node into the tree at the correct position', () => {
        const result = boundFind(mockedUnbalancedTree, 89)
        expect(result?.path).toEqual(['right', 'right'])
        expect(result?.node?.data[0]).toBe(89)
    })

    it('should find a left node into the tree at the correct left-side position', () => {
        const node = boundFind(mockedUnbalancedTree, 2)?.node
        expect(node?.data[0]).toBe(2)
    })

    it('should find a right node into the tree at the correct right-side position', () => {
        const node = boundFind(mockedUnbalancedTree, 50)?.node
        expect(node?.data[0]).toBe(50)
    })
})
