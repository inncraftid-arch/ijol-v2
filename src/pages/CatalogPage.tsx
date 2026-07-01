import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import EcosystemSection from '@/components/home/EcosystemSection';
import ProductCard from '@/components/home/ProductCard';
import { assets } from '@/constants/assets';
import { cn } from '@/lib/cn';

const catalogFilters = ['Semua', 'Unisex', 'Pria', 'Wanita'] as const;
type CatalogFilter = (typeof catalogFilters)[number];

const catalogProducts = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  category: catalogFilters[(index % 3) + 1] as Exclude<CatalogFilter, 'Semua'>,
  image: assets.productItemJacket,
}));

const CatalogPage = () => {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('Semua');
  const visibleProducts = activeFilter === 'Semua' ? catalogProducts : catalogProducts.filter((product) => product.category === activeFilter);

  return (
    <>
      <section className="bg-white pb-20 pt-[calc(var(--height-navbar)+3.5rem)]">
        <Container>
          <nav className="flex items-center gap-2 text-xs font-semibold text-brown/40" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-gold">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gold">All Catalog</span>
          </nav>

          <div className="mt-7 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl font-normal tracking-normal text-brown md:text-5xl">Semua Koleksi Outfit</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brown/55">
                Swipe, match, dan swap. Tiap kartu menampilkan estimasi CO₂ yang kamu hemat dengan memilih fashion sirkular.
              </p>
            </div>

            <div className="relative grid w-full grid-cols-4 rounded-full bg-sand p-1 text-xs font-bold text-brown sm:w-fit sm:text-sm">
              {catalogFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'min-h-9 rounded-full px-4 transition sm:px-6',
                    activeFilter === filter ? 'bg-brown text-white shadow-sm' : 'hover:text-gold',
                  )}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <ProductCard key={product.id} image={product.image} index={index} href={`/catalog/${product.id}`} />
            ))}
          </div>
        </Container>
      </section>

      <EcosystemSection />
    </>
  );
};

export default CatalogPage;
