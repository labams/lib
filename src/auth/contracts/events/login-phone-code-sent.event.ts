import { IBaseEventContract } from '../../../contracts/events/base.event';

type ReqType = {
    phone: {
        national: string;
        countryCode: string;
        isoCode: string;
    };
    code: string;
};

export class AuthLoginPhoneCodeSentEventContract implements IBaseEventContract<ReqType> {
    static readonly pattern = 'auth.login.phone.code.sent';
    readonly pattern = AuthLoginPhoneCodeSentEventContract.pattern;
    readonly data: ReqType;
}
