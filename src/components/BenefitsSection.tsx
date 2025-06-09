
import { Zap, Target, BarChart3, Cog } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Lead Delivery",
      description: "Automated pipelines deliver leads to your CRM, WhatsApp, and sales team in seconds—not hours."
    },
    {
      icon: Target,
      title: "End-to-End Strategy",
      description: "Ad strategy, creative, copy, automation, and analytics—we handle your complete sales funnel."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "Transparent reporting and performance insights. No guesswork, just measurable ROI."
    },
    {
      icon: Cog,
      title: "Custom Integrations",
      description: "Our on-call developer team customises and integrates fast with your existing systems."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Why Speed-to-Lead Wins
            </h2>
            <p className="font-open-sans text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Faster response times mean more deals closed. We automate your entire lead journey from Meta ads to your sales team.
            </p>
          </div>
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
      </div>
    </section>
  );
};

export default BenefitsSection;
