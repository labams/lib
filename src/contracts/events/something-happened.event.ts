import { IBaseEventContract } from './base.event.';

type ReqType = {
    a: string;
    b: string;
};

export class SomethingHappenedEventContract implements IBaseEventContract<ReqType> {
    static readonly pattern = 'something.happened';
    readonly pattern = SomethingHappenedEventContract.pattern;
    readonly data: ReqType;
}
