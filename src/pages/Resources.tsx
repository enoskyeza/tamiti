import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Video, FileText, Search, ArrowRight, Calendar, User, Eye } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing! You\'ll receive valuable digital marketing tips and updates.');
  };

  const guides = [
    {
      title: "Free 10-Step Digital Launch Checklist for SMEs",
      description: "Everything you need to know to establish your business online successfully. From domain registration to social media setup.",
      type: "PDF Guide",
      icon: FileText,
      downloadUrl: "#",
      featured: true
    },
    {
      title: "The Complete Guide to Google My Business",
      description: "Step-by-step instructions to set up and optimize your Google My Business listing to attract local customers.",
      type: "PDF Guide", 
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Social Media Strategy for Ugandan Businesses",
      description: "Learn how to create engaging content and build a following on Facebook, Instagram, and WhatsApp Business.",
      type: "PDF Guide",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Website Essentials: What Every Business Needs",
      description: "Understand the key elements that make a website effective for converting visitors into customers.",
      type: "Video Tutorial",
      icon: Video,
      downloadUrl: "#"
    }
  ];

  const blogPosts = [
    {
      title: "5 Digital Marketing Mistakes Ugandan SMEs Make (And How to Fix Them)",
      excerpt: "Learn about the most common digital marketing pitfalls and practical solutions to avoid them.",
      author: "Tamiti Tech Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      views: 1250,
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Why Your Business Needs a Professional Website in 2025",
      excerpt: "Discover how a well-designed website can transform your business and attract more customers.",
      author: "Tamiti Tech Team", 
      date: "January 10, 2025",
      readTime: "7 min read",
      views: 980,
      category: "Web Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "SEO for Ugandan Businesses: A Beginner's Guide",
      excerpt: "Simple SEO strategies that can help your business appear higher in Google search results.",
      author: "Tamiti Tech Team",
      date: "January 5, 2025", 
      readTime: "8 min read",
      views: 1450,
      category: "SEO",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mobile-First Design: Why It Matters for Your Website",
      excerpt: "Learn why designing for mobile users first is crucial for your website's success in Uganda.",
      author: "Tamiti Tech Team",
      date: "December 28, 2024",
      readTime: "6 min read", 
      views: 750,
      category: "Design",
      image: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Building Customer Trust Through Digital Presence",
      excerpt: "How a professional online presence can help build trust and credibility with potential customers.",
      author: "Tamiti Tech Team",
      date: "December 20, 2024",
      readTime: "5 min read",
      views: 620,
      category: "Business Strategy", 
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "E-commerce Trends in Uganda: What Businesses Should Know",
      excerpt: "Explore the growing e-commerce landscape in Uganda and opportunities for your business.",
      author: "Tamiti Tech Team",
      date: "December 15, 2024",
      readTime: "9 min read",
      views: 1100,
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Marketing",
    "Web Development", 
    "SEO",
    "Design",
    "Business Strategy",
    "E-commerce"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
            Free <span className="text-accent-500">Resources</span> to Grow Your Business
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Access our library of guides, tutorials, and insights designed specifically 
            for Ugandan businesses looking to succeed online.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-4">
            Get Weekly Digital Marketing Tips
          </h2>
          <p className="text-primary-900 mb-8 text-lg">
            Join 500+ Ugandan business owners receiving actionable insights every week
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-primary-900 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-900"
              required
            />
            <button
              type="submit"
              className="bg-primary-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Free Guides & Downloads */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Free Guides & Resources
            </h2>
            <p className="text-xl text-neutral-600">
              Download our comprehensive guides and checklists to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  guide.featured ? 'ring-4 ring-accent-500' : ''
                }`}
              >
                {guide.featured && (
                  <div className="bg-accent-500 text-primary-900 text-center py-2 font-semibold text-sm">
                    MOST POPULAR DOWNLOAD
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary-900 p-3 rounded-xl">
                      <guide.icon className="h-6 w-6 text-accent-500" />
                    </div>
                    <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                      {guide.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-4">
                    {guide.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <a 
                    href={guide.downloadUrl}
                    className="bg-primary-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center group w-full"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Download Free
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Latest Insights & Tips
            </h2>
            <p className="text-xl text-neutral-600">
              Stay updated with the latest digital marketing trends and business growth strategies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-primary-900 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-poppins font-semibold text-primary-900 mb-3 line-clamp-2 group-hover:text-accent-500 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-xs">{post.readTime}</span>
                    <button className="text-primary-900 font-semibold hover:text-accent-500 transition-colors duration-200 flex items-center text-sm group">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Quick answers to common questions about digital marketing and web development
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How much does it cost to create a website in Uganda?",
                answer: "Website costs in Uganda typically range from UGX 800,000 for a basic business website to UGX 5,000,000+ for complex e-commerce or custom applications. The final cost depends on features, design complexity, and functionality requirements."
              },
              {
                question: "How long does SEO take to show results?",
                answer: "SEO typically takes 3-6 months to show significant results. However, you may see some improvements within the first month. The timeline depends on your website's current state, competition, and the keywords you're targeting."
              },
              {
                question: "Do I need social media for my business?",
                answer: "Yes, social media is crucial for Ugandan businesses. Most of your customers are on platforms like Facebook, Instagram, and WhatsApp. A strong social media presence helps build trust, engage customers, and drive sales."
              },
              {
                question: "What's the difference between a website and social media page?",
                answer: "A website is your digital headquarters that you fully control, while social media pages are rented spaces on platforms you don't own. Both are important, but a website provides more credibility and professional appearance."
              },
              {
                question: "How do I get my business on Google Maps?",
                answer: "Create a free Google My Business account, verify your business location, add accurate information, photos, and encourage customer reviews. This helps local customers find your business when searching for services in your area."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
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
          <BookOpen className="h-16 w-16 text-accent-500 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Need Personalized Help?
          </h2>
          <p className="text-xl text-neutral-200 mb-8">
            Our resources are just the beginning. Get expert guidance tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-400 transition-colors duration-300 flex items-center justify-center group"
            >
              Schedule Free Consultation
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

export default Resources;