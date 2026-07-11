import { Link } from 'react-router-dom';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { IconProductLocation, IconProductProfile, IconProductSwap } from '@/assets/icons/product';
import { productCardMeta } from '@/features/product/data/products';
import { useOverlay } from '@/app/overlay-context';
import { useTranslation } from 'react-i18next';

type ProductCardProps = {
  image: string;
  index: number;
  href?: string;
  badgeVariant?: 'catalog' | 'review';
  showActions?: boolean;
};

const ProductCard = ({ image, index, href, badgeVariant = 'catalog', showActions = true }: ProductCardProps) => {
  const item = productCardMeta[index % productCardMeta.length];
  const { openSwap } = useOverlay();
  const { t } = useTranslation(['product', 'common']);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-line bg-white text-brown shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
      {href && (
        <Link
          to={href}
          className="absolute inset-0 z-20 rounded-xl"
          aria-label={t('product:card.view', { title: item.title })}
        />
      )}
      <div className="relative overflow-hidden bg-cream">
        <img
          src={image}
          alt={item.title}
          className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {badgeVariant === 'catalog' ? (
          <div className="absolute left-2.5 right-2.5 top-2.5 z-10 flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-green px-3 py-1 text-[10px] font-extrabold text-white">
              <IconHeroLeaf className="h-3 w-3 shrink-0 text-white" aria-hidden="true" />
              {t('product:card.saved', { carbon: item.carbon })}
            </span>
            <div className="flex gap-2">
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-bold text-brown/70">
                {item.code}
              </span>
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-bold text-gold">{item.brand}</span>
            </div>
          </div>
        ) : (
          <div className="absolute right-2.5 top-2.5 z-10">
            <span className="inline-flex rounded-full bg-[#FF974B] px-3 py-1 text-[10px] font-extrabold text-white">
              {t('product:card.review')}
            </span>
          </div>
        )}
        {showActions && (
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-30 grid translate-y-3 grid-cols-2 gap-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="rounded-full bg-white px-6 py-2 text-md font-extrabold text-brown shadow-card"
            >
              {t('common:actions.buy')}
            </button>
            <button
              type="button"
              onClick={() => openSwap(index)}
              className="inline-flex items-center justify-center gap-1 rounded-full bg-coral px-6 py-2 text-md font-extrabold text-white"
            >
              <IconProductSwap className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t('common:actions.swap')}
            </button>
          </div>
        )}
      </div>
      <div className="p-3.5">
        <h3 className="line-clamp-2 min-h-11 text-base font-extrabold leading-snug text-brown">{item.title}</h3>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-cream px-2.5 py-1 text-xs font-extrabold text-brown">
            {t('product:card.size', { size: item.size })}
          </span>
          <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-bold text-brown/35">{item.condition}</span>
        </div>
        <div className="mt-5 flex items-center justify-between text-xs font-bold text-brown/35">
          <span className="inline-flex items-center gap-1">
            <IconProductProfile className="h-3.5 w-3.5 shrink-0 text-[#A5A5A5]" aria-hidden="true" />
            {item.owner}
          </span>
          <span className="inline-flex items-center gap-1">
            <IconProductLocation className="h-3.5 w-3.5 shrink-0 text-[#A5A5A5]" aria-hidden="true" />
            {item.location}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
