import Container from '@/components/common/Container';
import { IconCircularClothes, IconCircularDonate, IconCircularRecycle } from '@/assets/icons/impact';
import { assets } from '@/constants/assets';
import { circularPaths, swapSteps } from '@/constants/content';

const circularPathIcons = [IconCircularClothes, IconCircularDonate, IconCircularRecycle] as const;

const uploadGuidelines = [
  ['Cuci sebelum Tukar', assets.stepCheck],
  ['Bersih & layak pakai', assets.stepDelivery],
  ['Semua kategori', assets.stepTime],
  ['Branded & non-branded', assets.stepSearch],
  ['Tidak pakaian dalam', assets.stepSwap],
] as const;

const ImpactSection = () => {
  return (
    <section className="bg-mist py-16" id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-normal tracking-normal text-brown">0 Textile to Landfill</h2>
            <p className="mt-3 max-w-xl text-brown/65">Tiga jalur sirkular untuk memperpanjang umur setiap helai pakaian di lemari.</p>
            <div className="mt-8 grid gap-4">
              {circularPaths.map((item, index) => {
                const Icon = circularPathIcons[index];

                return (
                  <article key={item.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cream text-brown">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gold">{item.title}</h3>
                      <p className="mt-1 text-xs leading-6 text-brown/60">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-normal tracking-normal text-brown">How Swap Works</h2>
            <p className="mt-3 max-w-xl text-brown/65">Dari swipe sampai paket sampai pintu, semua dalam 6 langkah.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {swapSteps.map(([title, description, icon], index) => (
                <article key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <img src={icon} alt="" className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold text-brown">
                      {index + 1}. {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-brown/55">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div id="upload" className="mt-10 rounded-2xl bg-brown px-6 py-5 text-white shadow-soft md:px-8">
          <div className="grid gap-7 md:grid-cols-[1.75fr_repeat(5,1fr)] md:items-center md:gap-4">
            <div>
              <p className="text-xs font-bold text-gold-soft">Upload Guideline</p>
              <h3 className="mt-1 font-display text-2xl font-normal tracking-normal">Aturan Upload Pakaian</h3>
            </div>
            {uploadGuidelines.map(([label, icon]) => (
              <div key={label} className="flex min-w-0 flex-col items-center gap-2 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-white/55 bg-white/5">
                  <img src={icon} alt="" className="h-6 w-6" />
                </div>
                <p className="text-xs font-medium leading-5 text-cream/90">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactSection;
