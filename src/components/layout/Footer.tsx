import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/*<div className="bg-accent-500 p-2 rounded-lg">*/}
              {/*  <Zap className="h-6 w-6 text-primary-900" />*/}
              {/*</div>*/}
              <img src="/logo-y.png" alt="Alternative Tamiti Tech Logo" className="h-10 w-10"/>
              <span className="text-xl font-poppins font-bold">Tamiti</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              We help Ugandan businesses get found, grow online, and build for the future. 
              Your digital transformation partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/tamititech" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tamititech/" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Who We Are</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">What We Do</Link></li>
              <li><Link to="/success-stories" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Success Stories</Link></li>
              <li><Link to="/resources" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Resources</Link></li>
              <li><Link to="/careers" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Work With Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-neutral-300 text-sm">Website Design & Development</span></li>
              <li><span className="text-neutral-300 text-sm">Custom Software Solutions</span></li>
              <li><span className="text-neutral-300 text-sm">Business Strategy & Planning</span></li>
              <li><span className="text-neutral-300 text-sm">GBP Optimisation</span></li>
              <li><span className="text-neutral-300 text-sm">SEO & Online Presence</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">+256 752 018 782</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">hello@tamiti.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 Tamiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;