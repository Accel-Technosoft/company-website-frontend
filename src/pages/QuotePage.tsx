import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, Clock, Users, DollarSign, FileText, Send, Star } from 'lucide-react';
import { companyInfo, services, featuredTestimonials } from '../data';

interface QuoteFormData {
  // Step 1: Contact Information
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  
  // Step 2: Project Details
  serviceType: string;
  projectTitle: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  
  // Step 3: Requirements
  features: string[];
  platforms: string[];
  integrations: string[];
  additionalRequirements: string;
  
  // Step 4: Additional Info
  hasExistingSystems: boolean;
  teamSize: string;
  urgency: string;
  preferredStartDate: string;
}

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    serviceType: '',
    projectTitle: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    features: [],
    platforms: [],
    integrations: [],
    additionalRequirements: '',
    hasExistingSystems: false,
    teamSize: '',
    urgency: '',
    preferredStartDate: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleMultiSelect = (name: keyof QuoteFormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[name] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return {
        ...prev,
        [name]: newArray
      };
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const serviceOptions = services.map(service => ({
    value: service.slug,
    label: service.title,
    description: service.shortDescription
  }));

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-12-months', label: 'Over 12 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const commonFeatures = [
    'User Authentication & Authorization',
    'Database Integration',
    'API Development',
    'Admin Dashboard',
    'Mobile Responsive Design',
    'Payment Processing',
    'Real-time Notifications',
    'File Upload/Management',
    'Search & Filtering',
    'Reporting & Analytics',
    'Multi-language Support',
    'Third-party Integrations'
  ];

  const platformOptions = [
    'Web Application',
    'Mobile App (iOS)',
    'Mobile App (Android)',
    'Desktop Application',
    'Cloud Platform',
    'API/Backend Only'
  ];

  const integrationOptions = [
    'Payment Gateways (Stripe, PayPal)',
    'Social Media APIs',
    'Google Services (Maps, Analytics)',
    'Email Services (SendGrid, Mailchimp)',
    'CRM Systems (Salesforce, HubSpot)',
    'Accounting Software (QuickBooks)',
    'Mobile Money (MTN, Airtel)',
    'Banking APIs',
    'SMS Services',
    'Cloud Storage (AWS, Google Cloud)'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-secondary-900">Quote Request Submitted!</h1>
              <p className="text-xl text-secondary-600">
                Thank you for your detailed project information. Our team will review your requirements and get back to you within 24 hours with a comprehensive quote.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-secondary-200 p-8">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Review & Analysis</h4>
                    <p className="text-secondary-600 text-sm">Our team reviews your requirements and analyzes project scope.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Detailed Quote</h4>
                    <p className="text-secondary-600 text-sm">We prepare a comprehensive quote with timeline and deliverables.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Consultation Call</h4>
                    <p className="text-secondary-600 text-sm">We schedule a call to discuss details and answer questions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container-custom">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900">Get Your Project Quote</h1>
            <p className="text-xl text-secondary-600">
              Tell us about your project and we'll provide you with a detailed quote within 24 hours. No commitment required.
            </p>
            
            {/* Progress Bar */}
            <div className="bg-white rounded-full p-2 ">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= currentStep 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-200 text-secondary-600'
                    }`}>
                      {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`flex-1 h-1 mx-2 rounded ${
                        step < currentStep ? 'bg-primary-600' : 'bg-secondary-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-secondary-600">
              Step {currentStep} of {totalSteps}: {
                currentStep === 1 ? 'Contact Information' :
                currentStep === 2 ? 'Project Details' :
                currentStep === 3 ? 'Requirements' : 'Additional Information'
              }
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="bg-white rounded-xl border border-secondary-200 p-8 space-y-6">
                  <div className="text-center space-y-2 mb-8">
                    <h2 className="text-2xl font-bold text-secondary-900">Contact Information</h2>
                    <p className="text-secondary-600">Let us know how to reach you</p>
                  </div>

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
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
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
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder={companyInfo.location.phone}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company/Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Position/Role
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="e.g., CEO, CTO, Project Manager"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="bg-white rounded-xl border border-secondary-200 p-8 space-y-6">
                  <div className="text-center space-y-2 mb-8">
                    <h2 className="text-2xl font-bold text-secondary-900">Project Details</h2>
                    <p className="text-secondary-600">Tell us about your project</p>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-secondary-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectTitle" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      required
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Brief title for your project"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={5}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-vertical"
                      placeholder="Describe your project goals, target audience, and key objectives..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                        Preferred Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="bg-white rounded-xl border border-secondary-200 p-8 space-y-8">
                  <div className="text-center space-y-2 mb-8">
                    <h2 className="text-2xl font-bold text-secondary-900">Project Requirements</h2>
                    <p className="text-secondary-600">Select the features and platforms you need</p>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-4">
                      Required Features (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {commonFeatures.map((feature) => (
                        <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={() => handleMultiSelect('features', feature)}
                            className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-4">
                      Target Platforms (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {platformOptions.map((platform) => (
                        <label key={platform} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.platforms.includes(platform)}
                            onChange={() => handleMultiSelect('platforms', platform)}
                            className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-secondary-700">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Integrations */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-4">
                      Required Integrations (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {integrationOptions.map((integration) => (
                        <label key={integration} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.integrations.includes(integration)}
                            onChange={() => handleMultiSelect('integrations', integration)}
                            className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-secondary-700">{integration}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-sm font-medium text-secondary-700 mb-2">
                      Additional Requirements or Special Considerations
                    </label>
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-vertical"
                      placeholder="Any specific requirements, compliance needs, or technical constraints..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Additional Information */}
              {currentStep === 4 && (
                <div className="bg-white rounded-xl border border-secondary-200 p-8 space-y-6">
                  <div className="text-center space-y-2 mb-8">
                    <h2 className="text-2xl font-bold text-secondary-900">Additional Information</h2>
                    <p className="text-secondary-600">Help us understand your project context</p>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasExistingSystems"
                        checked={formData.hasExistingSystems}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-secondary-700">
                        We have existing systems that need to be integrated or migrated
                      </span>
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-secondary-700 mb-2">
                        Your Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-20">6-20 people</option>
                        <option value="21-50">21-50 people</option>
                        <option value="51-200">51-200 people</option>
                        <option value="200+">200+ people</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-secondary-700 mb-2">
                        Project Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      >
                        <option value="">Select urgency level</option>
                        <option value="low">Low - Planning phase</option>
                        <option value="medium">Medium - Need to start soon</option>
                        <option value="high">High - Need to start immediately</option>
                        <option value="critical">Critical - Emergency project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredStartDate" className="block text-sm font-medium text-secondary-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                      : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary inline-flex items-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-secondary-900">Why Get a Quote from Us?</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We provide detailed, transparent quotes with no hidden costs or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Fast Response</h3>
              <p className="text-secondary-600 text-sm">Get your detailed quote within 24 hours</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Transparent Pricing</h3>
              <p className="text-secondary-600 text-sm">No hidden costs or surprise charges</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Expert Team</h3>
              <p className="text-secondary-600 text-sm">Quotes prepared by experienced professionals</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">Detailed Breakdown</h3>
              <p className="text-secondary-600 text-sm">Complete project scope and deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-secondary-900">What Our Clients Say</h2>
            <p className="text-secondary-600">
              Hear from businesses who trusted us with their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl border border-secondary-200 p-6">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-secondary-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-secondary-700 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-secondary-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-secondary-600">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Prefer to Talk Directly?</h2>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Sometimes it's easier to discuss your project over the phone. Our experts are ready to help.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.location.phone}`}
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50"
              >
                Call Us: {companyInfo.location.phone}
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
