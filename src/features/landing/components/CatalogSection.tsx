import { useState } from 'react';
import Button from '@/components/ui/Button';
import SegmentedControl from '@/components/ui/SegmentedControl';
import Container from '@/components/layout/Container';
import { assets } from '@/constants/assets';
import ProductCard from '@/features/product/components/ProductCard';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const catalogTabs = ['Unisex', 'Pria', 'Wanita'] as const;
type CatalogTab = (typeof catalogTabs)[number];

const productImages = Array.from({ length: 8 }, () => assets.productItemJacket);

const catalogCardsByTab: Record<CatalogTab, string[]> = {
  Unisex: productImages,
  Pria: productImages,
  Wanita: productImages,
};

const CatalogSection = () => {
  const { t } = useTranslation('landing');
  const [activeTab, setActiveTab] = useState<CatalogTab>('Pria');
  const activeCards = catalogCardsByTab[activeTab];
  const tabOptions = catalogTabs.map((tab) => ({
    value: tab,
    label: t(`catalog.tabs.${tab === 'Pria' ? 'men' : tab === 'Wanita' ? 'women' : 'unisex'}`),
  }));

  return (
    <section className="bg-white py-16" id="catalog">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="w-fit rounded-full bg-cream px-3 py-1 text-xs font-extrabold text-gold">
              {t('catalog.eyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl font-normal tracking-normal text-brown md:text-5xl">
              {t('catalog.title')}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-brown/60">{t('catalog.description')}</p>
          </div>
          <SegmentedControl
            value={activeTab}
            options={tabOptions}
            onChange={setActiveTab}
            ariaLabel={t('catalog.title')}
            className="w-fit"
            optionClassName="px-7 py-2"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeCards.map((image, index) => (
            <ProductCard
              key={`${activeTab}-${image}-${index}`}
              image={image}
              index={index}
              href={ROUTES.product(index + 1)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={ROUTES.catalog} variant="outline">
            {t('catalog.all')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CatalogSection;
