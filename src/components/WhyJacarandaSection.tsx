
import { Clock, Cpu, TrendingUp, Users } from "lucide-react";

const WhyJacarandaSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Speed-to-Lead Obsessed",
      description: "Automated delivery in under 2 minutes means more deals closed."
    },
    {
      icon: Cpu, 
      title: "Tech Integration Experts",
      description: "Our developers integrate with any CRM, WhatsApp, SMS, or email platform."
    },
    {
      icon: TrendingUp,
      title: "Performance-Driven",
      description: "Data-driven campaigns with transparent ROI reporting, not vanity metrics."
    },
    {
      icon: Users,
      title: "Proudly South African",
      description: "Local market expertise with global-standard automation technology."
    }
  ];

  return (
    <section className="bg-jacaranda text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Why Jacaranda Media?
            </h2>
            <p className="font-open-sans text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
              We combine cutting-edge Meta advertising with sophisticated automation technology. 
              Your leads don't just convert—they convert fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-open-sans opacity-90 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJacarandaSection;
