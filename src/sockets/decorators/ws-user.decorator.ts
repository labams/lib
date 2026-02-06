// WebSocket User Decorator - извлечение user из JwtPayload в WebSocket handler
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../../types/jwt-payload.type';

export const WsUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext): JwtPayload | string => {
    const client = ctx.switchToWs().getClient();
    const user = client.user as JwtPayload;

    if (!user) {
      throw new Error('User not found in socket context');
    }

    return data ? user[data] : user;
  },
);
