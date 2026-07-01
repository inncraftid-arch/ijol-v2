import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { assets } from '@/constants/assets';

const EcosystemSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#c98f37] via-[#d8a551] to-[#8b642f] py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={assets.sec6Hero} alt="People sharing circular fashion" className="w-full rounded-8 shadow-soft" />
            <span className="absolute -right-3 top-8 rounded-full bg-white px-4 py-2 text-xs font-bold text-brown shadow-card">
              CO₂e Terjaga Harian
            </span>
            <span className="absolute bottom-7 left-8 rounded-full bg-white px-4 py-2 text-xs font-bold text-brown shadow-card">
              Pakaian terselamatkan
            </span>
          </div>
          <div className="text-white">
            <h2 className="font-display text-5xl font-normal leading-tight tracking-normal">Build Indonesia’s Circular Fashion Ecosystem</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/78">
              Brand, NGO, komunitas, dan pembuat gaya bisa bergerak bersama. IJOL menyatukan pertukaran, donasi, dan daur ulang
              dalam satu ekosistem fashion yang terukur.
            </p>
            <Button href="#contact" variant="dark" className="mt-8">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;
