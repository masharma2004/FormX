import type { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  /** Tailwind max-width class for the panel, e.g. "max-w-lg" (default) or "max-w-3xl" */
  maxWidthClassName?: string;
}

/**
 * Accessible modal built on Radix Dialog: traps focus, closes on Escape,
 * closes on outside click, and restores focus to the trigger on close.
 * Use this instead of hand-rolled `fixed inset-0` overlays.
 */
export function Modal({
  open,
  onClose,
  title,
  icon,
  children,
  footer,
  maxWidthClassName = 'max-w-lg',
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 transition-opacity" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 p-4 focus:outline-none"
          style={{ maxWidth: undefined }}
        >
          <div
            className={`mx-auto w-full ${maxWidthClassName} max-h-[90vh] flex flex-col rounded-lg bg-white shadow-xl`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 flex-shrink-0">
              <Dialog.Title className="flex items-center gap-2 text-lg font-bold text-gray-900">
                {icon}
                {title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

            <div className="flex-1 overflow-y-auto">{children}</div>

            {footer && (
              <div className="flex flex-shrink-0 justify-end gap-3 border-t border-gray-200 px-6 py-4">
                {footer}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
