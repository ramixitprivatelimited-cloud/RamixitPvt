import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Energy Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {"Comprehensive smart energy solutions tailored to meet your specific needs. From consultation to installation and maintenance, we've got you covered."}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Residential Solar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Solar</h3>
                <p className="text-gray-600 mb-6">
                  {"Custom solar panel systems designed specifically for your home. Reduce your electricity bills and increase your property value."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Free home energy assessment"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Custom system design"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Professional installation"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Sunrise India-backed warranty"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Commercial Solar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Solar</h3>
                <p className="text-gray-600 mb-6">
                  {"Commercial solar solutions backed by our partner's decade of experience. Professional installations that maximize savings and environmental impact."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Energy usage analysis"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Scalable system design"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Project management"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Performance monitoring"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Solar Maintenance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar Maintenance</h3>
                <p className="text-gray-600 mb-6">
                  {"Keep your solar system running at peak performance with our comprehensive maintenance and monitoring services."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Regular system cleaning"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Performance monitoring"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Component inspections"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Repair services"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Schedule Service
                </Link>
              </div>
            </div>

            {/* Energy Storage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Storage</h3>
                <p className="text-gray-600 mb-6">
                  {"Store excess solar energy with our advanced battery storage solutions. Ensure power availability even during outages."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Battery system design"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Backup power solutions"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Smart energy management"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Grid independence"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Energy Consultation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Consultation</h3>
                <p className="text-gray-600 mb-6">
                  {"Expert guidance on energy efficiency and solar feasibility. We help you make informed decisions about your energy future."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Energy audit services"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"ROI analysis"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Financing options"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Incentive guidance"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Installation & Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{"Installation & Support"}</h3>
                <p className="text-gray-600 mb-6">
                  {"Professional installation by certified technicians with ongoing support to ensure your solar system performs optimally."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Certified installers"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"Permit handling"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"System commissioning"}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {"24/7 customer support"}
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {"From initial consultation to system activation, we make going solar simple and stress-free."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                {"Free assessment of your energy needs and solar potential."}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                {"Custom system design optimized for your property and energy goals."}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">
                {"Professional installation by certified technicians."}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Activation</h3>
              <p className="text-gray-600">
                {"System testing, activation, and ongoing monitoring support."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {"Ready to Go Solar?"}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {"Take the first step towards energy independence. Contact us today for a free consultation."}
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            {"Get Free Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
