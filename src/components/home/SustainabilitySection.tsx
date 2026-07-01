import type { SVGProps } from 'react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { IconHeroLeaf } from '@/assets/icons/hero';
import { assets } from '@/constants/assets';

type IconProps = SVGProps<SVGSVGElement>;

const IconDonate = (props: IconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.92 8.17C9.92 6.78 11.05 5.66 12.43 5.66C13.23 5.66 13.96 6.03 14.43 6.62C14.9 6.03 15.63 5.66 16.43 5.66C17.81 5.66 18.94 6.78 18.94 8.17C18.94 10.54 14.43 13.1 14.43 13.1C14.43 13.1 9.92 10.54 9.92 8.17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.42 13.42V18.08C6.42 19.05 7.2 19.83 8.17 19.83H20.83C21.8 19.83 22.58 19.05 22.58 18.08V13.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.75 16.33H12.25M16.75 16.33H20.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconRecycle = (props: IconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 19.83L11.67 22.17L14 24.5M11.67 22.17H22.17C23.43 22.17 24.5 21.1 24.5 19.83C24.5 19.46 24.41 19.1 24.25 18.77L23.48 17.32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.96 12.83L9.1 9.65L5.92 10.5M9.1 9.65L3.85 18.75C3.3 19.85 4.07 21.15 5.3 21.23L6.95 21.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.04 12.83L21.22 13.69L22.08 10.5M21.22 13.69L15.97 4.59C15.31 3.59 13.83 3.51 13.06 4.43L11.94 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBox = (props: IconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.25 9.92L14 4.67L22.75 9.92V20.42L14 25.08L5.25 20.42V9.92Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M5.83 10.5L14 15.17L22.17 10.5M14 15.17V24.5M9.33 7.58L18.08 12.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFiber = (props: IconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 8.75H14C17.87 8.75 21 11.88 21 15.75V16.33C21 18.27 19.44 19.83 17.5 19.83H14C10.13 19.83 7 16.7 7 12.83V8.75Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M10.5 12.25H17.5M11.67 15.75H19.25M7 8.75L5.25 5.83M21 16.33L23.33 19.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const impactCards = [
  {
    title: 'Donasi Pakaian',
    subtitle: 'Disalurkan tepat sasaran',
    Icon: IconDonate,
    accent: 'text-gold',
    stats: [
      ['Donatur', '2', 'Orang'],
      ['Total pcs', '5', 'Pakaian diterima'],
    ],
    readyValue: '5',
    readyUnit: 'pcs',
    readyLabel: 'Siap Didonasikan',
    ReadyIcon: IconBox,
    emissionLabel: 'Carbon Emissions Saved',
    emissionDetail: 'Setara dengan ~28 tahun menyalakan AC 1 PK.',
    emissionSpacer: '',
    buttonLabel: 'Donasikan Pakaianmu',
    buttonTone: 'gold',
  },
  {
    title: 'IJOL Fiber - Daur Ulang',
    subtitle: 'Pakaian menjadi material baru',
    Icon: IconRecycle,
    accent: 'text-brown',
    stats: [
      ['Pengirim', '2', 'Orang'],
      ['Total berat', '5', 'kg tekstil'],
    ],
    readyValue: '5',
    readyUnit: 'kg tekstil',
    readyLabel: 'Siap Daur Ulang',
    ReadyIcon: IconFiber,
    emissionLabel: 'Landfill Emissions Saved',
    emissionDetail: '',
    emissionSpacer: ' | Setara dengan ~28 tahun menyalakan AC 1 PK.',
    buttonLabel: 'Daur Ulang Pakaian',
    buttonTone: 'brown',
  },
] as const;

const emissionBackgrounds = [
  {
    image: assets.carbonBg,
    className: 'right-[-6%] w-[58%] max-w-[285px] object-[42%_center]',
    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, #000 48%, #000 100%)',
  },
  {
    image: assets.carbonBgLeft,
    className: 'right-[-6%] w-[58%] max-w-[285px] object-left',
    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, #000 48%, #000 100%)',
  },
] as const;

const SustainabilitySection = () => {
  return (
    <section className="bg-cream-soft py-16" id="donate">
      <Container>
        <div className="text-center">
          <p className="text-xs font-extrabold text-gold">Live Impact</p>
          <h2 className="mt-4 font-display text-4xl font-normal tracking-normal text-brown">
            Kontribusi nyata, terukur, berkelanjutan
          </h2>
          <p className="mt-3 text-xl text-brown/45">Pilih caramu, donasi atau daur ulang</p>
        </div>

        <div className="mx-auto mt-16 overflow-hidden rounded-[28px] bg-sand p-0 shadow-soft">
          <div className="grid gap-0 rounded-[28px] bg-white p-8 lg:grid-cols-2 lg:p-10">
            {impactCards.map((card, index) => {
              const background = emissionBackgrounds[index] ?? emissionBackgrounds[0];

              return (
                <article key={card.title} className={index === 0 ? 'border-b border-line pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12' : 'pt-8 lg:pl-12 lg:pt-0'}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-cream text-gold">
                      <card.Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-extrabold ${card.accent}`}>{card.title}</h3>
                      <p className="text-sm text-brown/55">{card.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {card.stats.map(([label, value, unit]) => (
                      <div key={label} className="rounded-2xl border border-line bg-white px-5 py-4 text-center">
                        <p className="text-sm font-bold text-brown">{label}</p>
                        <strong className="mt-2 block font-display text-4xl font-normal leading-none text-gold">{value}</strong>
                        <span className="mt-2 block text-xs text-brown/55">{unit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-full bg-cream px-8 py-4 text-brown">
                    <div>
                      <strong className="text-3xl leading-none">{card.readyValue}</strong>
                      <span className="ml-1 text-sm text-brown/55">{card.readyUnit}</span>
                      <p className="text-sm text-brown/70">{card.readyLabel}</p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gold text-white">
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
                          {card.emissionLabel}
                          {card.emissionDetail && <span className="font-normal"> | {card.emissionDetail}</span>}
                          {card.emissionSpacer && (
                            <span className="invisible font-normal" aria-hidden="true">
                              {card.emissionSpacer}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button href={index === 0 ? '#donate' : '#recycle'} variant="outline" className={card.buttonTone === 'gold' ? 'mt-6 w-full border-gold text-gold' : 'mt-6 w-full border-brown text-brown'}>
                    {card.buttonLabel}
                  </Button>
                </article>
              );
            })}
          </div>
          <p className="py-4 text-center text-sm text-brown/45">Terakhir diperbarui: 22 Mei 2026</p>
        </div>
      </Container>
    </section>
  );
};

export default SustainabilitySection;
