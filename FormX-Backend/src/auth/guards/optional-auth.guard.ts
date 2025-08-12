import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Attempts JWT authentication but never rejects the request when
 * a token is missing or invalid - it just leaves `request.user`
 * undefined so downstream handlers can treat the caller as anonymous.
 * Used for endpoints (e.g. public form submission) that behave
 * differently for authenticated vs anonymous users.
 */
@Injectable()
export class OptionalAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = unknown>(_err: unknown, user: unknown): TUser {
    return (user || undefined) as TUser;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      await super.canActivate(context);
    } catch {
      // Ignore authentication errors - treat request as anonymous
    }
    return true;
  }
}
