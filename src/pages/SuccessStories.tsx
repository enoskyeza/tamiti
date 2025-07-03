import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      client: "Liz Collections",
      industry: "Fashion & Design",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      clientImage: "https://images.pexels.com/photos/2523900/pexels-photo-2523900.jpeg?auto=compress&cs=tinysrgb&w=400",
      clientName: "Elizabeth Estrada",
      location: "Entebbe, Uganda",
      problem: "Estrada's fashion business was limited to walk-in customers in her neighborhood. She had amazing designs but struggled to reach fashion-conscious customers across Kampala.",
      solution: "We created a stunning portfolio website showcasing her collections, set up professional social media profiles, and implemented an online booking system for consultations and fittings.",
      outcome: "300% increase in customer inquiries, expanded client base across Kampala, Entebbe, and now receives orders from customers in other districts.",
      metrics: [
        { icon: TrendingUp, label: "Customer Inquiries", value: "+300%" },
        { icon: Users, label: "New Customers", value: "150+" },
        { icon: DollarSign, label: "Revenue Growth", value: "+250%" }
      ],
      quote: "Tamiti Tech transformed my clothing shop into a thriving fashion business. Now I have customers from all over Kampala finding me online!",
      website: "#"
    },
    {
      client: "Biteph Uganda",
      industry: "Logistics & Supply Chain",
      image: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800",
      clientImage: "https://images.pexels.com/photos/32694799/pexels-photo-32694799.jpeg?auto=compress&cs=tinysrgb&w=400",
      clientName: "Jimmy Mukiibi",
      location: "Kampala, Uganda",
      problem: "Managing inventory manually was time-consuming and error-prone. They often ran out of popular items or overstocked slow-moving products, affecting cash flow.",
      solution: "We developed a custom inventory management system with real-time stock tracking, automated reorder alerts, and sales analytics. Also created a business website with product catalog.",
      outcome: "Reduced inventory management time by 80%, improved stock accuracy, and increased sales through better product availability and online presence.",
      metrics: [
        { icon: Clock, label: "Time Saved", value: "80%" },
        { icon: TrendingUp, label: "Stock Accuracy", value: "98%" },
        { icon: DollarSign, label: "Sales Growth", value: "+180%" }
      ],
      quote: "The inventory system saves me hours every day. I can focus on growing my business instead of counting stock manually.",
      website: "#"
    },
    {
      client: "SK and Sons Printery",
      industry: "Printing & Publishing",
      image: "https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&w=800",
      clientImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      clientName: "Sanon Sarah",
      location: "Kampala, Uganda",
      problem: "Grace relied on word-of-mouth referrals and struggled to showcase her  portfolio to potential clients. Booking management was chaotic with phone calls and WhatsApp messages.",
      solution: "Built a professional website with photo galleries, service packages, online booking system, and integrated calendar management. " +
          "Implemented digital marketing strategy targeting different potential clients.",
      outcome: "Doubled monthly bookings, streamlined operations, and established partnerships with schools and other businesses.",
      metrics: [
        { icon: Users, label: "Monthly Bookings", value: "+200%" },
        { icon: TrendingUp, label: "Profit Margin", value: "+150%" },
        { icon: DollarSign, label: "Average Order", value: "+120%" }
      ],
      quote: "The professional website and booking system have completely transformed how I run my business. Clients trust me more and bookings have doubled!",
      website: "skandsonsprintery.com"
    },
    {
      client: "Kampala Fitness Center",
      industry: "Health & Fitness",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
      clientImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      clientName: "John Ssekandi",
      location: "Kampala, Uganda",
      problem: "The gym struggled with membership management, class scheduling, and payment tracking. Members often missed classes, and revenue tracking was manual and inaccurate.",
      solution: "Developed a comprehensive gym management system with member portals, class booking, payment processing, and mobile app for members to track workouts and book classes.",
      outcome: "Improved member retention by 60%, streamlined operations, and increased class attendance. Revenue grew significantly through better membership management.",
      metrics: [
        { icon: Users, label: "Member Retention", value: "+60%" },
        { icon: TrendingUp, label: "Class Attendance", value: "+85%" },
        { icon: DollarSign, label: "Revenue Growth", value: "+220%" }
      ],
      quote: "The gym management system has revolutionized our operations. Members love the convenience, and we've seen remarkable growth in retention and revenue.",
      website: "#"
    }
  ];

  const industries = [
    "Fashion & Retail",
    "Food & Restaurants", 
    "Healthcare",
    "Education",
    "Manufacturing",
    "Services",
    "Technology",
    "Non-Profit"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
            Real <span className="text-accent-500">Success Stories</span> from Real Businesses
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            See how we've helped Ugandan businesses transform their operations, 
            reach new customers, and achieve remarkable growth through smart digital solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">100+</div>
              <div className="text-neutral-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">250%</div>
              <div className="text-neutral-600">Average Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">15+</div>
              <div className="text-neutral-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">98%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={story.image} 
                      alt={story.client}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                        {story.client}
                      </h3>
                      <p className="text-accent-500 font-medium">{story.industry}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {/* Client Info */}
                    <div className="flex items-center mb-8">
                      <img 
                        src={story.clientImage} 
                        alt={story.clientName}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-poppins font-semibold text-primary-900 text-lg">
                          {story.clientName}
                        </h4>
                        <p className="text-neutral-600">{story.location}</p>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                        The Challenge
                      </h4>
                      <p className="text-neutral-700 leading-relaxed">
                        {story.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                        Our Solution
                      </h4>
                      <p className="text-neutral-700 leading-relaxed">
                        {story.solution}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-primary-900 mb-4">
                        Results Achieved
                      </h4>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {story.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 bg-neutral-50 rounded-lg">
                            <metric.icon className="h-6 w-6 text-accent-500 mx-auto mb-2" />
                            <div className="text-xl font-bold text-primary-900">{metric.value}</div>
                            <div className="text-xs text-neutral-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
                        {story.outcome}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-primary-900/5 to-accent-500/5 p-6 rounded-xl mb-6">
                      <p className="text-primary-900 font-medium italic leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link 
                        to="/contact"
                        className="text-primary-900 font-semibold hover:text-accent-500 transition-colors duration-200 flex items-center group"
                      >
                        Start Your Success Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a 
                        href={story.website}
                        className="text-neutral-600 hover:text-primary-900 transition-colors duration-200 flex items-center text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600">
              We've helped businesses across diverse sectors achieve digital success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-neutral-50 p-4 rounded-xl text-center hover:bg-accent-50 hover:text-accent-600 transition-colors duration-200"
              >
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-neutral-200 mb-8">
            Join hundreds of Ugandan businesses that have transformed their operations with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-400 transition-colors duration-300 flex items-center justify-center group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 text-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;