import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Marks a route as publicly accessible (no authentication required).
 * Used together with guards like OptionalAuthGuard that attempt
 * authentication but do not reject unauthenticated requests.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
