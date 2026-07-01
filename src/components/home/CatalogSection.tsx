import { useState } from 'react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { assets } from '@/constants/assets';
import { cn } from '@/lib/cn';
import ProductCard from './ProductCard';

const catalogTabs = ['Unisex', 'Pria', 'Wanita'] as const;
type CatalogTab = (typeof catalogTabs)[number];

const productImages = Array.from({ length: 8 }, () => assets.productItemJacket);

const catalogCardsByTab: Record<CatalogTab, string[]> = {
  Unisex: productImages,
  Pria: productImages,
  Wanita: productImages,
};

const CatalogSection = () => {
  const [activeTab, setActiveTab] = useState<CatalogTab>('Pria');
  const activeIndex = catalogTabs.indexOf(activeTab);
  const activeCards = catalogCardsByTab[activeTab];

  return (
    <section className="bg-white py-16" id="catalog">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="w-fit rounded-full bg-cream px-3 py-1 text-xs font-extrabold text-gold">Catalog</p>
            <h2 className="mt-4 font-display text-4xl font-normal tracking-normal text-brown md:text-5xl">Koleksi Outfit</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-brown/60">
              Swipe, match, dan swap. Tiap kartu menampilkan estimasi CO₂ yang kamu hemat dengan memilih fashion sirkular.
            </p>
          </div>
          <div className="relative grid w-fit grid-cols-3 rounded-full bg-sand p-1 text-sm font-bold text-brown">
            <span
              className="absolute bottom-1 top-1 w-[32%] rounded-full bg-brown mx-2 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />
            {catalogTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn('relative z-10 rounded-full px-7 py-2 transition', activeTab === tab ? 'text-white' : 'hover:text-gold')}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeCards.map((image, index) => (
            <ProductCard key={`${activeTab}-${image}-${index}`} image={image} index={index} href={`/catalog/${index + 1}`} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/catalog" variant="outline">
            Semua Catalog →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CatalogSection;
