import CarbonSection from '@/components/home/CarbonSection';
import CatalogSection from '@/components/home/CatalogSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import HeroSection from '@/components/home/HeroSection';
import ImpactSection from '@/components/home/ImpactSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import TrendSection from '@/components/home/TrendSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <CatalogSection />
      <TrendSection />
      <SustainabilitySection />
      <CarbonSection />
      <EcosystemSection />
    </>
  );
};

export default HomePage;
