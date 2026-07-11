import { useState } from 'react';
import Container from '@/components/layout/Container';
import { IconCarbonAirConditioner, IconCarbonShirt } from '@/assets/icons/carbon';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { assets } from '@/constants/assets';
import { useTranslation } from 'react-i18next';

const CO2_PER_ITEM = 8.4;

const CarbonSection = () => {
  const { t } = useTranslation('landing');
  const [clothesCount, setClothesCount] = useState(5);
  const carbonSaved = clothesCount * CO2_PER_ITEM;
  const equivalentDays = Math.max(1, Math.round(clothesCount / 5));
  const sliderPosition = (clothesCount - 1) / 99;
  const sliderThumbCenter = `calc(${sliderPosition * 100}% + ${(0.5 - sliderPosition) * 46}px)`;

  return (
    <section className="bg-cream-soft py-16" id="recycle">
      <Container>
        <div className="grid overflow-hidden rounded-4xl bg-green px-8 py-5 text-white lg:grid-cols-[1fr_0.95fr] lg:gap-6">
          <div className="py-2">
            <p className="w-fit rounded-full bg-[#FFFAEC] px-3 py-1 text-xs font-extrabold text-gold">
              {t('carbon.eyebrow')}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[32px] font-normal leading-tight tracking-normal">
              {t('carbon.title')}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-6 text-white/80">{t('carbon.description')}</p>

            <div className="relative mt-5">
              <div
                className="absolute left-0 right-[23px] top-1/2 h-3 -translate-y-1/2 rounded-full bg-green-deep"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 top-1/2 h-3 -translate-y-1/2 rounded-full bg-linear-to-r from-gold from-9% to-[#A37B40]"
                style={{
                  width: sliderThumbCenter,
                }}
                aria-hidden="true"
              />
              <input
                id="clothes-count"
                type="range"
                min="1"
                max="100"
                value={clothesCount}
                onChange={(event) => setClothesCount(Number(event.target.value))}
                className="relative z-10 h-3 w-full cursor-pointer appearance-none bg-transparent [--thumb-height:44px] [--thumb-width:46px] [&::-moz-range-thumb]:h-(--thumb-height) [&::-moz-range-thumb]:w-(--thumb-width) [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:h-(--thumb-height) [&::-webkit-slider-thumb]:w-(--thumb-width) [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
              />
              <IconCarbonShirt
                className="pointer-events-none absolute top-2/3 z-20 h-11 w-11.5 -translate-x-1/2 -translate-y-1/2"
                style={{ left: sliderThumbCenter }}
                aria-hidden="true"
              />
            </div>

            <label htmlFor="clothes-count" className="mt-5 block text-base font-extrabold">
              {t('carbon.count')}
            </label>
            <div className="mt-2 flex items-center overflow-hidden rounded-full bg-white px-6 py-2 text-brown">
              <span className="text-lg font-bold text-gold">{clothesCount}</span>
              <span className="ml-auto text-sm font-extrabold text-brown/60">{t('carbon.unit')}</span>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] bg-white p-6 text-green lg:mt-0">
            <img
              src={assets.carbonBot}
              alt=""
              className="absolute inset-x-0 bottom-0 h-50 w-full object-cover opacity-80"
            />
            <img
              src={assets.carbonHero}
              alt={t('carbon.imageAlt')}
              className="absolute bottom-0 right-0 z-10 w-60 max-w-[64%] object-contain md:w-108"
            />
            <div className="relative z-20 max-w-sm">
              <p className="inline-flex items-center gap-2 text-sm font-extrabold text-brown">
                <IconHeroLeaf className="h-4 w-4 text-brown" aria-hidden="true" />
                {t('carbon.potential')}
              </p>
              <strong className="mt-3 block font-display text-4xl font-normal leading-none text-green md:text-5xl">
                {carbonSaved.toFixed(1)} kg CO₂
              </strong>
              <div className="mt-4 flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#246E3D1A] text-[#008D26]">
                  <IconCarbonAirConditioner className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="text-sm leading-5 text-brown">
                  <span className="block">{t('carbon.equivalent')}</span>
                  <strong>{t('carbon.days', { days: equivalentDays })}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CarbonSection;
