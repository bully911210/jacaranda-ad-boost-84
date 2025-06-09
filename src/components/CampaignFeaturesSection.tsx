
import { useEffect, useState } from 'react';
import { Target, Zap, Clock, Mail, Database, RotateCcw, DollarSign, Heart } from 'lucide-react';

const CampaignFeaturesSection = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 8); // Extended to 8 steps for the new animation
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Calculate lead position and color for typical agency flow
  const getTypicalLeadStyle = () => {
    if (animationStep === 0) return { left: '0%', backgroundColor: '#FF9800', opacity: 1 };
    if (animationStep === 1) return { left: '25%', backgroundColor: '#FFC107', opacity: 1 };
    if (animationStep === 2) return { left: '50%', backgroundColor: '#FFEB3B', opacity: 1 };
    if (animationStep === 3) return { left: '75%', backgroundColor: '#9E9E9E', opacity: 1 };
    if (animationStep === 4) return { left: '100%', backgroundColor: '#808080', opacity: 1 };
    if (animationStep >= 5) return { left: '100%', backgroundColor: '#808080', opacity: 0 };
    return { left: '0%', backgroundColor: '#FF9800', opacity: 0 };
  };

  // Calculate lead position for Jacaranda flow
  const getJacarandaLeadStyle = () => {
    if (animationStep === 0) return { left: '0%', opacity: 1 };
    if (animationStep === 1) return { left: '25%', opacity: 1 };
    if (animationStep === 2) return { left: '50%', opacity: 1 };
    if (animationStep === 3) return { left: '75%', opacity: 1 };
    if (animationStep >= 4) return { left: '100%', opacity: 1 };
    return { left: '0%', opacity: 0 };
  };

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

          {/* Process Flow Comparison */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="font-sans font-bold text-2xl text-gray-900 text-center mb-12">
              The Process Flow Comparison
            </h3>
            
            <div className="space-y-16">
              {/* Top Timeline: Typical Agency Flow */}
              <div className="relative">
                <h4 className="font-sans font-bold text-xl text-gray-700 mb-8 text-center">
                  Typical Agency Flow
                </h4>
                
                <div className="relative h-24 bg-gray-50 rounded-lg p-6">
                  {/* Timeline */}
                  <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                  
                  {/* Lead Icon */}
                  <div 
                    className="absolute top-1/2 w-4 h-4 rounded-full transform -translate-y-1/2 transition-all duration-1500 ease-out"
                    style={{
                      ...getTypicalLeadStyle(),
                      left: `calc(${getTypicalLeadStyle().left} * 0.8 + 8%)`,
                    }}
                  ></div>
                  
                  {/* Labels */}
                  {animationStep === 0 && (
                    <div className="absolute top-2 left-8 text-sm text-gray-600 font-semibold animate-fade-in">
                      New Lead
                    </div>
                  )}
                  
                  {animationStep >= 4 && animationStep <= 5 && (
                    <div className="absolute top-2 right-8 text-sm text-gray-600 font-semibold animate-fade-in flex items-center gap-1">
                      Lead Gone Cold
                      <Heart className="w-4 h-4 text-red-500 fill-current" style={{ transform: 'scale(-1, 1)' }} />
                    </div>
                  )}
                </div>
                
                <p className="font-sans text-gray-600 mt-4 text-center">
                  Slow • Passive • Value-Destroying
                </p>
              </div>

              {/* Bottom Timeline: The Jacaranda Flow */}
              <div className="relative">
                <h4 className="font-sans font-bold text-xl text-purple-700 mb-8 text-center">
                  The Jacaranda Flow
                </h4>
                
                <div className="relative h-24 bg-purple-50 rounded-lg p-6">
                  {/* Timeline */}
                  <div className="absolute top-1/2 left-8 right-8 h-2 bg-purple-600 transform -translate-y-1/2 rounded-full"></div>
                  
                  {/* Checkpoints */}
                  <div className="absolute top-1/2 left-[28%] transform -translate-y-1/2">
                    <Mail className={`w-6 h-6 text-purple-600 transition-all duration-300 ${
                      animationStep >= 1 ? 'scale-125 text-yellow-400' : ''
                    }`} />
                  </div>
                  
                  <div className="absolute top-1/2 left-[48%] transform -translate-y-1/2">
                    <Database className={`w-6 h-6 text-purple-600 transition-all duration-300 ${
                      animationStep >= 2 ? 'scale-125 text-yellow-400' : ''
                    }`} />
                  </div>
                  
                  <div className="absolute top-1/2 left-[68%] transform -translate-y-1/2">
                    <RotateCcw className={`w-6 h-6 text-purple-600 transition-all duration-300 ${
                      animationStep >= 3 ? 'scale-125 text-yellow-400' : ''
                    }`} />
                  </div>
                  
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <DollarSign className={`w-6 h-6 text-purple-600 transition-all duration-300 ${
                      animationStep >= 4 ? 'scale-125 text-yellow-400' : ''
                    }`} />
                  </div>
                  
                  {/* Lead Icon */}
                  <div 
                    className="absolute top-1/2 w-4 h-4 bg-white rounded-full transform -translate-y-1/2 transition-all duration-1000 ease-out border-2 border-purple-600"
                    style={{
                      left: `calc(${getJacarandaLeadStyle().left} * 0.8 + 8%)`,
                      opacity: getJacarandaLeadStyle().opacity,
                    }}
                  ></div>
                  
                  {/* Dynamic Labels */}
                  {animationStep === 1 && (
                    <div className="absolute top-2 left-[28%] transform -translate-x-1/2 text-sm text-purple-700 font-semibold animate-fade-in">
                      Instant Email/SMS Sent
                    </div>
                  )}
                  
                  {animationStep === 2 && (
                    <div className="absolute top-2 left-[48%] transform -translate-x-1/2 text-sm text-purple-700 font-semibold animate-fade-in">
                      Logged in CRM
                    </div>
                  )}
                  
                  {animationStep === 3 && (
                    <div className="absolute top-2 left-[68%] transform -translate-x-1/2 text-sm text-purple-700 font-semibold animate-fade-in">
                      Pixel Data Fed
                    </div>
                  )}
                  
                  {animationStep >= 4 && (
                    <div className="absolute top-2 right-8 transform translate-x-1/2 text-sm text-purple-700 font-semibold animate-fade-in">
                      Deal Closed / High-Value Lead
                    </div>
                  )}
                </div>
                
                <p className="font-sans text-purple-600 mt-4 text-center font-semibold">
                  Fast • Automated • Value-Adding
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
