
const SocialProofSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Case Study Stats */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-4xl text-jacaranda mb-2">
                    +40%
                  </div>
                  <div className="font-open-sans text-gray-600">
                    Qualified Leads
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-4xl text-jacaranda mb-2">
                    $40
                  </div>
                  <div className="font-open-sans text-gray-600">
                    Cost Per Lead
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="font-open-sans text-sm text-gray-500 italic">
                    InsureCo Results
                    <br />
                    2 Month Campaign
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-open-sans text-gray-700 mb-4 italic">
                "Jacaranda Media transformed our lead generation. Their strategic approach to Meta ads delivered qualified prospects we never thought possible."
              </p>
              <div className="font-open-sans text-sm text-jacaranda font-semibold">
                Sarah Johnson, Marketing Director at SecureLife Insurance
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-open-sans text-gray-700 mb-4 italic">
                "The ROI speaks for itself. Professional, data-driven, and results that exceeded our expectations. Highly recommended."
              </p>
              <div className="font-open-sans text-sm text-jacaranda font-semibold">
                Michael Chen, CEO at Guardian Benefits Group
              </div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="text-center">
            <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                Meta Business Partner
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                Insurance Marketing Excellence Award
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                Top 1% Performance Agency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
