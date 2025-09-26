import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, MapPin, Phone, Mail, Calendar, Target, Eye, Heart, Linkedin, Github, Twitter } from 'lucide-react';
import { companyInfo, featuredTeam, executiveTeam } from '../data';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900">About {companyInfo.name}</h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  {companyInfo.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">Founded</div>
                  <div className="text-sm text-secondary-600">{companyInfo.founded}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{companyInfo.employees}</div>
                  <div className="text-sm text-secondary-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-secondary-600">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Our Location</h3>
                      <p className="text-secondary-600 text-sm">{companyInfo.location.address}</p>
                      <p className="text-secondary-600 text-sm">{companyInfo.location.city}, {companyInfo.location.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Contact Us</h3>
                      <p className="text-secondary-600 text-sm">{companyInfo.location.phone}</p>
                      <p className="text-secondary-600 text-sm">{companyInfo.location.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Business Hours</h3>
                      <p className="text-secondary-600 text-sm">{companyInfo.businessHours.weekdays}</p>
                      <p className="text-secondary-600 text-sm">{companyInfo.businessHours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="w-10 h-10 text-primary-600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-900">Our Mission</h2>
                <p className="text-secondary-600 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto">
                <Eye className="w-10 h-10 text-secondary-600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-900">Our Vision</h2>
                <p className="text-secondary-600 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-900">Our Values</h2>
                <p className="text-secondary-600 leading-relaxed">
                  Innovation, integrity, and excellence in everything we do. We believe in empowering our clients with technology that transforms their business operations and drives sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-secondary-900">Our Story</h2>
                <p className="text-xl text-secondary-600">
                  From humble beginnings to becoming Uganda's leading IT solutions provider.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Founded in {companyInfo.founded}</h3>
                    <p className="text-secondary-600">Started as a small IT consultancy with a vision to bridge the digital divide in Uganda and East Africa.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Growing Team</h3>
                    <p className="text-secondary-600">Expanded to {companyInfo.employees} skilled professionals across various technology disciplines and specializations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Proven Excellence</h3>
                    <p className="text-secondary-600">Successfully delivered 100+ projects for government agencies, NGOs, and private sector clients across Uganda.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Regional Impact</h3>
                    <p className="text-secondary-600">Expanding our reach across East Africa, helping organizations embrace digital transformation and modern technology solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary-900">Key Achievements</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="text-secondary-600">Projects Completed</span>
                      <span className="font-bold text-primary-600">100+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="text-secondary-600">Satisfied Clients</span>
                      <span className="font-bold text-primary-600">80+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="text-secondary-600">Industries Served</span>
                      <span className="font-bold text-primary-600">8+</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="text-secondary-600">Team Members</span>
                      <span className="font-bold text-primary-600">{companyInfo.employees}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-secondary-600">Years of Experience</span>
                      <span className="font-bold text-primary-600">{new Date().getFullYear() - parseInt(companyInfo.founded)}+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Leadership Team</h2>
            <p className="text-xl text-secondary-600">
              Meet the experienced leaders driving our vision and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {executiveTeam.map((member) => (
              <div key={member.id} className="card">
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">{member.name}</h3>
                      <p className="text-primary-600 font-medium">{member.position}</p>
                      <p className="text-sm text-secondary-600">{member.experience} experience</p>
                    </div>
                    
                    <p className="text-secondary-700 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex items-center gap-3">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                          <Linkedin className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer"
                           className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                          <Twitter className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`}
                           className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                          <Mail className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">Our Team</h2>
            <p className="text-xl text-secondary-600">
              Talented professionals dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeam.filter(member => !executiveTeam.includes(member)).map((member) => (
              <div key={member.id} className="card text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-secondary-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.position}</p>
                    <p className="text-sm text-secondary-600">{member.department} • {member.experience}</p>
                  </div>
                  
                  <p className="text-secondary-700 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-secondary-700">Key Skills:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills?.slice(0, 3).map((skill, index) => (
                        <span key={index} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                         className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                        <Linkedin className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer"
                         className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                        <Github className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}
                         className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                        <Mail className="w-4 h-4 text-secondary-600 hover:text-primary-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-6">
              Want to join our talented team? We're always looking for passionate professionals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              View Career Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Work With Us?</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Let's discuss how our experienced team can help transform your business with innovative technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Start a Conversation
              </Link>
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

export default AboutPage;