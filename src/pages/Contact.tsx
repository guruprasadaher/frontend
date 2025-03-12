import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team for any inquiries or support</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
<<<<<<< HEAD
                  <p className="text-gray-600">K.K Wagh College</p>
=======
                  <p className="text-gray-600">The AgriReinforcement Project, Nashik</p>
>>>>>>> a3cb5c2 (Updated feature XYZ)
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 7499597154</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@agri-link.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;