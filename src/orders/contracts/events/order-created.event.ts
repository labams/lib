import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface OrderCreatedData {
    order_id: string;
    clinic_id: string;
    doctor_id: string;
    lab_id: string;
    patient_id?: string;
}

export class OrderCreatedEventContract implements IBaseEventContract<OrderCreatedData> {
    static readonly pattern = 'order.created';
    readonly pattern = OrderCreatedEventContract.pattern;
    readonly data: OrderCreatedData;
}
