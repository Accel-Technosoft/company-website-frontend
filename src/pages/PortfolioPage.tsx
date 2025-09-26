import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react';
import { projects } from '../data';

const PortfolioPage = () => {
  const { slug } = useParams();
  
  // If slug is provided, show individual project detail
  if (slug) {
    const project = projects.find(p => p.slug === slug);
    
    if (!project) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">Project Not Found</h1>
            <p className="text-secondary-600">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
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
              <Link to="/portfolio" className="hover:text-primary-600">Portfolio</Link>
              <span>/</span>
              <span className="text-secondary-900">{project.title}</span>
            </nav>
          </div>
        </section>

        {/* Project Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {project.industry}
                    </span>
                    <div className="flex items-center gap-2 text-secondary-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(project.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                  </div>
                  
                  <h1 className="text-5xl font-bold text-secondary-900">{project.title}</h1>
                  
                  {project.clientName && (
                    <p className="text-xl text-primary-600 font-medium">
                      Client: {project.clientName}
                    </p>
                  )}
                  
                  <p className="text-xl text-secondary-600 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Start Similar Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/portfolio" className="btn-outline inline-flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    All Projects
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Project Overview</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Industry</span>
                      <span className="font-medium text-secondary-900">{project.industry}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Tech Stack</span>
                      <span className="font-medium text-secondary-900">{project.techStack.length} Technologies</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="text-secondary-600">Outcomes</span>
                      <span className="font-medium text-secondary-900">{project.outcomes.length} Key Results</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-secondary-600">Completion</span>
                      <span className="font-medium text-primary-600">
                        {new Date(project.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Challenge */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary-900">The Challenge</h2>
                <p className="text-secondary-700 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary-900">Our Solution</h2>
                <p className="text-secondary-700 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Tech Stack */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Outcomes */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-secondary-900">Key Outcomes</h2>
                  <p className="text-secondary-600">
                    Measurable results that demonstrate the success and impact of our solution.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700 text-lg">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-secondary-900">Technology Stack</h2>
                  <p className="text-secondary-600">
                    Modern technologies and frameworks used to build this solution.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="bg-primary-50 rounded-lg p-4 text-center">
                      <span className="text-primary-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary-900">Project Tags</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-whiteborder border-secondary-200 text-secondary-700 px-4 py-2 rounded-full font-medium hover:border-primary-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600">
          <div className="container-custom">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Interested in a Similar Project?</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Let's discuss how we can help you achieve similar results for your organization.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                  Start Your Project
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Show portfolio listing page
  const industries = [...new Set(projects.map(p => p.industry))];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">Our Portfolio</h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Discover how we've helped organizations across Uganda transform their operations with innovative technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">{projects.length}+</div>
              <div className="text-secondary-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">{industries.length}+</div>
              <div className="text-secondary-600">Industries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">2M+</div>
              <div className="text-secondary-600">Users Impacted</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="text-secondary-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Featured Projects</h2>
            <p className="text-xl text-secondary-600">
              Explore our successful implementations across various industries and sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group hover:shadow-2xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-secondary-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(project.publishDate).getFullYear()}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.clientName && (
                      <p className="text-primary-600 font-medium text-sm">
                        {project.clientName}
                      </p>
                    )}
                    <p className="text-secondary-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-secondary-700">Key Outcomes:</div>
                    <ul className="space-y-2">
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-secondary-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Industries We Serve</h2>
            <p className="text-xl text-secondary-600">
              We have extensive experience across multiple sectors and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const industryProjects = projects.filter(p => p.industry === industry);
              return (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-secondary-200 hover:border-primary-300 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                    <Tag className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">{industry}</h3>
                  <p className="text-secondary-600 text-sm">
                    {industryProjects.length} project{industryProjects.length !== 1 ? 's' : ''} completed
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Let's discuss how we can help transform your organization with innovative technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Start Your Project
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
