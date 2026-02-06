// WebSocket Room Decorator - извлечение room_id из события
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const WsRoom = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const eventData = ctx.switchToWs().getData();
    
    if (!eventData || !eventData.room_id) {
      throw new Error('room_id not found in event data');
    }

    return eventData.room_id;
  },
);
