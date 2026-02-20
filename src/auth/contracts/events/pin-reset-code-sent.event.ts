import { IBaseEventContract } from '../../../contracts/events/base.event';

type ReqType = {
    phone: {
        national: string;
        countryCode: string;
        isoCode: string;
    };
    smsCode: string;
};

export class AuthPinResetCodeSentEventContract implements IBaseEventContract<ReqType> {
    static readonly pattern = 'auth.pin.reset.code.sent';
    readonly pattern = AuthPinResetCodeSentEventContract.pattern;
    readonly data: ReqType;
}
