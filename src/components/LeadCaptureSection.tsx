
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
            Ready to Engineer Your Sales Pipeline?
          </h2>
          <p className="font-open-sans text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Book a strategy call with our Meta Ads and automation experts. 
            Let's discuss how to turn your ad spend into a lead-generating machine.
          </p>
          
          {/* Calendly Embed with wrapper */}
          <div className="max-w-3xl mx-auto mb-8 border border-gray-200 rounded-lg overflow-hidden">
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
            Book a Call with the Expert
          </Button>
          
          <div className="mt-8 font-open-sans text-sm text-gray-500 italic">
            Because speed closes deals - and we make speed happen.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
