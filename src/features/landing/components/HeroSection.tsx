import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { IconHeroHanger, IconHeroHeart, IconHeroLeaf, IconHeroShirt, IconHeroStar } from '@/assets/icons/hero';
import { assets } from '@/constants/assets';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('landing');
  return (
    <section className="relative overflow-hidden bg-hero-background pt-32 lg:pt-36">
      <img
        src={assets.heroSilhouette}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-0 w-72 object-contain object-top-left opacity-55 sm:w-88 lg:w-105 lg:opacity-70"
        aria-hidden="true"
      />
      <Container className="relative z-10 grid min-h-170 items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/90 px-4 py-2 text-sm font-medium text-brown ">
            <span className="h-2 w-2 rounded-full bg-cream" />
            {t('hero.eyebrow')}
          </div>
          <h1 className="mt-10 max-w-3xl font-display text-[56px] font-normal leading-18 tracking-normal text-brown ">
            {t('hero.titleStart')} <span className="text-gold">{t('hero.titleAccent')}</span> {t('hero.titleEnd')}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-7 text-brown/65">
            {t('hero.descriptionStart')}{' '}
            <strong className="font-extrabold text-brown">{t('hero.descriptionStrong')}</strong>{' '}
            {t('hero.descriptionEnd')}
          </p>
          <Button href="#catalog" variant="dark" className="mt-8">
            {t('hero.cta')}
          </Button>
        </div>

        <div className="relative mx-auto flex min-h-130 w-full max-w-145 items-center justify-center lg:min-h-140 lg:max-w-140">
          <div className="animate-float-subtle absolute -left-8 top-8 z-20 hidden items-center gap-2 rounded-full border-[0.5px] border-gold bg-white px-5 py-3 text-xs font-semibold text-brown/70 lg:flex">
            <IconHeroShirt className="h-5 w-5 shrink-0" aria-hidden="true" />
            {t('hero.request')}
          </div>
          <div className="absolute left-17 top-22 z-20 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-brown ">
            <IconHeroStar className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            {t('hero.match')}
          </div>
          <div className="relative grid h-150 w-full max-w-135 place-items-center overflow-hidden rounded-[40px] bg-sand ">
            <div className="relative grid h-120 w-full max-w-112.5 place-items-center overflow-hidden rounded-4xl bg-[#FEF3D7] ">
              <div className="relative grid h-112.5 w-112.5 max-w-full place-items-center overflow-hidden rounded-6">
                <img src={assets.heroImage} alt={t('hero.imageAlt')} className="h-full w-full object-contain" />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="animate-heart-pulse grid h-26 w-26 place-items-center rounded-full bg-[#F45F8A] shadow-[0_10px_30px_rgba(244,95,138,0.35)]">
                    <IconHeroHeart className="mt-2 h-17 w-17 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-22 right-17 z-20 inline-flex items-center gap-2 rounded-full bg-green px-3 py-1 text-xs font-bold text-white">
            <IconHeroLeaf className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
            {t('hero.saved')}
          </div>
          <div className="animate-float-subtle absolute -right-8 bottom-8 z-20 inline-flex items-center gap-2 rounded-full border-[0.5px] border-gold bg-white px-5 py-3 text-xs font-semibold  text-brown/70 ">
            <IconHeroHanger className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            {t('hero.token')}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
