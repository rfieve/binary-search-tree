import { compare, mockedUnbalancedTree } from './_mocks'
import { findGt, makeFindGt } from '../functions/find-gt'

describe('findGt', () => {
    it('should findGt all nodes which are greater than the element', () => {
        const results = findGt(mockedUnbalancedTree, compare, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([32, 13, 89, 50])
    })

    it('should not findGt a node in an empty tree', () => {
        const results = findGt({ data: [] }, compare, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})

describe('makeFindGt', () => {
    const boundFindGt = makeFindGt(compare)

    it('should findGt all nodes which are greater than the element', () => {
        const results = boundFindGt(mockedUnbalancedTree, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([32, 13, 89, 50])
    })

    it('should not findGt a node in an empty tree', () => {
        const results = boundFindGt({ data: [] }, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})
