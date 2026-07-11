import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { OverlayContext } from '@/app/overlay-context';
import SwapRequestDrawer from '@/features/swap/components/SwapRequestDrawer';
import UploadDrawer from '@/features/upload/components/UploadDrawer';

const AppProviders = ({ children }: { children: ReactNode }) => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [swapProductIndex, setSwapProductIndex] = useState<number | null>(null);

  const openUpload = useCallback(() => setUploadOpen(true), []);
  const openSwap = useCallback((productIndex = 0) => setSwapProductIndex(productIndex), []);
  const value = useMemo(() => ({ openUpload, openSwap }), [openSwap, openUpload]);

  return (
    <OverlayContext.Provider value={value}>
      {children}
      <UploadDrawer open={uploadOpen} onClose={() => setUploadOpen(false)} />
      <SwapRequestDrawer
        open={swapProductIndex !== null}
        productIndex={swapProductIndex ?? 0}
        onClose={() => setSwapProductIndex(null)}
      />
    </OverlayContext.Provider>
  );
};

export default AppProviders;
