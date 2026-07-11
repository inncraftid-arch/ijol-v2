import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { IconEcosystemDonate, IconEcosystemEmail, IconEcosystemHandshake } from '@/assets/icons/ecosystem';
import { assets } from '@/constants/assets';
import { useTranslation } from 'react-i18next';

const EcosystemSection = () => {
  const { t } = useTranslation('landing');
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: 'linear-gradient(135.8deg, #C99547 64.79%, #634923 163.56%)' }}
    >
      <img
        src={assets.contactTexture}
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[100vw] w-[38.888889vw] -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover object-center opacity-60 mix-blend-multiply"
        aria-hidden="true"
      />
      {/* <img
        src={assets.contactStarRight}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-5 opacity-30 w-[min(62vw,760px)] select-none object-contain"
        aria-hidden="true"
      />
      <img
        src={assets.contactStarLeft}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-5 opacity-30 w-[min(54vw,680px)] select-none object-contain"
        aria-hidden="true"
      /> */}
      <img
        src={assets.ecosystemClothesline}
        alt=""
        className="pointer-events-none absolute top-0 z-20 hidden w-[clamp(300px,30vw,440px)] max-w-none select-none lg:block"
        style={{ left: 'max(0px, calc((100vw - var(--width-container)) / 2 - 56px))' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={assets.sec6Hero}
              alt={t('ecosystem.imageAlt')}
              className="relative z-10 w-full rounded-8 shadow-soft"
            />
            <span className="absolute right-5 -top-3 z-30 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-base text-brown shadow-card">
              <IconEcosystemDonate className="h-5 w-5  shrink-0 text-gold" aria-hidden="true" />
              {t('ecosystem.badgeDaily')}
            </span>
            <span className="absolute left-20 -bottom-3 z-30 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-base text-brown shadow-card">
              <IconEcosystemHandshake className="h-5 w-5  shrink-0 text-gold" aria-hidden="true" />
              {t('ecosystem.badgeClothes')}
            </span>
          </div>
          <div className="relative z-30 text-white">
            <h2 className="font-display text-5xl font-normal leading-tight tracking-normal">{t('ecosystem.title')}</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/78">{t('ecosystem.description')}</p>
            <Button href="#contact" variant="dark" className="mt-8">
              <IconEcosystemEmail className="mr-2 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              {t('ecosystem.cta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;
