import CarbonSection from '@/features/landing/components/CarbonSection';
import CatalogSection from '@/features/landing/components/CatalogSection';
import EcosystemSection from '@/features/landing/components/EcosystemSection';
import HeroSection from '@/features/landing/components/HeroSection';
import ImpactSection from '@/features/landing/components/ImpactSection';
import SustainabilitySection from '@/features/landing/components/SustainabilitySection';
import TrendSection from '@/features/landing/components/TrendSection';

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
