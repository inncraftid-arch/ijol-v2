import { Link, useSearchParams } from 'react-router-dom';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { IconProductProfile, IconProductSwap } from '@/assets/icons/product';
import Container from '@/components/common/Container';
import { assets } from '@/constants/assets';
import { productCardMeta } from '@/constants/content';
import { cn } from '@/lib/cn';

type SwapTab = 'mine' | 'request';

const statusStyles = {
  'Waiting Confirmation': 'bg-[#EEF5FF] text-[#7294C5]',
  Completed: 'bg-[#EAF7EE] text-green',
  Failed: 'bg-[#FFF0EE] text-coral',
} as const;

const MiniProduct = ({ index }: { index: number }) => {
  const product = productCardMeta[index % productCardMeta.length];

  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-line bg-white">
      <div className="relative">
        <img src={assets.productItemJacket} alt={product.title} className="aspect-[1/1.08] w-full object-cover" />
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-green px-2 py-1 text-[8px] font-extrabold text-white"><IconHeroLeaf className="h-2.5 w-2.5" />Saves {product.carbon} kg CO₂</span>
        <div className="absolute right-2 top-2 flex gap-1"><span className="rounded-full bg-white/90 px-2 py-1 text-[7px] font-bold text-brown/60">{product.code}</span><span className="rounded-full bg-white/90 px-2 py-1 text-[7px] font-bold text-gold">{product.brand}</span></div>
      </div>
      <div className="p-2.5">
        <p className="line-clamp-2 min-h-8 text-[11px] font-extrabold leading-snug text-brown">{product.title}</p>
        <div className="mt-2 flex gap-1.5 text-[8px]"><span className="rounded bg-cream px-1.5 py-1 font-bold">Size: {product.size}</span><span className="rounded bg-mist px-1.5 py-1 text-brown/35">{product.condition}</span></div>
        <span className="mt-2 inline-flex items-center gap-1 text-[9px] text-brown/35"><IconProductProfile className="h-3 w-3" />{product.owner}</span>
      </div>
    </div>
  );
};

const SwapPairCard = ({ index, tab, status }: { index: number; tab: SwapTab; status: keyof typeof statusStyles }) => (
  <article className="rounded-xl border border-line bg-white p-3 shadow-sm">
    <div className="mb-3 flex items-center justify-between gap-3 text-[10px]">
      {tab === 'mine' ? <span className={cn('rounded-full px-3 py-1 font-bold', statusStyles[status])}>{status}</span> : <span className="inline-flex items-center gap-1 font-bold text-brown/45"><IconProductProfile className="h-3.5 w-3.5" />Arin</span>}
      <span className="text-brown/35">{tab === 'mine' ? 'Today' : '1 jam lalu'}</span>
    </div>
    <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-2">
      <MiniProduct index={index} />
      <IconProductSwap className="h-5 w-5 justify-self-center text-gold" aria-hidden="true" />
      <MiniProduct index={index + 1} />
    </div>
    {tab === 'request' && (
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" className="min-h-10 rounded-full border border-gold text-sm font-bold text-gold transition hover:bg-cream">×&nbsp; Tolak</button>
        <button type="button" className="min-h-10 rounded-full bg-brown text-sm font-bold text-white transition hover:bg-brown-deep">✓&nbsp; Swap!</button>
      </div>
    )}
  </article>
);

const SwapListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab: SwapTab = searchParams.get('tab') === 'request' ? 'request' : 'mine';
  const statuses: Array<keyof typeof statusStyles> = ['Waiting Confirmation', 'Completed', 'Failed'];

  const changeTab = (tab: SwapTab) => {
    setSearchParams(tab === 'request' ? { tab: 'request' } : {});
  };

  return (
    <section className="min-h-[calc(100vh-var(--height-navbar))] bg-white pb-28 pt-[calc(var(--height-navbar)+2.75rem)]">
      <Container>
        <nav className="flex items-center gap-2 text-sm text-brown/45" aria-label="Breadcrumb"><Link to="/" className="transition hover:text-gold">Beranda</Link><span>/</span><span className="font-bold text-gold">Swap List</span></nav>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-4xl font-normal text-brown md:text-5xl">Swap List</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-brown/55">Kalau dalam 3 hari belum ada konfirmasi dari pemilik, pengajuan Swap akan batal otomatis. Kamu bisa coba pakaian lain, ya!</p>
          </div>
          <div className="grid w-full grid-cols-2 rounded-full bg-sand p-1 text-sm font-bold text-brown sm:w-[240px]">
            <button type="button" onClick={() => changeTab('mine')} className={cn('min-h-10 rounded-full px-5 transition', activeTab === 'mine' && 'bg-brown text-white shadow-sm')} aria-pressed={activeTab === 'mine'}>My Swap</button>
            <button type="button" onClick={() => changeTab('request')} className={cn('min-h-10 rounded-full px-5 transition', activeTab === 'request' && 'bg-brown text-white shadow-sm')} aria-pressed={activeTab === 'request'}>Request</button>
          </div>
        </div>

        {activeTab === 'mine' && (
          <div className="relative mt-10 overflow-hidden rounded-xl border border-green/10 bg-[#F2FFF5] px-6 py-6 sm:px-8">
            <img src={assets.sec6Hero} alt="Circular fashion impact" className="absolute bottom-0 right-0 h-full w-[42%] object-cover opacity-55" />
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-brown"><IconHeroLeaf className="h-4 w-4 text-green" />Items saved from landfill</p>
              <p className="mt-2 font-display text-3xl font-normal text-green-deep sm:text-4xl">1 Pcs&nbsp; = &nbsp;4.0 kg CO₂ avoided</p>
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => <SwapPairCard key={`${activeTab}-${index}`} index={index * 2} tab={activeTab} status={statuses[index]} />)}
        </div>
      </Container>
    </section>
  );
};

export default SwapListPage;
