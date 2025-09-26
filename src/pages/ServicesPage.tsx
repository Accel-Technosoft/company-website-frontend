import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, ArrowLeft } from 'lucide-react';
import { services } from '../data';

const ServicesPage = () => {
  const { slug } = useParams();
  
  // If slug is provided, show individual service detail
  if (slug) {
    const service = services.find(s => s.slug === slug);
    
    if (!service) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">Service Not Found</h1>
            <p className="text-secondary-600">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-secondary-50 py-8">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-secondary-600">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary-600">Services</Link>
              <span>/</span>
              <span className="text-secondary-900">{service.title}</span>
            </nav>
          </div>
        </section>

        {/* Service Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-secondary-900">{service.title}</h1>
                  <p className="text-xl text-secondary-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>
                
                {service.pricing && (
                  <div className="bg-primary-50 rounded-lg p-6">
                    <div className="text-sm font-medium text-primary-700 mb-2">Starting Price</div>
                    <div className="text-2xl font-bold text-primary-600">{service.pricing}</div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/services" className="btn-outline inline-flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    All Services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Service Type</span>
                      <span className="font-medium text-secondary-900">{service.title}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Features</span>
                      <span className="font-medium text-secondary-900">{service.features.length}+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Benefits</span>
                      <span className="font-medium text-secondary-900">{service.benefits.length}+</span>
                    </div>
                    {service.pricing && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-secondary-600">Starting Price</span>
                        <span className="font-medium text-primary-600">{service.pricing}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Features */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-secondary-900">Key Features</h2>
                  <p className="text-secondary-600">
                    Comprehensive features designed to meet your business needs and drive success.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-secondary-900">Key Benefits</h2>
                  <p className="text-secondary-600">
                    Tangible benefits that will transform your business operations and growth.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Let's discuss how {service.title.toLowerCase()} can benefit your business and help you achieve your goals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                  Get Free Consultation
                </Link>
                <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Show services listing page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Our Services</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Comprehensive IT solutions designed to empower your business with cutting-edge technology and expert support.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card group hover:shadow-2xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <div className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300">
                      <CheckCircle className="w-full h-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-secondary-900">{service.title}</h3>
                    <p className="text-secondary-600 leading-relaxed">{service.shortDescription}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-secondary-700">Key Features:</div>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-secondary-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.pricing && (
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="text-sm text-primary-700 mb-1">Starting from</div>
                      <div className="text-lg font-bold text-primary-600">{service.pricing}</div>
                    </div>
                  )}
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Why Choose Our Services?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Expert Team</h3>
              <p className="text-secondary-600">Certified professionals with years of experience</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Quality Assurance</h3>
              <p className="text-secondary-600">Rigorous testing and quality control processes</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Fast Delivery</h3>
              <p className="text-secondary-600">Efficient project management and timely delivery</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">24/7 Support</h3>
              <p className="text-secondary-600">Round-the-clock support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Contact us today to discuss your requirements and get a customized solution for your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Get Free Consultation
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;