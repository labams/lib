import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface OrderStatusChangedData {
    order_id: string;
    item_id?: string;
    new_status: string;
    changed_by: string;
}

export class OrderStatusChangedEventContract implements IBaseEventContract<OrderStatusChangedData> {
    static readonly pattern = 'order.status_changed';
    readonly pattern = OrderStatusChangedEventContract.pattern;
    readonly data: OrderStatusChangedData;
}
