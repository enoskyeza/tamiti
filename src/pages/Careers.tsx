import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap, Send, Upload, X, CheckCircle } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    expectedSalary: '',
    availableStart: '',
    coverLetter: '',
    cv: null as File | null,
    portfolio: ''
  });
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kampala, Uganda",
      salary: "UGX 3,000,000 - 5,000,000",
      experience: "3-5 years",
      posted: "2 days ago",
      description: "We're looking for an experienced full-stack developer to join our growing team and help build innovative digital solutions for Ugandan businesses.",
      responsibilities: [
        "Develop and maintain web applications using React, Node.js, and modern frameworks",
        "Collaborate with designers and product managers to implement user-friendly interfaces",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and mentor junior developers",
        "Optimize applications for maximum speed and scalability",
        "Stay up-to-date with emerging technologies and industry trends"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript, and modern web technologies",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud platforms (AWS, Google Cloud, or Azure)",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication skills in English"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Professional development opportunities",
        "Flexible working hours",
        "Modern office environment in Kampala",
        "Opportunity to work on impactful projects"
      ],
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Kampala, Uganda",
      salary: "UGX 2,000,000 - 3,500,000",
      experience: "2-4 years",
      posted: "1 week ago",
      description: "Join our design team to create beautiful, user-centered digital experiences that help Ugandan businesses succeed online.",
      responsibilities: [
        "Design intuitive user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve our design system",
        "Present design concepts to clients and stakeholders"
      ],
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong portfolio demonstrating design thinking and problem-solving",
        "Understanding of web and mobile design principles",
        "Knowledge of HTML/CSS is a plus",
        "Excellent visual design skills"
      ],
      benefits: [
        "Competitive salary and design tool allowances",
        "Health insurance coverage",
        "Creative freedom and growth opportunities",
        "Flexible working arrangements",
        "Access to design conferences and workshops",
        "Collaborative and inspiring work environment"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Kampala, Uganda",
      salary: "UGX 1,500,000 - 2,500,000",
      experience: "1-3 years",
      posted: "3 days ago",
      description: "Help Ugandan businesses grow their online presence through strategic digital marketing campaigns and data-driven insights.",
      responsibilities: [
        "Develop and execute digital marketing strategies for clients",
        "Manage social media accounts and create engaging content",
        "Run and optimize Google Ads and Facebook advertising campaigns",
        "Analyze marketing performance and provide actionable insights",
        "Conduct SEO audits and implement optimization strategies",
        "Create marketing materials and campaign assets"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "1+ years of digital marketing experience",
        "Experience with Google Analytics, Google Ads, and social media platforms",
        "Strong writing and content creation skills",
        "Knowledge of SEO best practices",
        "Analytical mindset with attention to detail",
        "Understanding of the Ugandan market and culture"
      ],
      benefits: [
        "Competitive salary and performance incentives",
        "Health insurance coverage",
        "Marketing tools and certification support",
        "Opportunity to work with diverse clients",
        "Professional development budget",
        "Results-driven and dynamic work environment"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Junior Web Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kampala, Uganda",
      salary: "UGX 1,200,000 - 2,000,000",
      experience: "0-2 years",
      posted: "5 days ago",
      description: "Perfect opportunity for a recent graduate or career changer to start their journey in web development with mentorship from experienced developers.",
      responsibilities: [
        "Assist in developing and maintaining client websites",
        "Learn and apply modern web development technologies",
        "Participate in code reviews and team meetings",
        "Help with testing and debugging applications",
        "Contribute to documentation and knowledge sharing",
        "Support senior developers on various projects"
      ],
      requirements: [
        "Bachelor's degree in Computer Science, IT, or related field (or equivalent experience)",
        "Basic knowledge of HTML, CSS, JavaScript",
        "Familiarity with React or other modern frameworks is a plus",
        "Strong willingness to learn and grow",
        "Good problem-solving and communication skills",
        "Passion for technology and web development",
        "Fresh graduates are encouraged to apply"
      ],
      benefits: [
        "Competitive entry-level salary",
        "Comprehensive mentorship program",
        "Health insurance coverage",
        "Learning and development opportunities",
        "Career growth path",
        "Supportive team environment"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Business Development Manager",
      department: "Sales",
      type: "Full-time",
      location: "Kampala, Uganda",
      salary: "UGX 2,500,000 - 4,000,000",
      experience: "3-6 years",
      posted: "1 week ago",
      description: "Drive business growth by building relationships with potential clients and helping them understand how our digital solutions can transform their businesses.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain relationships with potential clients",
        "Conduct client presentations and product demonstrations",
        "Collaborate with technical teams to develop proposals",
        "Negotiate contracts and close deals",
        "Represent Tamiti Tech at industry events and networking functions"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "3+ years of B2B sales or business development experience",
        "Strong presentation and communication skills",
        "Understanding of digital technologies and solutions",
        "Proven track record of meeting sales targets",
        "Network within the Ugandan business community is preferred",
        "Self-motivated with excellent relationship-building skills"
      ],
      benefits: [
        "Competitive base salary plus commission",
        "Health insurance coverage",
        "Travel allowances and expense coverage",
        "Performance bonuses and incentives",
        "Professional networking opportunities",
        "Leadership development programs"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Content Writer & Social Media Manager",
      department: "Marketing",
      type: "Part-time",
      location: "Remote/Kampala",
      salary: "UGX 800,000 - 1,200,000",
      experience: "1-3 years",
      posted: "4 days ago",
      description: "Create compelling content and manage social media presence for our clients while building Tamiti Tech's brand in the Ugandan market.",
      responsibilities: [
        "Create engaging content for websites, blogs, and social media",
        "Manage social media accounts for clients and company",
        "Develop content strategies aligned with business goals",
        "Write copy for marketing materials and campaigns",
        "Monitor social media trends and engagement metrics",
        "Collaborate with design team on visual content"
      ],
      requirements: [
        "Bachelor's degree in Communications, Journalism, or related field",
        "1+ years of content writing and social media management experience",
        "Excellent writing skills in English and local languages",
        "Experience with social media platforms and scheduling tools",
        "Basic understanding of SEO and content marketing",
        "Creative thinking and attention to detail",
        "Knowledge of Ugandan culture and market trends"
      ],
      benefits: [
        "Flexible working hours",
        "Remote work options",
        "Health insurance coverage",
        "Creative freedom and growth opportunities",
        "Access to marketing tools and resources",
        "Collaborative team environment"
      ],
      featured: false
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    alert('Thank you for your application! We\'ll review it and get back to you within 5 business days.');
    setShowApplicationForm(false);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      expectedSalary: '',
      availableStart: '',
      coverLetter: '',
      cv: null,
      portfolio: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        cv: e.target.files[0]
      });
    }
  };

  const openApplication = (jobId: number) => {
    const job = jobListings.find(j => j.id === jobId);
    if (job) {
      setApplicationData({
        ...applicationData,
        position: job.title
      });
      setShowApplicationForm(true);
    }
  };

  const filteredJobs = jobListings.filter(job => {
    const typeMatch = filterType === 'all' || job.type.toLowerCase().includes(filterType.toLowerCase());
    const locationMatch = filterLocation === 'all' || job.location.toLowerCase().includes(filterLocation.toLowerCase());
    return typeMatch && locationMatch;
  });

  const jobTypes = ['all', 'full-time', 'part-time', 'contract'];
  const locations = ['all', 'kampala', 'remote'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold leading-tight mb-6">
            Join Our <span className="text-accent-500">Mission</span> to Transform Uganda's Digital Future
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Be part of a passionate team that's helping Ugandan businesses thrive in the digital age. 
            We're looking for talented individuals who share our vision of building the future.
          </p>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-6">
                Why Work at Tamiti Tech?
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                We're more than just a tech company - we're a family of innovators, dreamers, and problem-solvers 
                united by our passion for helping Ugandan businesses succeed. Join us and be part of something meaningful.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Competitive salaries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Health insurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Flexible working hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Professional development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Modern office environment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Impactful work</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Office environment" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-neutral-600">
              Find your perfect role and start making an impact
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Job Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Location</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  job.featured ? 'ring-2 ring-accent-500' : ''
                }`}
              >
                {job.featured && (
                  <div className="bg-accent-500 text-primary-900 text-center py-2 font-semibold text-sm">
                    FEATURED POSITION
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-primary-900 mb-2">
                        {job.title}
                      </h3>
                      <p className="text-accent-500 font-medium">{job.department}</p>
                    </div>
                    <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="flex-1 border-2 border-primary-900 text-primary-900 py-2 px-4 rounded-full font-semibold hover:bg-primary-900 hover:text-white transition-colors duration-200"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => openApplication(job.id)}
                      className="flex-1 bg-primary-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200"
                    >
                      Apply Now
                    </button>
                  </div>

                  {/* Job Details Expansion */}
                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start text-sm text-neutral-600">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start text-sm text-neutral-600">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-poppins font-semibold text-primary-900 mb-3">
                            Benefits & Perks
                          </h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-neutral-600">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <h3 className="text-2xl font-poppins font-bold text-primary-900">
                Apply for Position
              </h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Position Applied For *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-neutral-50"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Expected Salary (UGX)
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={applicationData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="e.g., 2,000,000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Available Start Date
                  </label>
                  <input
                    type="date"
                    name="availableStart"
                    value={applicationData.availableStart}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Portfolio/LinkedIn URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  Upload CV/Resume *
                </label>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-neutral-400 mx-auto mb-2" />
                    <p className="text-neutral-600">
                      {applicationData.cv ? applicationData.cv.name : 'Click to upload your CV/Resume'}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 border-2 border-neutral-300 text-neutral-700 py-3 px-6 rounded-full font-semibold hover:bg-neutral-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center group"
                >
                  Submit Application
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-accent-500 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-neutral-200 mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your CV and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-400 transition-colors duration-300 flex items-center justify-center"
            >
              Get In Touch
            </Link>
            <a 
              href="mailto:careers@tamititech.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 text-center"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;