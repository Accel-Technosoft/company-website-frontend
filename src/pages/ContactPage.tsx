import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  const services = [
    'Custom Software Development',
    'Managed IT Services',
    'Cybersecurity Solutions',
    'Cloud & DevOps Services',
    'Data Analytics & Business Intelligence',
    'Industry-Specific Solutions',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Get In Touch</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Ready to transform your business with technology? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Call Us</h3>
                <p className="text-secondary-600">{companyInfo.location.phone}</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Email Us</h3>
                <p className="text-secondary-600">{companyInfo.location.email}</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Visit Us</h3>
                <p className="text-secondary-600">{companyInfo.location.city}, {companyInfo.location.country}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-secondary-900">Send Us a Message</h2>
                <p className="text-secondary-600">
                  Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50border border-green-200 rounded-xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll review your message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="+256 700 123 456"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical"
                      placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-secondary-500">
                    * Required fields. We respect your privacy and will never share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-secondary-900">Contact Information</h2>
                <p className="text-secondary-600">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Office Location */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-secondary-900">Office Address</h3>
                      <div className="text-secondary-600">
                        <p>{companyInfo.location.address}</p>
                        <p>{companyInfo.location.city}, {companyInfo.location.country}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-secondary-900">Phone & Email</h3>
                      <div className="text-secondary-600 space-y-1">
                        <p>Phone: {companyInfo.location.phone}</p>
                        <p>Email: {companyInfo.location.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-secondary-900">Business Hours</h3>
                      <div className="text-secondary-600 space-y-1">
                        <p>{companyInfo.businessHours.weekdays}</p>
                        <p>{companyInfo.businessHours.saturday}</p>
                        <p>{companyInfo.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-secondary-900">Follow Us</h3>
                      <div className="flex flex-wrap gap-3">
                        {companyInfo.socialLinks.facebook && (
                          <a
                            href={companyInfo.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                          >
                            Facebook
                          </a>
                        )}
                        {companyInfo.socialLinks.twitter && (
                          <a
                            href={companyInfo.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sky-100 text-sky-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-sky-200 transition-colors"
                          >
                            Twitter
                          </a>
                        )}
                        {companyInfo.socialLinks.linkedin && (
                          <a
                            href={companyInfo.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                          >
                            LinkedIn
                          </a>
                        )}
                        {companyInfo.socialLinks.instagram && (
                          <a
                            href={companyInfo.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-100 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-pink-200 transition-colors"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary-600">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                How quickly can you start working on my project?
              </h3>
              <p className="text-secondary-600">
                We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times depending on our current capacity and project requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-secondary-600">
                Yes, we offer comprehensive post-launch support including maintenance, updates, technical support, and training. We have various support packages to meet different needs and budgets.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                What is your typical project timeline?
              </h3>
              <p className="text-secondary-600">
                Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, custom software development takes 3-6 months, and enterprise solutions can take 6-12 months. We provide detailed timelines during the planning phase.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you work with clients outside Uganda?
              </h3>
              <p className="text-secondary-600">
                Absolutely! While we're based in Uganda, we serve clients across East Africa and internationally. We have experience working with remote teams and can accommodate different time zones and communication preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Other Ways to Reach Us</h2>
            <p className="text-xl text-secondary-600">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">WhatsApp</h3>
              <p className="text-secondary-600 text-sm">
                Quick questions and instant communication
              </p>
              <a
                href={`https://wa.me/${companyInfo.location.phone.replace(/\s+/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Schedule a Call</h3>
              <p className="text-secondary-600 text-sm">
                Book a consultation at your convenience
              </p>
              <Link to="/contact" className="btn-outline">
                Schedule Meeting
              </Link>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Email Support</h3>
              <p className="text-secondary-600 text-sm">
                Detailed inquiries and documentation
              </p>
              <a
                href={`mailto:${companyInfo.location.email}`}
                className="btn-outline"
              >
                Send Email
              </a>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Visit Our Office</h3>
              <p className="text-secondary-600 text-sm">
                Face-to-face meetings and consultations
              </p>
              <Link to="/about" className="btn-outline">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Don't wait to transform your business. Contact us today for a free consultation and let's discuss how we can help you achieve your technology goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.location.phone}`}
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50"
              >
                Call Now: {companyInfo.location.phone}
              </a>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
