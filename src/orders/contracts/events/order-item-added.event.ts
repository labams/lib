import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface OrderItemAddedData {
    order_id: string;
    item_id: string;
    construction_type: string;
}

export class OrderItemAddedEventContract implements IBaseEventContract<OrderItemAddedData> {
    static readonly pattern = 'order.item_added';
    readonly pattern = OrderItemAddedEventContract.pattern;
    readonly data: OrderItemAddedData;
}
