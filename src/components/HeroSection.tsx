
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-jacaranda text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-jacaranda-600 to-jacaranda-800 opacity-90"></div>
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            More Leads. Faster Responses. Higher Conversions.
          </h1>
          <h2 className="font-open-sans text-lg md:text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
            We don't just run ads—we engineer your entire sales pipeline.
          </h2>
          <Button 
            onClick={scrollToCalendly}
            variant="outline" 
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-jacaranda font-open-sans font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book a Call with the Expert
          </Button>
          <div className="mt-8 font-open-sans text-sm opacity-75">
            Because speed closes deals - and we make speed happen.
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
