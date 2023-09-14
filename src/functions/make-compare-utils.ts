import { CompareFunction } from '../types';
import { makeAdd } from './add';
import { makeBalance } from './balance';
import { makeFind } from './find';
import { makeFindGt } from './find-gt';
import { makeFindGte } from './find-gte';
import { makeFindLowestAncestor } from './find-lowest-ancestor';
import { makeFindLt } from './find-lt';
import { makeFindLte } from './find-lte';
import { makeGetDistanceBetweenNodes } from './get-distance-between-nodes';
import { makeRemove } from './remove';
import { makeToBST } from './to-binary-search-tree';

export function makeCompareUtils<T>(compare: CompareFunction<T>) {
    return {
        toBST                   : makeToBST(compare),
        add                     : makeAdd(compare),
        remove                  : makeRemove(compare),
        find                    : makeFind(compare),
        findLowestAncestor      : makeFindLowestAncestor(compare),
        getDistanceBetweenNodes : makeGetDistanceBetweenNodes(compare),
        findGt                  : makeFindGt(compare),
        findGte                 : makeFindGte(compare),
        findLt                  : makeFindLt(compare),
        findLte                 : makeFindLte(compare),
        balance                 : makeBalance(compare),
    };
}
