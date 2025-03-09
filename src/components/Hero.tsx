import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WELCOME TO AGRI-LINK
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          BRIDGING FARMERS, EMPOWERING GROWTH!
        </h2>
        <Link 
          to="/register" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          REGISTER NOW
        </Link>
        <p className="mt-6 text-lg max-w-2xl">
          Top-Of-The-Line Equipment Ready At Flexible Rates Around
        </p>
      </div>
    </div>
  );
};

export default Hero;