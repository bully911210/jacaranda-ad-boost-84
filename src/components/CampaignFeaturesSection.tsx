
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CampaignFeaturesSection = () => {
  const features = [
    {
      category: "Categorical Advertising",
      focus: {
        text: "Pinpoint targeting",
        roi: "20% lead quality in 30 days"
      },
      benefit: {
        text: "Increased lead quality",
        roi: "35% growth in 60 days"
      }
    },
    {
      category: "Detailed Targeting",
      focus: {
        text: "Conversion-ready audiences",
        roi: "15% conversion in 60 days"
      },
      benefit: {
        text: "Data-driven retargeting",
        roi: "20% success in 45 days"
      }
    },
    {
      category: "Creative Content",
      focus: {
        text: "Scroll-stopping visuals",
        roi: "25% engagement in 45 days"
      },
      benefit: {
        text: "Real engagement",
        roi: "40% rates in 30 days"
      }
    },
    {
      category: "CRM & Lead Automation",
      focus: {
        text: "Automated workflows",
        roi: "30% efficiency in 90 days"
      },
      benefit: {
        text: "Lightning-fast contact",
        roi: "25% resolution in 60 days"
      }
    },
    {
      category: "Performance Analytics",
      focus: {
        text: "Adaptive learning",
        roi: "10% performance in 30 days"
      },
      benefit: {
        text: "Granular A/B testing",
        roi: "15% uplift in 30 days"
      }
    }
  ];

  return (
    <TooltipProvider>
      <section style={{ backgroundColor: '#4B0082' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white text-center mb-12">
              Advertising Campaign Features
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="font-sans font-semibold text-gray-800 p-4 text-left border-b">
                      Characteristic
                    </th>
                    {features.map((feature, index) => (
                      <th key={index} className="font-sans font-semibold text-gray-800 p-4 text-left border-b min-w-[150px]">
                        {feature.category}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="font-sans font-semibold text-gray-900 p-4 border-b bg-gray-50">
                      Focus
                    </td>
                    {features.map((feature, index) => (
                      <td key={index} className="p-4 border-b">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="font-sans text-gray-700 cursor-help hover:text-purple-600 transition-colors">
                              {feature.focus.text}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-sans">ROI: {feature.focus.roi}</p>
                          </TooltipContent>
                        </Tooltip>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="font-sans font-semibold text-gray-900 p-4 border-b bg-gray-100">
                      Benefit
                    </td>
                    {features.map((feature, index) => (
                      <td key={index} className="p-4 border-b">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="font-sans text-gray-700 cursor-help hover:text-purple-600 transition-colors">
                              {feature.benefit.text}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-sans">ROI: {feature.benefit.roi}</p>
                          </TooltipContent>
                        </Tooltip>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default CampaignFeaturesSection;
