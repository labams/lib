import { IBaseRpcContract } from './base.rpc';

type ReqType = {
    a: number;
    b: number;
};

type ResType = {
    x: string;
    y: string;
};

export class DoSomethingRpcContract implements IBaseRpcContract<
    ReqType,
    ResType
> {
    static readonly cmd = 'do.something';
    readonly cmd = DoSomethingRpcContract.cmd;
    readonly data: ReqType;
    readonly response: ResType;
}
