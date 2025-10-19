'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-yellow-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-8">
                <span className="animate-pulse mr-2">🎆</span>
                New Company, Trusted Partners - Your Solar Future Starts Here
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Power Your Future
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  with Smart Energy
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
Empower Your Future with Clean.                                                                                                                                                     
Join India's Green Energy revolution , begin your sustainable energy journey with us and unlock innovation, savings, and expert guidance for a cleaner tomorrow.
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/services"
                  className="group border-2 border-blue-500 text-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/50"
                >
                  Explore Services
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Expert Partners
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Quality Installation
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated Support
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
              <span className="mr-2">⭐</span>
              Why Choose Solar Energy?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              The Smart Energy Choice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the transformative benefits of solar energy for your home, business, and our planet's future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Smart Savings</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  With Sunrise India's proven expertise and 10+ years of experience, we deliver solar systems 
                  designed to maximize your energy savings from day one.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">Future</span>
                    <p className="text-sm text-gray-500">Ready Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Eco-Friendly</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Join the clean energy movement with us. Every installation contributes to a more 
                  sustainable future for our planet.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">Green</span>
                    <p className="text-sm text-gray-500">Energy Future</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Smart Investment</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Solar installations are a smart investment in your property's future, backed by 
                  our experienced partner's proven track record.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">Smart</span>
                    <p className="text-sm text-gray-500">Investment Choice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built on Experience
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              While we're new, our partner Sunrise India brings over a decade of proven solar expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">New</div>
                <div className="text-green-100 font-medium text-lg">Fresh Start</div>
                <div className="w-12 h-1 bg-white/50 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-green-100 font-medium text-lg">Years Sunrise India Experience</div>
                <div className="w-12 h-1 bg-white/50 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-green-100 font-medium text-lg">Commitment</div>
                <div className="w-12 h-1 bg-white/50 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-green-100 font-medium text-lg">Customer Support</div>
                <div className="w-12 h-1 bg-white/50 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-8">
              <span className="animate-pulse mr-2">⚡</span>
              Ready to Go Solar?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Start Your 
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Solar Journey
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Be among our first customers and experience the perfect blend of fresh innovation 
              and proven expertise in solar energy solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Quote
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <div className="text-center">
                <p className="text-gray-500 text-sm">✓ Experienced partners</p>
                <p className="text-gray-500 text-sm">✓ Quality guarantee</p>
                <p className="text-gray-500 text-sm">✓ Free consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
