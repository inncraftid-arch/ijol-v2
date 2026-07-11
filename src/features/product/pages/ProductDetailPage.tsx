import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconHeroHanger } from '@/assets/icons/hero';
import { IconProductLocation, IconProductProfile, IconProductSwap } from '@/assets/icons/product';
import Container from '@/components/layout/Container';
import EcosystemSection from '@/features/landing/components/EcosystemSection';
import ProductCard from '@/features/product/components/ProductCard';
import { assets } from '@/constants/assets';
import { productCardMeta } from '@/features/product/data/products';
import { cn } from '@/lib/cn';
import { useOverlay } from '@/app/overlay-context';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const galleryImages = Array.from({ length: 4 }, () => assets.productItemJacket);

const ProductDetailPage = () => {
  const { productId = '1' } = useParams();
  const productIndex = Math.max(0, Number.parseInt(productId, 10) - 1) % productCardMeta.length;
  const product = productCardMeta[productIndex] ?? productCardMeta[0];
  const [activeImage, setActiveImage] = useState(0);
  const { openSwap } = useOverlay();
  const { t } = useTranslation(['product', 'common']);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  const showPreviousImage = () =>
    setActiveImage((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  const showNextImage = () => setActiveImage((current) => (current + 1) % galleryImages.length);

  return (
    <>
      <section className="bg-white pb-20 pt-[calc(var(--height-navbar)+2.75rem)]">
        <Container>
          <nav
            className="flex flex-wrap items-center gap-2 text-sm text-brown/55"
            aria-label={t('common:aria.breadcrumb')}
          >
            <Link to={ROUTES.home} className="transition hover:text-gold">
              {t('product:detail.home')}
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={ROUTES.catalog} className="transition hover:text-gold">
              {t('product:detail.collection')}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-bold text-gold">{product.breadcrumb}</span>
          </nav>

          <div className="mt-11 grid items-start gap-10 lg:grid-cols-[1fr_1.03fr] lg:gap-12">
            <div>
              <div className="relative overflow-hidden rounded-xl bg-cream">
                <img
                  src={galleryImages[activeImage]}
                  alt={product.title}
                  className="aspect-[1/1.05] w-full object-cover"
                />

                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="absolute left-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-gold text-xl font-bold text-white shadow-card transition hover:bg-gold-soft"
                  aria-label={t('product:detail.previous')}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-gold text-xl font-bold text-white shadow-card transition hover:bg-gold-soft"
                  aria-label={t('product:detail.next')}
                >
                  ›
                </button>

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brown px-3 py-1.5 text-sm font-bold text-white">
                  {activeImage + 1}/{galleryImages.length}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      'overflow-hidden rounded-lg border-2 bg-cream transition',
                      activeImage === index ? 'border-gold' : 'border-transparent opacity-35 hover:opacity-70',
                    )}
                    aria-label={t('product:detail.select', { number: index + 1 })}
                    aria-pressed={activeImage === index}
                  >
                    <img src={image} alt="" className="aspect-square h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <h1 className="max-w-2xl text-2xl font-extrabold leading-snug text-brown md:text-[28px]">
                {product.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-base text-brown/45">
                <span className="inline-flex items-center gap-2">
                  <IconProductProfile className="h-5 w-5 text-[#A5A5A5]" aria-hidden="true" />
                  {product.owner}
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconProductLocation className="h-5 w-5 text-[#A5A5A5]" aria-hidden="true" />
                  {product.location}
                </span>
                <span className="rounded-md bg-cream px-3 py-1.5 text-sm font-extrabold text-brown">
                  Size: {product.size}
                </span>
                <span className="rounded-md bg-mist px-3 py-1.5 text-sm font-bold text-brown/35">
                  {product.condition}
                </span>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-7 text-brown/80">{t('product:detail.description')}</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-cream-soft px-6 py-4 text-center">
                  <strong className="block text-xl font-extrabold text-gold">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </strong>
                  <span className="mt-1 block text-base text-brown/55">{t('product:detail.preloved')}</span>
                </div>
                <div className="rounded-2xl border border-line bg-cream-soft px-6 py-4 text-center">
                  <strong className="inline-flex items-center gap-1 text-xl font-extrabold text-gold">
                    <IconHeroHanger className="h-5 w-5" aria-hidden="true" />1
                  </strong>
                  <span className="mt-1 block text-base text-brown/55">{t('product:detail.swap')}</span>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="min-h-12 rounded-full border border-brown bg-white text-base font-bold text-brown transition hover:border-gold hover:text-gold"
                >
                  {t('common:actions.buy')}
                </button>
                <button
                  type="button"
                  onClick={() => openSwap(productIndex)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral text-base font-bold text-white transition hover:brightness-95"
                >
                  <IconProductSwap className="h-5 w-5" aria-hidden="true" />
                  {t('common:actions.swap')}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-16">
        <Container>
          <h2 className="font-display text-4xl font-normal tracking-normal text-brown">
            {t('product:detail.otherTitle')}
          </h2>
          <p className="mt-2 text-base text-brown/55">{t('product:detail.otherDescription')}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 20 }, (_, index) => (
              <ProductCard key={index} image={assets.productItemJacket} index={0} href={ROUTES.product(index + 1)} />
            ))}
          </div>
        </Container>
      </section>

      <EcosystemSection />
    </>
  );
};

export default ProductDetailPage;
