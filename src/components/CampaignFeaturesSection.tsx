
import { useEffect, useState } from 'react';
import { Target, Zap, Clock, Frown, Check, MessageCircle, Mail, ThumbsUp } from 'lucide-react';

const CampaignFeaturesSection = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);

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

          {/* Process Flow Animation */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="font-sans font-bold text-2xl text-gray-900 text-center mb-12">
              The Process Flow Comparison
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* LEFT SIDE - Typical Agency Flow */}
              <div className="text-center">
                <h4 className="font-sans font-bold text-xl text-gray-700 mb-8">
                  Typical Agency Flow
                </h4>
                
                <div className="relative h-64 bg-gray-100 rounded-lg p-6 overflow-hidden">
                  {/* Scattered dots animation */}
                  <div className="absolute top-4 left-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 bg-gray-400 rounded-full absolute transition-all duration-2000 ${
                          animationStep >= 1 ? 'translate-x-32 translate-y-16' : ''
                        } ${animationStep >= 2 ? 'opacity-50' : ''} ${animationStep >= 3 ? 'opacity-0' : ''}`}
                        style={{
                          top: `${i * 8}px`,
                          left: `${i * 6}px`,
                          transitionDelay: `${i * 200}ms`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Landing page with frown */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Frown className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* Cold leads box */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-gray-300 p-3 rounded text-sm text-gray-600">
                      Cold Leads
                    </div>
                  </div>
                </div>
                
                <p className="font-sans text-gray-600 mt-4">
                  Inefficient • Slow • Wasteful
                </p>
              </div>

              {/* RIGHT SIDE - Jacaranda Flow */}
              <div className="text-center">
                <h4 className="font-sans font-bold text-xl text-purple-700 mb-8">
                  The Jacaranda Flow
                </h4>
                
                <div className="relative h-64 bg-purple-50 rounded-lg p-6 overflow-hidden">
                  {/* Purple beam animation */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-2 h-32 bg-gradient-to-r from-purple-600 to-purple-400 transform transition-all duration-1000 ${
                        animationStep >= 1 ? 'translate-x-32 translate-y-8 rotate-45' : ''
                      }`}
                    />
                  </div>
                  
                  {/* Landing page with checkmark */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      animationStep >= 1 ? 'scale-110' : ''
                    }`}>
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* SMS/Email icons shooting back */}
                  {animationStep >= 2 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <MessageCircle 
                        className={`w-6 h-6 text-purple-600 absolute transition-all duration-1000 ${
                          animationStep >= 2 ? '-translate-x-16 -translate-y-8' : ''
                        }`}
                      />
                      <Mail 
                        className={`w-6 h-6 text-purple-600 absolute transition-all duration-1000 ${
                          animationStep >= 2 ? '-translate-x-20 translate-y-8' : ''
                        }`}
                      />
                    </div>
                  )}
                  
                  {/* Hot lead delivered box */}
                  <div className={`absolute bottom-4 right-4 transition-all duration-500 ${
                    animationStep >= 3 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}>
                    <div className="bg-purple-600 p-3 rounded text-sm text-white flex items-center gap-2">
                      Hot Lead Delivered
                      <ThumbsUp className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Purple lead flow */}
                  {animationStep >= 3 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div 
                        className="w-4 h-4 bg-purple-600 rounded-full transition-all duration-1000 translate-x-24 translate-y-12"
                      />
                    </div>
                  )}
                </div>
                
                <p className="font-sans text-purple-600 mt-4 font-semibold">
                  Instant • Efficient • Profitable
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
