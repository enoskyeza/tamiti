import React from 'react';
import { Target, Users, Lightbulb, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a small team with a big vision to help Ugandan businesses embrace digital transformation."
    },
    {
      year: "2022", 
      title: "Growing Impact",
      description: "Reached 50+ happy clients and launched our first custom software solutions for local businesses."
    },
    {
      year: "2024",
      title: "Expanding Horizons", 
      description: "Became the go-to digital partner for SMEs across Uganda, with 100+ successful projects completed."
    },
    {
      year: "2025",
      title: "Building the Future",
      description: "Leading Uganda's digital marketplace initiative while continuing to empower businesses of all sizes."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe in building lasting relationships and putting our clients' success at the heart of everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We create solutions that are not just modern, but meaningful and practical for the Ugandan market."
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We deliver professional-grade solutions that compete globally while serving local needs."
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "We're committed to continuous learning and helping our clients evolve with changing technology."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
                We're <span className="text-accent-500">Tamiti Tech</span> - 
                Your Digital Transformation Partners
              </h1>
              <p className="text-xl text-neutral-200 leading-relaxed">
                Born in Uganda, built for the world. We're a passionate team of developers, 
                designers, and strategists dedicated to helping Ugandan businesses thrive in the digital age.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team working together" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-primary-900 p-6 rounded-2xl shadow-xl">
                <MapPin className="h-8 w-8 mb-2" />
                <div className="text-sm font-medium">Proudly Ugandan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              What started as a simple idea - helping local businesses get online - 
              has grown into a mission to transform Uganda's digital landscape. 
              We've learned that success isn't just about technology; it's about understanding 
              people, culture, and the unique challenges that Ugandan businesses face.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary-900 mb-6">
                Why We Started Tamiti Tech
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We noticed that many talented Ugandan entrepreneurs had amazing products and services 
                but struggled to reach customers beyond their immediate communities. Traditional marketing 
                was expensive, and digital solutions seemed out of reach for small businesses.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                That's when we realized we could bridge this gap. By combining international-standard 
                technology with deep local market understanding, we could help businesses not just go online, 
                but truly thrive in the digital space.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Today, we're proud to have helped hundreds of businesses transform their operations, 
                reach new customers, and build sustainable growth through smart digital solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team brainstorming" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Collaborative work" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600">
              From humble beginnings to becoming Uganda's trusted digital partner
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-500 opacity-30"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-accent-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-900 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-accent-500 group-hover:text-primary-900" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              A diverse group of tech enthusiasts, creative minds, and business strategists 
              united by our passion for helping Ugandan businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                // src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                src='/team/herman.jpeg'
                alt="Team member" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold mb-2">Development Team</h3>
              <p className="text-neutral-300">Building robust, scalable solutions</p>
            </div>
            <div className="text-center">
              <img 
                // src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400"
                src="/team/peter.jpeg"
                alt="Team member" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold mb-2">Design Team</h3>
              <p className="text-neutral-300">Creating beautiful, user-friendly experiences</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold mb-2">Strategy Team</h3>
              <p className="text-neutral-300">Planning your path to digital success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;