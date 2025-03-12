<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, Users, Shield, Clock, ChevronRight, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            WELCOME TO AGRI-LINK
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            BRIDGING FARMERS, EMPOWERING GROWTH!
          </h2>
          <p className="text-xl mb-12 max-w-2xl">
            Connect with local equipment owners and access top-quality agricultural machinery at competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/register" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg transition duration-300 text-lg"
            >
              Learn More
            </Link>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tractor, Users, Shield, Clock, ChevronRight, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<string | null>(null);

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  };

  const clickScale = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Video */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2021/08/10/84624-585553977_tiny.mp4" />
          </video>
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WELCOME TO AGRI-LINK
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BRIDGING FARMERS, EMPOWERING GROWTH!
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-2xl"
            whileHover={{ scale: 1.02 }}
          >
            Connect with local equipment owners and access top-quality agricultural machinery at competitive rates.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={hoverScale}
              whileTap={clickScale}
            >
              <Link 
                to="/register" 
                className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div
              whileHover={hoverScale}
              whileTap={clickScale}
            >
              <Link 
                to="/contact" 
                className="block bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Learn More
              </Link>
            </motion.div>
>>>>>>> a3cb5c2 (Updated feature XYZ)
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Agri-Link?</h2>
            <p className="text-xl text-gray-600">Revolutionizing agricultural equipment sharing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Tractor className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Equipment</h3>
              <p className="text-gray-600">Access to a wide range of well-maintained agricultural machinery</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Platform</h3>
              <p className="text-gray-600">Verified users and secure payment system for peace of mind</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Booking</h3>
              <p className="text-gray-600">Easy scheduling and booking management system</p>
            </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Tractor, title: "Quality Equipment", description: "Access to a wide range of well-maintained agricultural machinery" },
              { icon: Shield, title: "Secure Platform", description: "Verified users and secure payment system for peace of mind" },
              { icon: Clock, title: "Flexible Booking", description: "Easy scheduling and booking management system" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-8 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> a3cb5c2 (Updated feature XYZ)
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
              <p className="text-gray-600">Sign up as a farmer or equipment owner</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Browse Equipment</h3>
              <p className="text-gray-600">Find the right machinery for your needs</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Book & Pay</h3>
              <p className="text-gray-600">Secure booking with flexible payment options</p>
            </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "01", title: "Create an Account", description: "Sign up as a farmer or equipment owner" },
              { number: "02", title: "Browse Equipment", description: "Find the right machinery for your needs" },
              { number: "03", title: "Book & Pay", description: "Secure booking with flexible payment options" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-green-600 mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
>>>>>>> a3cb5c2 (Updated feature XYZ)
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Trusted by farmers across the country</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mohan", role: "Local Farmer", testimonial: "Agri-Link has transformed how I manage my farming equipment. The platform is easy to use and the service is excellent." },
              { name: "Shiva", role: "Equipment Owner", testimonial: "Using Agri-Link has increased my equipment rental income significantly. Highly recommend!" },
              { name: "Khushi", role: "Farm Manager", testimonial: "The flexibility and ease of booking equipment through Agri-Link is unmatched. A game changer for our operations." }
            ].map((user, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "{user.testimonial}"
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                <p className="text-gray-600">{user.role}</p>
                </div>
              </div>
              </div>
            ))}
            </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Shravani",
            role: "Local Farmer",
            testimonial: "Agri-Link has transformed how I manage my farming equipment. The platform is easy to use and the service is excellent."
          },
          {
            name: "Yash",
            role: "Organic Farmer",
            testimonial: "Thanks to Agri-Link, I can now easily find and book the equipment I need for my organic farm. Highly recommended!"
          },
          {
            name: "Khushi",
            role: "Dairy Farmer",
            testimonial: "Agri-Link's secure platform and flexible booking options have made my life so much easier. It's a game changer for dairy farmers."
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "{testimonial.testimonial}"
            </p>
            <div className="flex items-center">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
          </div>
>>>>>>> a3cb5c2 (Updated feature XYZ)
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl">Join our growing community of farmers and equipment owners</p>
            </div>
            <Link 
              to="/register" 
              className="flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Register Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
=======
              <motion.h2 
                className="text-3xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                className="text-xl"
                whileHover={{ scale: 1.05 }}
              >
                Join our growing community of farmers and equipment owners
              </motion.p>
            </div>
            <motion.div
              whileHover={hoverScale}
              whileTap={clickScale}
            >
              <Link 
                to="/register" 
                className="flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Register Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
>>>>>>> a3cb5c2 (Updated feature XYZ)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;