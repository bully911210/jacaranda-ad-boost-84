
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProofSection from '@/components/SocialProofSection';
import WhyJacarandaSection from '@/components/WhyJacarandaSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import CampaignFeaturesSection from '@/components/CampaignFeaturesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <WhyJacarandaSection />
      <LeadCaptureSection />
      <CampaignFeaturesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
