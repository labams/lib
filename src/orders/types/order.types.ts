/**
 * Статус заказа
 */
export enum OrderStatus {
    DRAFT = 'DRAFT',
    SENT = 'SENT',
    RECEIVED = 'RECEIVED',
    IN_PROGRESS = 'IN_PROGRESS',
    READY_FOR_SHIPMENT = 'READY_FOR_SHIPMENT',
    COMPLETED = 'COMPLETED',
    REJECTED = 'REJECTED',
    RATED = 'RATED',
}

/**
 * Срочность заказа
 */
export enum Urgency {
    NORMAL = 'NORMAL',
    URGENT = 'URGENT',
}

/**
 * Тип файла
 */
export enum FileType {
    REQUIRED = 'REQUIRED',
    OPTIONAL = 'OPTIONAL',
}

/**
 * Допустимые переходы статусов заказа
 */
export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
    [OrderStatus.DRAFT]: [OrderStatus.SENT],
    [OrderStatus.SENT]: [OrderStatus.RECEIVED, OrderStatus.REJECTED],
    [OrderStatus.RECEIVED]: [OrderStatus.IN_PROGRESS, OrderStatus.REJECTED],
    [OrderStatus.IN_PROGRESS]: [
        OrderStatus.READY_FOR_SHIPMENT,
        OrderStatus.REJECTED,
    ],
    [OrderStatus.READY_FOR_SHIPMENT]: [OrderStatus.COMPLETED],
    [OrderStatus.COMPLETED]: [OrderStatus.RATED],
    [OrderStatus.REJECTED]: [],
    [OrderStatus.RATED]: [],
};

/**
 * Статусы, допустимые для позиции заказа
 */
export const ORDER_ITEM_STATUSES = [
    OrderStatus.IN_PROGRESS,
    OrderStatus.READY_FOR_SHIPMENT,
    OrderStatus.COMPLETED,
    OrderStatus.REJECTED,
] as const;

export type OrderItemStatus = (typeof ORDER_ITEM_STATUSES)[number];

/**
 * Заказ (domain model)
 */
export interface IOrder {
    id: string;
    clinic_id: string;
    doctor_id: string;
    patient_id: string | null;
    lab_id: string;
    technician_id: string | null;
    status: OrderStatus;
    urgency: Urgency;
    delivery_address: string | null;
    total_cost: string | null;
    rejection_reason: string | null;
    quality_rating: number | null;
    overall_comment: string | null;
    created_at: string;
    updated_at: string;
}

/**
 * Позиция заказа (domain model)
 */
export interface IOrderItem {
    id: string;
    order_id: string;
    position_number: number;
    construction_type_id: string;
    material_id: string | null;
    color_id: string | null;
    jaw_id: string | null;
    implant_system: string | null;
    teeth_numbers: number[];
    units_count: number;
    unit_price: string;
    total_price: string;
    fixation_type: string | null;
    description: string | null;
    status: OrderStatus | null;
    rejection_reason: string | null;
    created_at: string;
    updated_at: string;
}

/**
 * Файл заказа (domain model)
 */
export interface IOrderFile {
    id: string;
    order_id: string;
    order_item_id: string | null;
    file_id: string;
    type: FileType;
    uploaded_at: string;
}

/**
 * Запись истории заказа (domain model)
 */
export interface IOrderHistory {
    id: string;
    order_id: string;
    order_item_id: string | null;
    status_from: OrderStatus;
    status_to: OrderStatus;
    changed_by: string;
    comment: string | null;
    timestamp: string;
}
