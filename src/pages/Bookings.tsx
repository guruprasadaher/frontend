import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ChevronDown } from 'lucide-react';

const Bookings = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  
  const bookings = [
    {
      id: 1,
      equipment: 'Tractor - John Deere 5E',
      date: '2025-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'Wawge Farms',
      status: 'upcoming',
      price: 150,
    },
    {
      id: 2,
      equipment: 'Harvester - Case IH 140',
      date: '2025-03-20',
      time: '08:00 AM - 06:00 PM',
      location: 'Nanote Agricultural Center',
      status: 'completed',
      price: 750,
    },
    {
      id: 3,
      equipment: 'Planter - Kinze 3500',
      date: '2025-03-25',
      time: '07:00 AM - 04:00 PM',
      location: 'Beni Fields',
      status: 'cancelled',
      price: 225,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">Manage your equipment rentals and bookings</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500 appearance-none"
              >
                <option value="all">All Bookings</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                className="pl-10 w-full rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{booking.equipment}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      {booking.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      {booking.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      {booking.location}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 mt-2">${booking.price}</span>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;