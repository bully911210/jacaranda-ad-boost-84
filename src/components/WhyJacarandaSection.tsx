
import { Check, Target, TrendingUp, Users, BarChart3 } from "lucide-react";

const WhyJacarandaSection = () => {
  return (
    <section className="bg-jacaranda text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-8">
                Why Jacaranda Media?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-jacaranda-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-open-sans font-semibold text-lg mb-2">
                      Industry Expertise
                    </h3>
                    <p className="font-open-sans opacity-90">
                      Deep experience in Insurance (FSCA compliant), Non-Profits, and Service-Based Businesses across South Africa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-jacaranda-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-open-sans font-semibold text-lg mb-2">
                      Proven Performance
                    </h3>
                    <p className="font-open-sans opacity-90">
                      Track record of +40% more qualified leads in 60 days through data-driven campaigns and automation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-jacaranda-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-open-sans font-semibold text-lg mb-2">
                      On-Call Development Team
                    </h3>
                    <p className="font-open-sans opacity-90">
                      Custom integrations and rapid automation setup with our dedicated tech team for lightning-fast execution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-jacaranda-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-open-sans font-semibold text-lg mb-2">
                      Transparent Reporting
                    </h3>
                    <p className="font-open-sans opacity-90">
                      Real-time dashboards and performance insights - no guesswork, just measurable ROI.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 font-open-sans text-lg opacity-95">
                We don't just manage your ads - we handle your advertising sales funnel from first click to closed deal. 
                Our automation ensures every lead gets instant attention, maximizing your speed-to-lead advantage.
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Target className="w-16 h-16 text-jacaranda-200 mb-6" />
                <h3 className="font-montserrat font-bold text-2xl mb-4">
                  Meta Business Partner
                </h3>
                <p className="font-open-sans text-lg opacity-90 mb-6">
                  Certified experts with direct access to Meta's latest features and beta programs.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-jacaranda-200" />
                    <span>Top 1% Performance Recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-jacaranda-200" />
                    <span>Advanced API Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-jacaranda-200" />
                    <span>Priority Support Channel</span>
                  </div>
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
