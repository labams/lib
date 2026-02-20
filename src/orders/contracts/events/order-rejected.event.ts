import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface OrderRejectedData {
    order_id: string;
    item_id?: string;
    reason: string;
}

export class OrderRejectedEventContract implements IBaseEventContract<OrderRejectedData> {
    static readonly pattern = 'order.rejected';
    readonly pattern = OrderRejectedEventContract.pattern;
    readonly data: OrderRejectedData;
}
