import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle, FileText, Book, HelpCircle } from 'lucide-react';

const Help = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqs = {
    general: [
      {
        question: 'What is Agri-Link?',
        answer: 'Agri-Link is a platform that connects farmers with equipment owners, allowing them to rent agricultural machinery efficiently and affordably.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply create an account, verify your details, and you can start browsing equipment or listing your own machinery for rent.'
      },
      {
        question: 'Is my information secure?',
        answer: 'Yes, we use industry-standard encryption and security measures to protect your personal and payment information.'
      }
    ],
    booking: [
      {
        question: 'How do I make a booking?',
        answer: 'Browse available equipment, select your desired dates, and submit a booking request. The owner will confirm your booking within 24 hours.'
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Cancellations made 48 hours before the rental period are eligible for a full refund. Later cancellations may be subject to fees.'
      }
    ],
    payment: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept major credit cards, debit cards, and bank transfers. All payments are processed securely through our platform.'
      },
      {
        question: 'When am I charged for a booking?',
        answer: "A hold is placed on your payment method when you make a booking, but you're only charged once the equipment owner confirms your reservation."
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500 shadow-sm"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4">
            <MessageCircle className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Live Chat Support</h3>
              <p className="text-gray-600 mt-1">Chat with our support team</p>
              <button className="mt-3 text-green-600 hover:text-green-700 font-medium">
                Start Chat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4">
            <FileText className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Documentation</h3>
              <p className="text-gray-600 mt-1">Browse our detailed guides</p>
              <button className="mt-3 text-green-600 hover:text-green-700 font-medium">
                View Guides
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4">
            <Book className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Video Tutorials</h3>
              <p className="text-gray-600 mt-1">Watch step-by-step tutorials</p>
              <button className="mt-3 text-green-600 hover:text-green-700 font-medium">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {Object.entries(faqs).map(([category, questions]) => (
              <div key={category} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenCategory(openCategory === category ? null : category)}
                >
                  <span className="text-lg font-medium text-gray-900 capitalize">
                    {category} Questions
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openCategory === category && (
                  <div className="px-6 pb-4">
                    {questions.map((faq, index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <h3 className="text-gray-900 font-medium mb-2 flex items-start">
                          <HelpCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 ml-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h2>
          <p className="text-gray-600 mb-4">Our support team is available 24/7 to assist you</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;