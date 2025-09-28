import type { ReactNode } from 'react';
import { useAuthStore } from '../../stores/authStore';

interface PublicRouteProps {
  children: ReactNode;
}

/**
 * Wraps routes that don't require authentication (login, register, password
 * reset, public form links). It does not force a redirect when already
 * authenticated — pages that only make sense for logged-out users (e.g.
 * Login/Register) handle that redirect themselves, so this guard stays
 * usable for genuinely public routes like `/f/:formId` as well.
 */
export function PublicRoute({ children }: PublicRouteProps) {
  const hasHydrated = useAuthStore((state) => state._hasHydrated);

  if (!hasHydrated) {
    return null;
  }

  return <>{children}</>;
}

export default PublicRoute;
