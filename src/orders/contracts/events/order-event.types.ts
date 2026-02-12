import type { OrderCreatedData } from './order-created.event';
import type { OrderSentData } from './order-sent.event';
import type { OrderStatusChangedData } from './order-status-changed.event';
import type { OrderItemAddedData } from './order-item-added.event';
import type { OrderRatedData } from './order-rated.event';
import type { OrderRejectedData } from './order-rejected.event';

/**
 * Routing keys для событий заказов
 */
export enum OrderEventRoutingKey {
    CREATED = 'order.created',
    SENT = 'order.sent',
    STATUS_CHANGED = 'order.status_changed',
    ITEM_ADDED = 'order.item_added',
    RATED = 'order.rated',
    REJECTED = 'order.rejected',
}

/**
 * Union type для всех событий заказов
 */
export type OrderEventData =
    | OrderCreatedData
    | OrderSentData
    | OrderStatusChangedData
    | OrderItemAddedData
    | OrderRatedData
    | OrderRejectedData;
