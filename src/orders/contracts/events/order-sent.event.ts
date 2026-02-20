import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface OrderSentData {
    order_id: string;
    lab_id: string;
}

export class OrderSentEventContract implements IBaseEventContract<OrderSentData> {
    static readonly pattern = 'order.sent';
    readonly pattern = OrderSentEventContract.pattern;
    readonly data: OrderSentData;
}
