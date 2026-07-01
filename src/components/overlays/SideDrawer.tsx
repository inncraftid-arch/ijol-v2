import { useEffect, type ReactNode } from 'react';

type SideDrawerProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const SideDrawer = ({ open, title, onClose, children }: SideDrawerProps) => {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button type="button" className="absolute inset-0 bg-ink/55 backdrop-blur-[1px]" onClick={onClose} aria-label={`Tutup ${title}`} />
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="animate-drawer-in absolute bottom-0 right-0 top-0 flex w-full max-w-[720px] flex-col bg-white shadow-[-20px_0_55px_rgba(36,26,17,0.2)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-2xl leading-none text-brown transition hover:border-gold hover:text-gold"
          aria-label={`Tutup ${title}`}
        >
          ×
        </button>
        {children}
      </section>
    </div>
  );
};

export default SideDrawer;
