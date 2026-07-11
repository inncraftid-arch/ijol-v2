import Container from '@/components/layout/Container';
import { IconCircularClothes, IconCircularDonate, IconCircularRecycle } from '@/assets/icons/impact';
import {
  IconUploadGuidelineBrand,
  IconUploadGuidelineCategory,
  IconUploadGuidelineHanger,
  IconUploadGuidelineNoUnderwear,
  IconUploadGuidelineWash,
} from '@/assets/icons/uploadGuidelines';
import { circularPaths, swapSteps } from '@/features/landing/data/landing.data';
import { useTranslation } from 'react-i18next';

const circularPathIcons = [IconCircularClothes, IconCircularDonate, IconCircularRecycle] as const;

const uploadGuidelines = [
  ['impact.guidelines.wash', IconUploadGuidelineWash],
  ['impact.guidelines.clean', IconUploadGuidelineHanger],
  ['impact.guidelines.category', IconUploadGuidelineCategory],
  ['impact.guidelines.brand', IconUploadGuidelineBrand],
  ['impact.guidelines.underwear', IconUploadGuidelineNoUnderwear],
] as const;

const ImpactSection = () => {
  const { t } = useTranslation('landing');
  return (
    <section className="scroll-mt-22 bg-mist py-16" id="impact">
      <Container>
        <div className="relative grid gap-12 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:gap-y-0">
          <div
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-line lg:block"
            aria-hidden="true"
          />

          <div className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
            <h2 className="font-display text-[40px] leading-10 font-normal tracking-normal text-brown">
              {t('impact.landfillTitle')}
            </h2>
            <p className="mt-3 max-w-2xl text-xl leading-7 text-brown/65">{t('impact.landfillDescription')}</p>
            <div className="mt-8 grid gap-4">
              {circularPaths.map((item, index) => {
                const Icon = circularPathIcons[index];

                return (
                  <article
                    key={item.titleKey}
                    className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#EAE1D8] text-brown">
                      <Icon className="h-6 w-6 text-brown" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-4 text-gold">{t(item.titleKey)}</h3>
                      <p className="mt-1 text-xs leading-4 text-brown/60">{t(item.descriptionKey)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
            <h2 className="font-display text-[40px] leading-10 font-normal tracking-normal text-brown">
              {t('impact.swapTitle')}
            </h2>
            <p className="mt-3 max-w-2xl text-xl leading-7 text-brown/65">{t('impact.swapDescription')}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {swapSteps.map(([title, description, Icon], index) => (
                <article key={title} className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <Icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-base leading-4 text-brown">
                      {index + 1}. {t(title)}
                    </h3>
                    <p className="mt-1 text-xs leading-4 text-brown/55">{t(description)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          id="upload"
          className="mt-10 rounded-2xl bg-linear-to-r from-brown to-brown-gradient px-6 py-5 text-white shadow-soft md:px-8"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <div className="shrink-0">
              <p className="text-xs font-bold text-gold-soft">{t('impact.guidelines.eyebrow')}</p>
              <h3 className="mt-1 font-display text-2xl font-normal tracking-normal">{t('impact.guidelines.title')}</h3>
            </div>
            <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-5 lg:ml-auto lg:w-fit lg:grid-flow-col lg:grid-cols-none lg:auto-cols-max lg:gap-4 lg:pl-8">
              {uploadGuidelines.map(([label, Icon]) => (
                <div key={label} className="flex min-w-0 flex-col items-center gap-2 px-2 text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/55 bg-guideline-circle text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-medium leading-5 text-cream/90 lg:whitespace-nowrap">{t(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactSection;
