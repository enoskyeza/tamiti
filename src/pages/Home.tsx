import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, TrendingUp, Globe, Smartphone, Search, Heart, Star, Quote } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Launch Your Business Online",
      description: "Complete branding, social media profiles, and professional websites to establish your digital presence.",
      features: ["Professional Website", "Social Media Setup", "Brand Identity", "Google My Business"]
    },
    {
      icon: Smartphone,
      title: "Develop Custom Solutions",
      description: "Web systems, inventory management apps, mobile platforms tailored to your specific business needs.",
      features: ["Custom Web Apps", "Mobile Solutions", "Inventory Systems", "Database Management"]
    },
    {
      icon: Search,
      title: "Plan for Growth",
      description: "Digital audits, SEO optimization, and strategic planning to scale your business effectively.",
      features: ["SEO Optimization", "Digital Strategy", "Performance Analytics", "Growth Planning"]
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "We Listen",
      description: "We understand your business goals, challenges, and vision for growth."
    },
    {
      step: "02", 
      title: "We Build",
      description: "We create tailored digital solutions that align with your specific needs."
    },
    {
      step: "03",
      title: "You Grow",
      description: "Watch your business thrive with powerful digital tools and ongoing support."
    }
  ];

  const testimonials = [
    {
      name: "Sanon Sarah",
      business: "Sk and Sons Printery",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Tamiti Tech transformed our printing business into a thriving online business. Our website brings in customers from all over Kampala!",
      rating: 5
    },
    {
      name: "Jimmy Mukiibi",
      business: "Biteph Uganda",
      image: "https://images.pexels.com/photos/32694799/pexels-photo-32694799.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The Entabiro system they built saves us hours every day. Now we can focus on growing our business instead of paperwork.",
      rating: 5
    },
    {
      name: "Elizabeth Estrada",
      business: "Liz Collections",
      image: "https://images.pexels.com/photos/2523900/pexels-photo-2523900.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Thanks to this team, our online clothing shop is thriving. The team really understands the Ugandan market.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
                We Help You Get <span className="text-accent-500">Found</span>, 
                <span className="text-accent-500"> Grow Online</span>, and 
                <span className="text-accent-500"> Build</span> for the Future
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                Transform your business with custom digital solutions designed for Uganda's growing economy. 
                From stunning websites to powerful business systems, we're your partners in digital success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-accent-500 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-400 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                >
                  Let's Build Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent-500 text-primary-900 p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From launching your first website to scaling with custom software, 
              we provide comprehensive digital solutions for every stage of your business journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-primary-900 p-4 rounded-xl w-fit mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent-500 group-hover:text-primary-900" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services"
                  className="text-primary-900 font-semibold hover:text-accent-500 transition-colors duration-200 flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600">
              Our simple, proven process to transform your business digitally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-accent-500 text-primary-900 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-full h-0.5 bg-accent-500 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Success Stories from Real Clients
            </h2>
            <p className="text-xl text-neutral-600">
              See how we've helped Ugandan businesses transform and grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-primary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-600 text-sm">{testimonial.business}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-accent-500 mb-4" />
                <p className="text-neutral-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uganda Vision Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-accent-500 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Our Dream for Uganda
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            We envision a thriving digital marketplace where every Ugandan business, 
            from the smallest shop in Kampala to growing enterprises across the country, 
            has the tools and knowledge to succeed online. Together, we're building the 
            future of Uganda's digital economy, one business at a time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 text-accent-500 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join hundreds of Ugandan businesses that have chosen Tamiti Tech as their digital partner.
          </p>
          <Link 
            to="/contact"
            className="bg-accent-500 text-primary-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-accent-400 transition-all duration-300 hover:scale-105 inline-flex items-center group"
          >
            Start Your Digital Journey
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;