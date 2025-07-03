import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Website Design & Development',
    'Custom Software Development',
    'SEO and Marketing Strategies',
    'E-commerce Solutions',
    'Mobile App Development',
    'Business System Integration',
    'Digital Strategy Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under UGX 1,000,000',
    'UGX 1,000,000 - 2,500,000',
    'UGX 2,500,000 - 5,000,000',
    'UGX 5,000,000 - 10,000,000',
    'Above UGX 10,000,000'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+256 752 018 782',
      description: 'Available Mon-Fri, 8am-6pm',
      action: 'tel:+256752018782'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@tamiti.com',
      description: 'We reply within 4 hours',
      action: 'mailto:hello@tamiti.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+256 752 018 782',
      description: 'Quick responses guaranteed',
      action: 'https://wa.me/256752018782'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Kampala, Uganda',
      description: 'Schedule an appointment',
      action: '#'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
            Let's <span className="text-accent-500">Build</span> Something Amazing Together
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch for a free consultation 
            and discover how we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-neutral-50 p-6 rounded-2xl text-center hover:bg-accent-50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-primary-900 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <method.icon className="h-6 w-6 text-accent-500 group-hover:text-primary-900" />
                </div>
                <h3 className="font-poppins font-semibold text-primary-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary-900 font-medium mb-1">{method.info}</p>
                <p className="text-neutral-600 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary-900 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-primary-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-primary-900 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="ASAP">As soon as possible</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">More than 6 months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-900 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Calendar Booking */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-accent-500 mr-3" />
                  <h3 className="text-xl font-poppins font-semibold text-primary-900">
                    Book a Free Consultation
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Prefer to talk? Schedule a 30-minute free consultation to discuss your project in detail.
                </p>
                <button className="w-full bg-accent-500 text-primary-900 py-3 px-6 rounded-lg font-semibold hover:bg-accent-400 transition-colors duration-200">
                  Schedule Call
                </button>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-accent-500 mr-3" />
                  <h3 className="text-xl font-poppins font-semibold text-primary-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3 text-neutral-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-accent-50 rounded-lg">
                  <p className="text-sm text-primary-900">
                    <strong>Emergency Support:</strong> Available 24/7 for existing clients
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Response Time</span>
                    <span className="font-semibold text-primary-900">{'< 4 hours'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Projects Completed</span>
                    <span className="font-semibold text-primary-900">100+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Client Satisfaction</span>
                    <span className="font-semibold text-primary-900">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Years in Business</span>
                    <span className="font-semibold text-primary-900">5+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7438856978943!2d32.613189974964556!3d0.3499848996465818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb76b72bd485%3A0x19452aec45451cf1!2sTamiti%20Tech%20Solutions%20Uganda!5e0!3m2!1sen!2sug!4v1751580137524!5m2!1sen!2sug"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Tamiti Tech Solutions Uganda Map"
      />
    </section>


    </div>
  );
};

export default Contact;