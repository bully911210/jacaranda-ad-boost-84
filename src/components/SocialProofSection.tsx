
const SocialProofSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Results Showcase */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-4xl text-jacaranda mb-2">
                    +40%
                  </div>
                  <div className="font-open-sans text-gray-600">
                    More Qualified Leads
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-4xl text-jacaranda mb-2">
                    &lt;2min
                  </div>
                  <div className="font-open-sans text-gray-600">
                    Average Response Time
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="font-open-sans text-sm text-gray-500 italic">
                    Client Results
                    <br />
                    60 Day Campaign
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="text-center mb-16">
            <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-8">
              Trusted Across Key Industries
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-montserrat font-bold text-lg text-jacaranda mb-3">Insurance</h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  FSCA-compliant campaigns with automated lead scoring and instant broker alerts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-montserrat font-bold text-lg text-jacaranda mb-3">Non-Profits</h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  Donor acquisition and engagement campaigns with CRM integration and follow-up automation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-montserrat font-bold text-lg text-jacaranda mb-3">Service-Based SMEs</h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  Lead generation with instant WhatsApp and SMS notifications to your sales team.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-open-sans text-gray-700 mb-4 italic">
                "Jacaranda Media revolutionised our lead response time. We're now following up within minutes, not hours. Our conversion rate has never been higher."
              </p>
              <div className="font-open-sans text-sm text-jacaranda font-semibold">
                Pieter van der Merwe, Sales Director at InsureTech Solutions
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-open-sans text-gray-700 mb-4 italic">
                "The automation integration is seamless. Leads flow directly into our CRM and trigger immediate SMS alerts. Game-changing for our sales team."
              </p>
              <div className="font-open-sans text-sm text-jacaranda font-semibold">
                Sarah Johnson, Marketing Manager at Community Care Foundation
              </div>
            </div>
          </div>

          {/* Authority Markers */}
          <div className="text-center">
            <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-8">
              Recognised Excellence
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                Meta Business Partner
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                Top 1% Performance Agency
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm font-open-sans font-semibold text-gray-700">
                South African Digital Marketing Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
