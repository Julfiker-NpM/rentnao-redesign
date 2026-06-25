import { HeroSection } from '@/components/home/HeroSection';
import { SearchSection } from '@/components/home/SearchSection';
import { TrustMetrics } from '@/components/home/TrustMetrics';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { WalletSection } from '@/components/home/WalletSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SearchSection />
      <TrustMetrics />
      <BenefitsSection />
      <FeaturedProperties />
      <ComparisonSection />
      <WalletSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
