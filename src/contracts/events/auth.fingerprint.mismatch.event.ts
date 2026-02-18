import { IBaseEventContract } from './base.event.';

type ReqType = {
    userId: string;
    ipv4: string;
    browserId: string;
};

export class AuthFingerprintMismatchEventContract implements IBaseEventContract<ReqType> {
    static readonly pattern = 'auth.fingerprint.mismatch';
    readonly pattern = AuthFingerprintMismatchEventContract.pattern;
    readonly data: ReqType;
}
