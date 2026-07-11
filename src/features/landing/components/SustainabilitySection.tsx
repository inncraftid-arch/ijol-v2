import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { IconHeroLeaf } from '@/assets/icons/hero';
import {
  IconLiveImpactDonate,
  IconLiveImpactFiber,
  IconLiveImpactPackage,
  IconLiveImpactRecycle,
} from '@/assets/icons/liveImpact';
import { assets } from '@/constants/assets';
import { useTranslation } from 'react-i18next';

const impactCards = [
  {
    key: 'donate',
    Icon: IconLiveImpactDonate,
    accent: 'text-gold',
    stats: [
      ['donors', '2', 'people'],
      ['total', '5', 'received'],
    ],
    statValueTone: 'text-gold',
    readyValue: '5',
    ReadyIcon: IconLiveImpactPackage,
    readySurfaceTone: 'bg-cream',
    readyIconTone: 'bg-gold',
    showEmissionDetail: true,
    buttonTone: 'gold',
  },
  {
    key: 'recycle',
    Icon: IconLiveImpactRecycle,
    accent: 'text-brown',
    stats: [
      ['senders', '2', 'people'],
      ['weight', '5', 'textileKg'],
    ],
    statValueTone: 'text-brown',
    readyValue: '5',
    ReadyIcon: IconLiveImpactFiber,
    readySurfaceTone: 'bg-[#EAE1D8]',
    readyIconTone: 'bg-brown',
    showEmissionDetail: false,
    buttonTone: 'brown',
  },
] as const;

const impactFormUrls = [
  'https://docs.google.com/forms/d/e/1FAIpQLSdHQNCtZeZeKsOefMcTBEi06FIO-YynO6UgRmUvZECEdr0uXQ/viewform',
  'https://docs.google.com/forms/d/e/1FAIpQLSc1ZWpO1mxED5SLE5GQIohuUAseFByXzBQj9sMo150fNy71Qw/viewform',
] as const;

const emissionBackgrounds = [
  {
    image: assets.carbonBg,
    className: 'right-[-6%] w-[68%] max-w-[285px] object-[42%_center]',
    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, #000 48%, #000 100%)',
  },
  {
    image: assets.carbonBgLeft,
    className: 'right-[-6%] w-[68%] max-w-[285px] object-left',
    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, #000 48%, #000 100%)',
  },
] as const;

const SustainabilitySection = () => {
  const { t } = useTranslation('landing');
  return (
    <section className="scroll-mt-22 bg-hero-background py-16" id="donate">
      <Container>
        <div className="text-center">
          <p className="mx-auto w-fit rounded-full bg-cream-pale px-3 py-1 text-xs font-extrabold text-gold">
            {t('sustainability.eyebrow')}
          </p>
          <h2 className="mt-4 font-display text-[40px] leading-10 font-normal tracking-normal text-brown">
            {t('sustainability.title')}
          </h2>
          <p className="mt-3 text-xl text-brown/45">{t('sustainability.description')}</p>
        </div>

        <div className="mx-auto mt-16 overflow-hidden rounded-[28px] bg-[#F4EADE] p-0">
          <div className="grid gap-0 rounded-[28px] bg-white p-8 lg:grid-cols-2 lg:p-10">
            {impactCards.map((card, index) => {
              const background = emissionBackgrounds[index] ?? emissionBackgrounds[0];

              return (
                <article
                  key={card.key}
                  className={
                    index === 0
                      ? 'border-b border-line pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12'
                      : 'pt-8 lg:pl-12 lg:pt-0'
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-11 w-11 place-items-center rounded-lg bg-cream ${card.accent}`}>
                      <card.Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-extrabold ${card.accent}`}>
                        {t(`sustainability.cards.${card.key}.title`)}
                      </h3>
                      <p className="text-sm text-brown/55">{t(`sustainability.cards.${card.key}.subtitle`)}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {card.stats.map(([labelKey, value, unitKey]) => (
                      <div key={labelKey} className="rounded-2xl border border-line bg-white px-5 py-4 text-center">
                        <p className="text-sm font-bold text-brown">{t(`sustainability.stats.${labelKey}`)}</p>
                        <strong
                          className={`mt-2 block font-display text-4xl font-normal leading-none ${card.statValueTone}`}
                        >
                          {value}
                        </strong>
                        <span className="mt-2 block text-xs text-brown/55">{t(`sustainability.units.${unitKey}`)}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-6 flex items-center justify-between rounded-full px-8 py-4 text-brown ${card.readySurfaceTone}`}
                  >
                    <div>
                      <strong className="text-[32px] leading-none">{card.readyValue}</strong>
                      <span className="ml-1 text-sm text-brown/55">
                        {t(`sustainability.cards.${card.key}.readyUnit`)}
                      </span>
                      <p className="text-sm text-brown/70">{t(`sustainability.cards.${card.key}.readyLabel`)}</p>
                    </div>
                    <div className={`grid h-12 w-12 place-items-center rounded-full text-white ${card.readyIconTone}`}>
                      <card.ReadyIcon className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative mt-6 overflow-hidden rounded-full bg-green px-6 py-4 text-white">
                    <img
                      src={background.image}
                      alt=""
                      className={`pointer-events-none absolute inset-y-0 h-full object-cover opacity-55 blur-[0.2px] ${background.className}`}
                      style={{ WebkitMaskImage: background.maskImage, maskImage: background.maskImage }}
                    />
                    <div className="relative z-10 flex items-center gap-4">
                      <IconHeroLeaf className="h-10 w-10 shrink-0 text-white" aria-hidden="true" />
                      <div>
                        <strong className="font-display text-3xl font-normal leading-none">42.0 kg CO₂</strong>
                        <p className="text-xs font-semibold text-white/90">
                          {t(`sustainability.cards.${card.key}.emissionLabel`)}
                          {card.showEmissionDetail ? (
                            <span className="font-normal"> | {t('sustainability.emissionDetail')}</span>
                          ) : (
                            <span className="invisible font-normal" aria-hidden="true">
                              {' | '}
                              {t('sustainability.emissionDetail')}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    href={impactFormUrls[index]}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    className={
                      card.buttonTone === 'gold'
                        ? 'mt-6 w-full border-gold text-gold'
                        : 'mt-6 w-full border-brown text-brown'
                    }
                  >
                    {t(`sustainability.cards.${card.key}.button`)}
                  </Button>
                </article>
              );
            })}
          </div>
          <p className="bg-[#F4EADE] py-3 text-center text-sm text-brown/45">{t('sustainability.updated')}</p>
        </div>
      </Container>
    </section>
  );
};

export default SustainabilitySection;
