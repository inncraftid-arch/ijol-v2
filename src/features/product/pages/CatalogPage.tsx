import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import SegmentedControl from '@/components/ui/SegmentedControl';
import EcosystemSection from '@/features/landing/components/EcosystemSection';
import ProductCard from '@/features/product/components/ProductCard';
import { assets } from '@/constants/assets';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const catalogFilters = ['Semua', 'Unisex', 'Pria', 'Wanita'] as const;
type CatalogFilter = (typeof catalogFilters)[number];

const catalogProducts = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  category: catalogFilters[(index % 3) + 1] as Exclude<CatalogFilter, 'Semua'>,
  image: assets.productItemJacket,
}));

const CatalogPage = () => {
  const { t } = useTranslation('product');
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('Semua');
  const visibleProducts =
    activeFilter === 'Semua' ? catalogProducts : catalogProducts.filter((product) => product.category === activeFilter);
  const filterOptions = catalogFilters.map((filter) => ({
    value: filter,
    label: t(
      `catalog.filters.${filter === 'Semua' ? 'all' : filter === 'Pria' ? 'men' : filter === 'Wanita' ? 'women' : 'unisex'}`,
    ),
  }));

  return (
    <>
      <section className="bg-white pb-20 pt-[calc(var(--height-navbar)+3.5rem)]">
        <Container>
          <nav
            className="flex items-center gap-2 text-xs font-semibold text-brown/40"
            aria-label={t('aria.breadcrumb', { ns: 'common' })}
          >
            <Link to={ROUTES.home} className="transition hover:text-gold">
              {t('catalog.home')}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gold">{t('catalog.label')}</span>
          </nav>

          <div className="mt-7 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl font-normal tracking-normal text-brown md:text-5xl">
                {t('catalog.title')}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brown/55">{t('catalog.description')}</p>
            </div>

            <SegmentedControl
              value={activeFilter}
              options={filterOptions}
              onChange={setActiveFilter}
              ariaLabel={t('catalog.title')}
              className="w-full text-xs sm:w-fit sm:text-sm"
              optionClassName="px-4 sm:px-6"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard key={product.id} image={product.image} index={index} href={ROUTES.product(product.id)} />
            ))}
          </div>
        </Container>
      </section>

      <EcosystemSection />
    </>
  );
};

export default CatalogPage;
