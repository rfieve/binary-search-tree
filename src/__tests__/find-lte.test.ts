import { compare, mockedUnbalancedTree } from './_mocks'
import { findLte, makeFindLte } from '../functions/find-lte'

describe('findLte', () => {
    it('should findLte all nodes which are lesser or equal than the element', () => {
        const results = findLte(mockedUnbalancedTree, compare, 13),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([10, 2, 5, 13])
    })

    it('should not findLte a node in an empty tree', () => {
        const results = findLte({ data: [] }, compare, 13),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})

describe('makeFindLte', () => {
    const boundFindLte = makeFindLte(compare)

    it('should findLte all nodes which are lesser or equal than the element', () => {
        const results = boundFindLte(mockedUnbalancedTree, 13),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([10, 2, 5, 13])
    })

    it('should not findLte a node in an empty tree', () => {
        const results = boundFindLte({ data: [] }, 13),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})
