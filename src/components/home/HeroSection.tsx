import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { IconHeroHanger, IconHeroLeaf, IconHeroShirt, IconHeroStar } from '@/assets/icons/hero';
import { assets } from '@/constants/assets';

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-cream-soft pt-32 lg:pt-36">
      <Container className="grid min-h-170 items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/90 px-4 py-2 text-sm font-medium text-brown ">
            <span className="h-2 w-2 rounded-full bg-cream" />
            Swapping unused outfits, because reducing textile waste is the real fit.
          </div>
          <h1 className="mt-10 max-w-3xl font-display text-[56px] font-normal leading-18 tracking-normal text-brown ">
            Selamatkan Bumi dari <span className="text-gold">Limbah Tekstil</span> dengan Gaya Baru, Tanpa Beli Baru.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-brown/65">
            Setiap pakaian yang ditukar adalah satu langkah nyata melawan <strong className="font-extrabold text-brown">2,3 juta ton</strong> limbah tekstil Indonesia.
          </p>
          <Button href="#catalog" variant="dark" className="mt-8">
            Swap sekarang →
          </Button>
        </div>

        <div className="relative mx-auto flex min-h-130 w-full max-w-145 items-center justify-center lg:min-h-140 lg:max-w-140">
          <div className="absolute -left-8 top-8 z-20 hidden items-center gap-2 rounded-full border-[0.5px] border-gold bg-white px-5 py-3 text-xs font-semibold  text-brown/70  lg:flex">
            <IconHeroShirt className="h-5 w-5 shrink-0" aria-hidden="true" />
            Audrey wants to swap your jacket
          </div>
          <div className="absolute left-17 top-22 z-20 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-brown ">
            <IconHeroStar className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            Match Found
          </div>
          <div className="relative grid h-150 w-full max-w-135 place-items-center overflow-hidden rounded-[40px] bg-sand ">
            <div className="relative grid h-120 w-full max-w-112.5 place-items-center overflow-hidden rounded-4xl bg-[#FEF3D7] ">
              <div className="grid h-112.5 w-112.5 max-w-full place-items-center overflow-hidden rounded-6">
                <img src={assets.heroImage} alt="Two floating clothes ready to swap" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-22 right-17 z-20 inline-flex items-center gap-2 rounded-full bg-green px-3 py-1 text-xs font-bold text-white ">
            <IconHeroLeaf className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
            Saves 24.6 kg CO₂
          </div>
          <div className="absolute -right-8 bottom-8 z-20 inline-flex items-center gap-2 rounded-full border-[0.5px] border-gold bg-white px-5 py-3 text-xs font-semibold  text-brown/70 ">
            <IconHeroHanger className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            1 Clothes = 1 Swap Token
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
