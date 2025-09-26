import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInfo } from '../../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    services: [
      { name: 'Custom Software Development', href: '/services/custom-software-development' },
      { name: 'Managed IT Services', href: '/services/managed-it-services' },
      { name: 'Cybersecurity Solutions', href: '/services/cybersecurity-solutions' },
      { name: 'Cloud & DevOps Services', href: '/services/cloud-devops-services' },
      { name: 'Data Analytics & BI', href: '/services/data-analytics-business-intelligence' },
      { name: 'Industry Solutions', href: '/services/industry-specific-solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'System Status', href: '/status' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: companyInfo.socialLinks.facebook || '#',
      icon: Facebook
    },
    {
      name: 'Twitter',
      href: companyInfo.socialLinks.twitter || '#',
      icon: Twitter
    },
    {
      name: 'LinkedIn',
      href: companyInfo.socialLinks.linkedin || '#',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      href: companyInfo.socialLinks.instagram || '#',
      icon: Instagram
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>{companyInfo.location.address}</p>
                  <p>{companyInfo.location.city}, {companyInfo.location.country}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.location.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.location.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.location.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.location.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="py-6 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <span className="font-medium text-white">Weekdays:</span> {companyInfo.businessHours.weekdays}
            </div>
            <div>
              <span className="font-medium text-white">Saturday:</span> {companyInfo.businessHours.saturday}
            </div>
            <div>
              <span className="font-medium text-white">Sunday:</span> {companyInfo.businessHours.sunday}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;