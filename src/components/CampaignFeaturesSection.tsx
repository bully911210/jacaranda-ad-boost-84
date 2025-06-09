
import { useEffect, useState } from 'react';
import { Target, Zap, Clock, Mail, Database, RotateCcw, Phone, PhoneCall } from 'lucide-react';

const CampaignFeaturesSection = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 8); // 8 steps for the animation cycle
    }, 2000); // Slower timing for better visibility

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ backgroundColor: '#4B0082' }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white text-center mb-4">
            Stop Buying Clicks. Start Closing Deals.
          </h2>
          
          {/* Sub-headline */}
          <h3 className="font-sans font-bold text-2xl md:text-3xl text-white text-center mb-16">
            We Replaced The Broken Agency Model.
          </h3>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center text-white">
              <div className="mb-4 flex justify-center">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-sans font-bold text-xl mb-3">Surgical Targeting</h4>
              <p className="font-sans text-lg">
                We don't find audiences; we build them. Reaching only high-intent buyers ready to act.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="mb-4 flex justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-sans font-bold text-xl mb-3">Conversion-Focused Creative</h4>
              <p className="font-sans text-lg">
                Our ads don't just get seen; they get results. Every visual and word is A/B tested for one purpose: conversion.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="mb-4 flex justify-center">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-sans font-bold text-xl mb-3">Instantaneous Sales Funnel</h4>
              <p className="font-sans text-lg">
                The moment a lead submits, our system engages them via SMS/email and delivers them to your team in under 60 seconds.
              </p>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="font-sans font-bold text-2xl text-gray-900 text-center mb-12">
              The Results Comparison
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side: Typical Agency Results */}
              <div className="text-center">
                <h4 className="font-sans font-bold text-xl text-gray-700 mb-8">
                  Typical Agency Results
                </h4>
                
                <div className="relative h-80 bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                  {/* Smartphone */}
                  <div className="relative w-32 h-56 bg-black rounded-2xl p-2 shadow-lg">
                    {/* Screen */}
                    <div className={`w-full h-full rounded-xl transition-all duration-1000 ${
                      animationStep === 2 ? 'bg-gray-800' : 'bg-gray-900'
                    }`}>
                      {/* Invoice notification at step 2 */}
                      {animationStep === 2 && (
                        <div className="absolute top-4 left-2 right-2 bg-red-500 text-white text-xs p-2 rounded animate-fade-in">
                          Invoice Due: [Marketing Agency]
                        </div>
                      )}
                    </div>
                    
                    {/* Cobweb effect after step 4 */}
                    {animationStep >= 4 && (
                      <div className="absolute top-2 right-2 text-gray-400 text-xs animate-fade-in">
                        🕸️
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="font-sans text-gray-600 mt-4 font-semibold">
                  Money spent. Zero results.
                </p>
              </div>

              {/* Right Side: The Jacaranda Result */}
              <div className="text-center">
                <h4 className="font-sans font-bold text-xl text-purple-700 mb-8">
                  The Jacaranda Result
                </h4>
                
                <div className="relative h-80 bg-purple-50 rounded-lg p-8 flex items-center justify-center">
                  {/* Smartphone */}
                  <div className="relative w-32 h-56 bg-black rounded-2xl p-2 shadow-lg">
                    {/* Screen */}
                    <div className={`w-full h-full rounded-xl transition-all duration-500 ${
                      animationStep >= 1 ? 'bg-green-400' : 'bg-gray-900'
                    }`}>
                      {/* Incoming call at step 1+ */}
                      {animationStep >= 1 && (
                        <div className="absolute inset-2 flex flex-col items-center justify-center text-black animate-fade-in">
                          <PhoneCall className="w-8 h-8 mb-2 animate-pulse" />
                          <div className="text-xs font-bold">New Customer</div>
                          <div className="text-xs">Calling...</div>
                        </div>
                      )}
                      
                      {/* Active call interface at step 4+ */}
                      {animationStep >= 4 && (
                        <div className="absolute inset-2 flex flex-col items-center justify-center text-black">
                          <Phone className="w-8 h-8 mb-2 text-green-700" />
                          <div className="text-xs font-bold">Connected</div>
                          <div className="text-xs">00:15</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Notification icons */}
                  {animationStep >= 2 && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-2 animate-fade-in">
                      <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
                        <Mail className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-xs">Welcome Email Sent</span>
                      </div>
                    </div>
                  )}
                  
                  {animationStep >= 3 && (
                    <div className="absolute right-4 top-1/3 transform -translate-y-1/2 space-y-2 animate-fade-in">
                      <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
                        <Database className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-xs">Lead Synced</span>
                      </div>
                    </div>
                  )}
                  
                  {animationStep >= 4 && (
                    <div className="absolute right-4 bottom-1/3 transform translate-y-1/2 space-y-2 animate-fade-in">
                      <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
                        <RotateCcw className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-xs">Audience Updated</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <p className="font-sans text-purple-600 mt-4 font-semibold">
                  Money invested. Real customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignFeaturesSection;
