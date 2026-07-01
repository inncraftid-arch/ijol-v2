import { createContext, useContext } from 'react';

export type OverlayContextValue = {
  openUpload: () => void;
  openSwap: (productIndex?: number) => void;
};

export const OverlayContext = createContext<OverlayContextValue | null>(null);

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlay must be used inside OverlayProvider');
  }

  return context;
};
