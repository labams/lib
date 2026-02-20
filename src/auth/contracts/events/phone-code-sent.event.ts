import { IBaseEventContract } from '../../../contracts/events/base.event';

type ReqType = {
    phone: {
        national: string;
        countryCode: string;
        isoCode: string;
    };
    code: string;
};

export class AuthPhoneCodeSentEventContract implements IBaseEventContract<ReqType> {
    static readonly pattern = 'auth.phone.code.sent';
    readonly pattern = AuthPhoneCodeSentEventContract.pattern;
    readonly data: ReqType;
}
