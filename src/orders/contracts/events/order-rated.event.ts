import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface OrderRatedData {
    order_id: string;
    rating: number;
}

export class OrderRatedEventContract implements IBaseEventContract<OrderRatedData> {
    static readonly pattern = 'order.rated';
    readonly pattern = OrderRatedEventContract.pattern;
    readonly data: OrderRatedData;
}
