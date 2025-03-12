<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> a3cb5c2 (Updated feature XYZ)
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
<<<<<<< HEAD
=======
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium
                ${location.pathname === item.path
                  ? 'text-green-600 hover:text-green-700'
                  : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              {item.name}
            </Link>
          ))}
>>>>>>> a3cb5c2 (Updated feature XYZ)
        </div>
      </div>
    </nav>
  );
};

export default Navbar;