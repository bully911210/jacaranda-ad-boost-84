
import { Button } from "@/components/ui/button";

const LeadCaptureSection = () => {
  const scrollToCalendly = () => {
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    if (calendlyWidget) {
      calendlyWidget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calendly-section" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Get Started Today – Book Your Free Meta Ads Strategy Call
          </h2>
          <p className="font-open-sans text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover how we can transform your advertising results. Schedule a complimentary strategy session 
            to discuss your goals and receive a custom campaign roadmap.
          </p>
          
          {/* Calendly Embed */}
          <div className="max-w-3xl mx-auto mb-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/badenhorst-franz/meta-ads-strategy-call?hide_gdpr_banner=1&primary_color=e27cff" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
          </div>
          
          {/* Fallback CTA Button */}
          <Button 
            onClick={scrollToCalendly}
            className="bg-jacaranda hover:bg-jacaranda-700 text-white font-open-sans font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
