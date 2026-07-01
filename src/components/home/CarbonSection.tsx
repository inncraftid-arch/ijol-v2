import { useState } from 'react';
import type { SVGProps } from 'react';
import Container from '@/components/common/Container';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { assets } from '@/constants/assets';

type IconProps = SVGProps<SVGSVGElement>;

const IconClothes = (props: IconProps) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.75 8.75L21 12.25L26.25 8.75L33.25 12.25L30.63 19.25L27.13 18.38V33.25H14.88V18.38L11.38 19.25L8.75 12.25L15.75 8.75Z" fill="currentColor" />
    <path d="M21 12.25V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconAirConditioner = (props: IconProps) => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="7" y="10" width="24" height="13" rx="3" fill="currentColor" />
    <path d="M11 17H27M14 26V29M19 26V31M24 26V29" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CO2_PER_ITEM = 8.4;

const CarbonSection = () => {
  const [clothesCount, setClothesCount] = useState(5);
  const carbonSaved = clothesCount * CO2_PER_ITEM;
  const equivalentDays = Math.max(1, Math.round(clothesCount / 5));

  return (
    <section className="bg-cream-soft py-16" id="recycle">
      <Container>
        <div className="grid overflow-hidden rounded-[32px] bg-green px-8 py-5 text-white lg:grid-cols-[1fr_0.95fr] lg:gap-6">
          <div className="py-2">
            <p className="w-fit rounded-full bg-cream px-3 py-2 text-xs font-extrabold text-gold">Carbon Calculator</p>
            <h2 className="mt-4 max-w-xl font-display text-[32px] font-normal leading-tight tracking-normal">
              Berapa carbon yang bisa kamu hemat?
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/80">
              Hitung emisi yang bisa kamu cegah dengan men-swap pakaian yang menumpuk di lemari.
            </p>

            <div className="relative mt-5">
              <input
                id="clothes-count"
                type="range"
                min="1"
                max="100"
                value={clothesCount}
                onChange={(event) => setClothesCount(Number(event.target.value))}
                className="h-3 w-full cursor-pointer appearance-none rounded-full bg-green-deep accent-gold [--thumb-size:42px] [&::-moz-range-thumb]:h-[var(--thumb-size)] [&::-moz-range-thumb]:w-[var(--thumb-size)] [&::-moz-range-thumb]:rounded-md [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gold [&::-webkit-slider-thumb]:h-[var(--thumb-size)] [&::-webkit-slider-thumb]:w-[var(--thumb-size)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-md [&::-webkit-slider-thumb]:bg-gold"
                style={{
                  background: `linear-gradient(to right, #C99547 0%, #C99547 ${clothesCount}%, #003F11 ${clothesCount}%, #003F11 100%)`,
                }}
              />
              <IconClothes className="pointer-events-none absolute top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-white" style={{ left: `${clothesCount}%` }} aria-hidden="true" />
            </div>

            <label htmlFor="clothes-count" className="mt-5 block text-base font-extrabold">
              Jumlah pakaian tidak terpakai dilemari mu
            </label>
            <div className="mt-2 flex items-center overflow-hidden rounded-full bg-white px-6 py-2 text-brown">
              <span className="text-lg font-bold text-gold">{clothesCount}</span>
              <span className="ml-auto text-sm font-extrabold text-brown/60">Pcs</span>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] bg-white p-6 text-green lg:mt-0">
            <img src={assets.carbonBot} alt="" className="absolute inset-x-0 bottom-0 h-20 w-full object-cover opacity-80" />
            <img src={assets.carbonHero} alt="Child holding a seedling" className="absolute bottom-0 right-0 z-10 w-60 max-w-[64%] object-contain md:w-108" />
            <div className="relative z-20 max-w-sm">
              <p className="inline-flex items-center gap-2 text-sm font-extrabold text-brown">
                <IconHeroLeaf className="h-4 w-4 text-brown" aria-hidden="true" />
                Potensi Carbon Unlock
              </p>
              <strong className="mt-3 block font-display text-4xl font-normal leading-none text-green md:text-5xl">
                {carbonSaved.toFixed(1)} kg CO₂
              </strong>
              <div className="mt-4 flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-cream text-green">
                  <IconAirConditioner className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="text-sm leading-5 text-brown">
                  <span className="block">Setara dengan</span>
                  <strong>{equivalentDays} hari menyalakan AC 1 PK.</strong>
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
