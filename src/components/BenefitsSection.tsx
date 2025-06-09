
import { Target, Lightbulb, TrendingUp, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Meta Ad Strategy & Setup",
      description: "Tailored campaigns that hit your target audience."
    },
    {
      icon: Lightbulb,
      title: "Creative Ads & Copywriting",
      description: "Engaging visuals & headlines crafted for clicks."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Analytics",
      description: "Continuous A/B testing to maximize conversions."
    },
    {
      icon: Shield,
      title: "Industry Expertise",
      description: "Proven success in insurance marketing—scales to any sector."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-jacaranda-50 rounded-full flex items-center justify-center group-hover:bg-jacaranda-100 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-jacaranda" />
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-4 text-gray-900 leading-tight">
                {benefit.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
