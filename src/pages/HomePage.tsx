import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';
import { companyInfo, services, featuredTestimonials } from '../data';

const HomePage = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                  {companyInfo.tagline}
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  {companyInfo.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary inline-flex items-center justify-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Get Started Today
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{companyInfo.employees}</div>
                  <div className="text-sm text-secondary-600">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-secondary-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Digital Transformation</h3>
                      <p className="text-secondary-600 text-sm">Modernizing businesses across Uganda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Expert Team</h3>
                      <p className="text-secondary-600 text-sm">Certified professionals ready to help</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Proven Results</h3>
                      <p className="text-secondary-600 text-sm">Delivering success since 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Our Core Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to meet the unique needs of businesses across Uganda and East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="card group hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <div className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300">
                      {/* Icon placeholder - you can replace with actual icons */}
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
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-secondary-900">Why Choose TechSolutions Uganda?</h2>
                <p className="text-xl text-secondary-600">
                  We combine local expertise with global standards to deliver exceptional technology solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local Expertise, Global Standards</h3>
                    <p className="text-secondary-600">Deep understanding of the Ugandan market combined with international best practices.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Dedicated Support Team</h3>
                    <p className="text-secondary-600">24/7 support from our certified technicians and project managers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Proven Track Record</h3>
                    <p className="text-secondary-600">Successfully delivered 100+ projects across various industries since 2019.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary-900">Our Mission</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {companyInfo.mission}
                  </p>
                  
                  <div className="border-t border-secondary-200 pt-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3">Our Vision</h4>
                    <p className="text-secondary-600">
                      {companyInfo.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">What Our Clients Say</h2>
            <p className="text-xl text-secondary-600">
              Don't just take our word for it - hear from our satisfied clients across Uganda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-secondary-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-secondary-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                      <div className="text-sm text-secondary-600">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                Let's discuss how our technology solutions can help your business grow and succeed in the digital age.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Get Free Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;