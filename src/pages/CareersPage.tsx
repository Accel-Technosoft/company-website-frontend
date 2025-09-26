import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MapPin, Clock, DollarSign, Calendar, Users, Award, Search, Filter, CheckCircle, Send, Star, Building2 } from 'lucide-react';
import { companyInfo, featuredTestimonials } from '../data';
import { jobListings, departments, jobTypes, jobLevels, companyBenefits, hiringProcess } from '../data/careers';

const CareersPage = () => {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  // If slug is provided, show individual job detail
  if (slug) {
    const job = jobListings.find(j => j.slug === slug);
    
    if (!job) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">Job Not Found</h1>
            <p className="text-secondary-600">The job posting you're looking for doesn't exist or may have been filled.</p>
            <Link to="/careers" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
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
              <Link to="/careers" className="hover:text-primary-600">Careers</Link>
              <span>/</span>
              <span className="text-secondary-900">{job.title}</span>
            </nav>
          </div>
        </section>

        {/* Job Header */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {job.department}
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full font-medium capitalize">
                      {job.type}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium capitalize">
                      {job.level} Level
                    </span>
                    {job.isUrgent && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                        Urgent Hiring
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900">{job.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-secondary-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    {job.salaryRange && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salaryRange}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-xl text-secondary-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Job Details */}
                <div className="space-y-8">
                  {/* Responsibilities */}
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900 mb-4">Key Responsibilities</h2>
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900 mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preferred Qualifications */}
                  {job.preferredQualifications.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-900 mb-4">Preferred Qualifications</h2>
                      <ul className="space-y-3">
                        {job.preferredQualifications.map((qualification, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-700">{qualification}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900 mb-4">What We Offer</h2>
                    <ul className="space-y-3">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Apply Now Card */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6 sticky top-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Ready to Apply?</h3>
                      <p className="text-secondary-600 text-sm">
                        Join our team and help build the future of technology in Uganda.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-primary-50 rounded-lg p-4">
                        <div className="text-sm text-primary-700 mb-1">Salary Range</div>
                        <div className="font-bold text-primary-600">{job.salaryRange || 'Competitive'}</div>
                      </div>
                      
                      {job.applicationDeadline && (
                        <div className="bg-red-50 rounded-lg p-4">
                          <div className="text-sm text-red-700 mb-1">Application Deadline</div>
                          <div className="font-bold text-red-600">
                            {new Date(job.applicationDeadline).toLocaleDateString()}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={`mailto:careers@techsolutions.ug?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                        className="btn-primary w-full inline-flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <Send className="w-4 h-4" />
                      </a>
                      <Link to="/careers" className="btn-outline w-full inline-flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        All Jobs
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Job Tags */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-white rounded-xl border border-secondary-200 p-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">About {companyInfo.name}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                    {companyInfo.description}
                  </p>
                  <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1">
                    Learn More About Us
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Jobs */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-secondary-900">Similar Opportunities</h2>
              <p className="text-secondary-600">
                Explore other exciting positions in our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobListings
                .filter(j => j.id !== job.id && (j.department === job.department || j.tags.some(tag => job.tags.includes(tag))))
                .slice(0, 3)
                .map((similarJob) => (
                  <div key={similarJob.id} className="bg-white rounded-xl border border-secondary-200 p-6 hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                          {similarJob.department}
                        </span>
                        <span className="text-xs text-secondary-500 capitalize">
                          {similarJob.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {similarJob.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-secondary-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {similarJob.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {similarJob.level}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/careers/${similarJob.slug}`}
                        className="btn-outline w-full inline-flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Filter jobs based on search and filters
  const filteredJobs = jobListings.filter(job => {
    if (!job.isActive) return false;
    
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    const matchesType = selectedType === 'All Types' || job.type === selectedType.toLowerCase().replace(' ', '-');
    const matchesLevel = selectedLevel === 'All Levels' || job.level === selectedLevel.toLowerCase();
    
    return matchesSearch && matchesDepartment && matchesType && matchesLevel;
  });

  // Show careers listing page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Join Our Team</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Build the future of technology in Uganda. Join a team of passionate professionals dedicated to transforming businesses through innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{companyInfo.employees}</h3>
                <p className="text-secondary-600">Team Members</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <Building2 className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{jobListings.filter(j => j.isActive).length}</h3>
                <p className="text-secondary-600">Open Positions</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">5+</h3>
                <p className="text-secondary-600">Years Growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-medium text-secondary-700">Filters:</span>
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {jobLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-center text-secondary-600">
              Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
              {(selectedDepartment !== 'All Departments' || selectedType !== 'All Types' || selectedLevel !== 'All Levels' || searchTerm) && ' matching your criteria'}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">No Jobs Found</h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search terms or filters to find more opportunities.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All Departments');
                  setSelectedType('All Types');
                  setSelectedLevel('All Levels');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl border border-secondary-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {job.type}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {job.level}
                        </span>
                        {job.isUrgent && (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">{job.title}</h3>
                        <p className="text-secondary-600 leading-relaxed">{job.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                        {job.salaryRange && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {job.salaryRange}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.tags.slice(0, 4).map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {job.tags.length > 4 && (
                          <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium">
                            +{job.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-48">
                      <Link 
                        to={`/careers/${job.slug}`}
                        className="btn-primary inline-flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={`mailto:careers@techsolutions.ug?subject=Quick Application for ${job.title}`}
                        className="btn-outline inline-flex items-center justify-center gap-2"
                      >
                        Quick Apply
                        <Send className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Benefits */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Why Work With Us?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl border border-secondary-200 p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{benefit.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Our Hiring Process</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We've designed a transparent and efficient hiring process to help you understand what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hiringProcess.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl border border-secondary-200 p-6 text-center">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-secondary-600 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="text-xs text-primary-600 font-medium">{step.duration}</div>
                  </div>
                  
                  {index < hiringProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-secondary-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">What Our Team Says</h2>
            <p className="text-xl text-secondary-600">
              Hear from our employees about their experience working at TechSolutions Uganda.
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Join Our Team?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@techsolutions.ug?subject=General Application&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in joining your team. Please find my resume attached.%0D%0A%0D%0ABest regards"
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50"
              >
                Send Your Resume
              </a>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
