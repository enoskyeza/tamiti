import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Search, BarChart3, Palette, Code, Database, Shield, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Launch Your Business Online",
      subtitle: "Complete Digital Foundation",
      description: "Everything you need to establish a professional online presence and start attracting customers from day one.",
      features: [
        "Professional Website Design & Development",
        "Complete Brand Identity Package",
        "Social Media Profile Setup & Optimization",
        "Google My Business & Maps Listing",
        "Basic SEO Setup",
        "Mobile-Responsive Design",
        "Content Management System",
        "1 Month Free Support"
      ],
      pricing: "Starting from UGX 800,000",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Develop Custom Solutions",
      subtitle: "Tailored Business Systems",
      description: "Custom web applications, mobile solutions, and business management systems designed specifically for your unique needs.",
      features: [
        "Custom Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Inventory Management Systems",
        "Customer Relationship Management (CRM)",
        "Point of Sale (POS) Systems",
        "Database Design & Management",
        "API Integration & Development",
        "Ongoing Maintenance & Support"
      ],
      pricing: "Starting from UGX 2,500,000",
      popular: true
    },
    {
      icon: Search,
      title: "Plan for Growth",
      subtitle: "Strategic Digital Marketing",
      description: "Comprehensive digital strategy, SEO optimization, and marketing solutions to scale your business effectively.",
      features: [
        "Digital Strategy & Consulting",
        "Search Engine Optimization (SEO)",
        "Google Ads & Social Media Advertising",
        "Analytics & Performance Tracking",
        "Content Marketing Strategy",
        "Conversion Rate Optimization",
        "Competitor Analysis & Market Research",
        "Monthly Strategy Reviews"
      ],
      pricing: "Starting from UGX 600,000/month",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Get deep insights into your business performance with custom dashboards and reporting tools."
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity including logos, color schemes, and brand guidelines."
    },
    {
      icon: Code,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing optimally with our maintenance packages."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Organize, secure, and leverage your business data for better decision-making."
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Protect your digital assets with comprehensive security audits and implementation."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and specific requirements through detailed consultations."
    },
    {
      step: "02",
      title: "Design & Strategy",
      description: "Our team creates wireframes, designs, and strategic plans tailored to your business needs and brand identity."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using the latest technologies, followed by rigorous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We deploy your solution and provide ongoing support and optimization to ensure continued success."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
            Digital Solutions That <span className="text-accent-500">Transform</span> Your Business
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            From launching your first website to building complex business systems, 
            we provide comprehensive digital solutions designed for Uganda's growing economy.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-neutral-600">
              Choose the perfect package for your business stage and growth goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  service.popular ? 'ring-4 ring-accent-500 scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-accent-500 text-primary-900 text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="bg-primary-900 p-4 rounded-xl w-fit mb-6">
                    <service.icon className="h-8 w-8 text-accent-500" />
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent-500 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-primary-900 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-600">
                          <Check className="h-4 w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-primary-900 mb-4">
                      {service.pricing}
                    </div>
                    <Link 
                      to="/contact"
                      className="w-full bg-primary-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-neutral-600">
              Specialized solutions to complement your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-neutral-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-primary-900 p-3 rounded-lg w-fit mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-accent-500 group-hover:text-primary-900" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-neutral-600">
              A proven methodology that ensures quality results and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-accent-500 text-primary-900 text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 transform translate-x-6 w-full h-0.5 bg-accent-500 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Common questions about our services and process
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a website?",
                answer: "A standard business website typically takes 2-4 weeks, while custom applications can take 6-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What are website prices in Uganda?",
                answer: "Our website packages start from UGX 800,000 for a complete business website including design, development, and basic SEO. Custom solutions are priced based on specific requirements."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes! All our packages include initial support, and we offer maintenance plans to keep your website secure, updated, and performing optimally."
              },
              {
                question: "Can you help me get on Google Maps?",
                answer: "Absolutely! Google My Business setup and optimization is included in all our website packages to help local customers find your business easily."
              },
              {
                question: "Do you work with businesses outside Kampala?",
                answer: "Yes, we work with businesses across Uganda and can handle projects remotely. We also travel for larger projects when needed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-neutral-200 mb-8">
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-400 transition-colors duration-300 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/success-stories"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;