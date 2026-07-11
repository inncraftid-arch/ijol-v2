import { Link, useSearchParams } from 'react-router-dom';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { IconProductProfile, IconProductSwap } from '@/assets/icons/product';
import Container from '@/components/layout/Container';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { assets } from '@/constants/assets';
import { productCardMeta } from '@/features/product/data/products';
import { cn } from '@/lib/cn';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

type SwapTab = 'mine' | 'request';

const statusStyles = {
  'Waiting Confirmation': 'bg-[#EEF5FF] text-[#7294C5]',
  Completed: 'bg-[#EAF7EE] text-green',
  Failed: 'bg-[#FFF0EE] text-coral',
} as const;

const MiniProduct = ({ index }: { index: number }) => {
  const product = productCardMeta[index % productCardMeta.length];
  const { t } = useTranslation('product');

  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-line bg-white">
      <div className="relative">
        <img src={assets.productItemJacket} alt={product.title} className="aspect-[1/1.08] w-full object-cover" />
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-green px-2 py-1 text-[8px] font-extrabold text-white">
          <IconHeroLeaf className="h-2.5 w-2.5" />
          {t('card.saved', { carbon: product.carbon })}
        </span>
        <div className="absolute right-2 top-2 flex gap-1">
          <span className="rounded-full bg-white/90 px-2 py-1 text-[7px] font-bold text-brown/60">{product.code}</span>
          <span className="rounded-full bg-white/90 px-2 py-1 text-[7px] font-bold text-gold">{product.brand}</span>
        </div>
      </div>
      <div className="p-2.5">
        <p className="line-clamp-2 min-h-8 text-[11px] font-extrabold leading-snug text-brown">{product.title}</p>
        <div className="mt-2 flex gap-1.5 text-[8px]">
          <span className="rounded bg-cream px-1.5 py-1 font-bold">{t('card.size', { size: product.size })}</span>
          <span className="rounded bg-mist px-1.5 py-1 text-brown/35">{product.condition}</span>
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-[9px] text-brown/35">
          <IconProductProfile className="h-3 w-3" />
          {product.owner}
        </span>
      </div>
    </div>
  );
};

const SwapPairCard = ({ index, tab, status }: { index: number; tab: SwapTab; status: keyof typeof statusStyles }) => {
  const { t } = useTranslation(['swap', 'common']);
  const statusKeys = { 'Waiting Confirmation': 'waiting', Completed: 'completed', Failed: 'failed' } as const;
  const owner = productCardMeta[index % productCardMeta.length].owner;

  return (
    <article className="rounded-xl border border-line bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3 text-[10px]">
        {tab === 'mine' ? (
          <span className={cn('rounded-full px-3 py-1 font-bold', statusStyles[status])}>
            {t(`swap:list.${statusKeys[status]}`)}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 font-bold text-brown/45">
            <IconProductProfile className="h-3.5 w-3.5" />
            {owner}
          </span>
        )}
        <span className="text-brown/35">{t(tab === 'mine' ? 'swap:list.today' : 'swap:list.hourAgo')}</span>
      </div>
      <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-2">
        <MiniProduct index={index} />
        <IconProductSwap className="h-5 w-5 justify-self-center text-gold" aria-hidden="true" />
        <MiniProduct index={index + 1} />
      </div>
      {tab === 'request' && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="min-h-10 rounded-full border border-gold text-sm font-bold text-gold transition hover:bg-cream"
          >
            ×&nbsp; {t('common:actions.reject')}
          </button>
          <button
            type="button"
            className="min-h-10 rounded-full bg-brown text-sm font-bold text-white transition hover:bg-brown-deep"
          >
            ✓&nbsp; {t('common:actions.swap')}
          </button>
        </div>
      )}
    </article>
  );
};

const SwapListPage = () => {
  const { t } = useTranslation('swap');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab: SwapTab = searchParams.get('tab') === 'request' ? 'request' : 'mine';
  const statuses: Array<keyof typeof statusStyles> = ['Waiting Confirmation', 'Completed', 'Failed'];
  const swapTabOptions: Array<{ value: SwapTab; label: string }> = [
    { value: 'mine', label: t('list.mine') },
    { value: 'request', label: t('list.request') },
  ];

  const changeTab = (tab: SwapTab) => {
    setSearchParams(tab === 'request' ? { tab: 'request' } : {});
  };

  return (
    <section className="min-h-[calc(100vh-var(--height-navbar))] bg-white pb-28 pt-[calc(var(--height-navbar)+2.75rem)]">
      <Container>
        <nav
          className="flex items-center gap-2 text-sm text-brown/45"
          aria-label={t('aria.breadcrumb', { ns: 'common' })}
        >
          <Link to={ROUTES.home} className="transition hover:text-gold">
            {t('list.home')}
          </Link>
          <span>/</span>
          <span className="font-bold text-gold">{t('list.title')}</span>
        </nav>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-4xl font-normal text-brown md:text-5xl">{t('list.title')}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-brown/55">{t('list.description')}</p>
          </div>
          <SegmentedControl
            value={activeTab}
            options={swapTabOptions}
            onChange={changeTab}
            ariaLabel={t('list.title')}
            className="w-full sm:w-60"
            optionClassName="min-h-10 px-5"
          />
        </div>

        {activeTab === 'mine' && (
          <div className="relative mt-10 overflow-hidden rounded-xl border border-green/10 bg-[#F2FFF5] px-6 py-6 sm:px-8">
            <img
              src={assets.sec6Hero}
              alt="Circular fashion impact"
              className="absolute bottom-0 right-0 h-full w-[42%] object-cover opacity-55"
            />
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-brown">
                <IconHeroLeaf className="h-4 w-4 text-green" />
                {t('list.saved')}
              </p>
              <p className="mt-2 font-display text-3xl font-normal text-green-deep sm:text-4xl">{t('list.impact')}</p>
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <SwapPairCard key={`${activeTab}-${index}`} index={index * 2} tab={activeTab} status={statuses[index]} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SwapListPage;
