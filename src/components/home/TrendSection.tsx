import Container from '@/components/common/Container';
import { trendCards } from '@/constants/content';

const TrendSection = () => {
  return (
    <section className="bg-[radial-gradient(circle_at_53%_50%,#75583a_0%,#5e452c_40%,#453421_100%)] py-16 text-white" id="trend">
      <Container>
        <p className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold text-white">Available Soon</p>
        <h2 className="mt-4 font-display text-4xl font-normal tracking-normal md:text-5xl">Rekomendasi Berdasarkan Trend</h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-cream/85">Kamu cari pakaian unik untuk acara tertentu? Lihat pilihan yang bisa kamu tukar di bawah ini.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {trendCards.map((card) => (
            <article key={card.title} className="group overflow-hidden rounded-xl bg-white/10">
              <img
                src={card.image}
                alt={card.title}
                className="aspect-[194/244] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendSection;
