import { useState } from 'react';
import { IconProductLocation, IconProductProfile, IconProductSwap } from '@/assets/icons/product';
import { assets } from '@/constants/assets';
import { productCardMeta } from '@/constants/content';
import { cn } from '@/lib/cn';
import SideDrawer from './SideDrawer';

type SwapRequestDrawerProps = {
  open: boolean;
  productIndex: number;
  onClose: () => void;
};

const SwapItem = ({ index, selected, onSelect }: { index: number; selected?: boolean; onSelect?: () => void }) => {
  const product = productCardMeta[index % productCardMeta.length];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn('relative overflow-hidden rounded-xl border bg-white text-left transition', selected ? 'border-gold shadow-card' : 'border-line hover:border-gold/55')}
      aria-pressed={onSelect ? selected : undefined}
    >
      {onSelect && <span className={cn('absolute left-3 top-3 z-10 grid h-5 w-5 place-items-center rounded-full border bg-white text-[11px] font-bold', selected ? 'border-gold text-gold' : 'border-brown/25 text-transparent')}>✓</span>}
      <img src={assets.productItemJacket} alt={product.title} className="aspect-[1/1.05] w-full object-cover" />
      <div className="p-3">
        <p className="line-clamp-2 min-h-9 text-xs font-extrabold leading-snug text-brown">{product.title}</p>
        <div className="mt-3 flex gap-2 text-[10px]"><span className="rounded bg-cream px-2 py-1 font-bold">Size: {product.size}</span><span className="rounded bg-mist px-2 py-1 text-brown/35">{product.condition}</span></div>
        <div className="mt-3 flex justify-between text-[10px] text-brown/35"><span className="inline-flex items-center gap-1"><IconProductProfile className="h-3 w-3" />{product.owner}</span><span className="inline-flex items-center gap-1"><IconProductLocation className="h-3 w-3" />{product.location}</span></div>
      </div>
    </button>
  );
};

const SwapRequestDrawer = ({ open, productIndex, onClose }: SwapRequestDrawerProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([0]);

  const closeDrawer = () => {
    setSelectedItems([0]);
    onClose();
  };

  const toggleItem = (index: number) => {
    setSelectedItems((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index]);
  };

  return (
    <SideDrawer open={open} onClose={closeDrawer} title="Request Tukar Pakaianmu">
      <div className="border-b border-line px-6 pb-5 pt-7 pr-20 sm:px-8 sm:pr-20">
        <p className="text-xs font-extrabold uppercase text-gold">Request Swap</p>
        <h2 className="mt-2 font-display text-3xl font-normal text-brown">Request Tukar Pakaianmu</h2>
        <p className="mt-2 text-sm leading-6 text-brown/55">Kamu tertarik dengan item ini? Pilih koleksimu untuk mengajukan swap.</p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-6 sm:px-8">
          <section className="py-7">
            <h3 className="text-base font-extrabold text-brown">Item yang kamu inginkan</h3>
            <p className="mt-2 text-sm italic leading-6 text-brown/40">Pembayaran admin fee hanya dilakukan jika pemilik item menyetujui request-mu.</p>
            <div className="mt-6 max-w-[250px]"><SwapItem index={productIndex} /></div>
          </section>

          <section className="border-t border-line py-7">
            <h3 className="text-base font-extrabold text-brown">Pilih pakaian untuk ditukar</h3>
            <p className="mt-2 text-sm text-brown/45">Kamu dapat memilih beberapa item untuk diajukan.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => <SwapItem key={index} index={index} selected={selectedItems.includes(index)} onSelect={() => toggleItem(index)} />)}
            </div>
          </section>
      </div>

      <div className="flex gap-3 border-t border-line bg-white px-6 py-5 sm:justify-end sm:px-8">
        <button type="button" onClick={closeDrawer} className="min-h-12 flex-1 rounded-full border border-gold px-7 font-bold text-gold sm:flex-none">Batal</button>
        <button type="button" onClick={closeDrawer} disabled={selectedItems.length === 0} className="inline-flex min-h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-brown px-8 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"><IconProductSwap className="h-5 w-5" />Ajukan Tukar</button>
      </div>
    </SideDrawer>
  );
};

export default SwapRequestDrawer;
