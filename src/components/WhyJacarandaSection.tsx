
import { Check } from "lucide-react";

const WhyJacarandaSection = () => {
  const features = [
    "Specialized Expertise",
    "Proven Track Record", 
    "Comprehensive Service",
    "Transparent Reporting"
  ];

  return (
    <section className="bg-jacaranda text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-8">
                Why Jacaranda Media?
              </h2>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-jacaranda" />
                    </div>
                    <span className="font-open-sans text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <p className="font-open-sans text-lg opacity-90 leading-relaxed">
                We combine deep insurance industry knowledge with cutting-edge Meta advertising strategies. 
                Our data-driven approach ensures every dollar spent delivers maximum impact for your business growth.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl"></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-jacaranda rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-4">
                    Ready to Scale Your Business?
                  </h3>
                  <p className="font-open-sans opacity-90">
                    Join hundreds of successful campaigns that drive real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJacarandaSection;
