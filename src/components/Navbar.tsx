import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tractor } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'DASHBOARD', path: '/dashboard' },
    { name: 'BOOKINGS', path: '/bookings' },
    { name: 'ADD PRODUCT', path: '/add-product' },
    { name: 'HELP', path: '/help' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Tractor className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold">AGRI-LINK</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname === item.path
                      ? 'text-green-600 hover:text-green-700' 
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;