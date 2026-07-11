import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import SegmentedControl from '@/components/ui/SegmentedControl';
import ProductCard from '@/features/product/components/ProductCard';
import { assets } from '@/constants/assets';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const wardrobeTabs = ['listed', 'pending'] as const;
type WardrobeTab = (typeof wardrobeTabs)[number];

const wardrobeProducts = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  image: assets.productItemJacket,
}));

const WardrobePage = () => {
  const { t } = useTranslation('product');
  const [activeTab, setActiveTab] = useState<WardrobeTab>('listed');
  const tabOptions = wardrobeTabs.map((tab) => ({
    value: tab,
    label: t(`wardrobe.tabs.${tab}`),
  }));

  return (
    <section className="bg-white pb-24 pt-[calc(var(--height-navbar)+3.5rem)]">
      <Container>
        <nav
          className="flex items-center gap-2 text-sm font-semibold text-brown/40"
          aria-label={t('aria.breadcrumb', { ns: 'common' })}
        >
          <Link to={ROUTES.home} className="transition hover:text-gold">
            {t('wardrobe.home')}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-gold">{t('wardrobe.label')}</span>
        </nav>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-4xl font-normal leading-tight tracking-normal text-brown md:text-5xl">
              {t('wardrobe.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-8 text-brown/60">{t('wardrobe.description')}</p>
          </div>

          <SegmentedControl
            value={activeTab}
            options={tabOptions}
            onChange={setActiveTab}
            ariaLabel={t('wardrobe.title')}
            className="w-full text-sm sm:w-fit"
            optionClassName="px-7"
          />
        </div>

        <div className="mt-16 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wardrobeProducts.map((product, index) => (
            <ProductCard
              key={`${activeTab}-${product.id}`}
              image={product.image}
              index={index}
              badgeVariant={activeTab === 'pending' ? 'review' : 'catalog'}
              showActions={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WardrobePage;
