import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
=======
import Bookings from './pages/Bookings';
import AddProduct from './pages/AddProduct';
import Help from './pages/Help';
>>>>>>> a3cb5c2 (Updated feature XYZ)

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
=======
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/help" element={<Help />} />
>>>>>>> a3cb5c2 (Updated feature XYZ)
        </Routes>

        {/* Chatbot Icon and Chat Window */}
        <div className="fixed bottom-6 right-6 z-50">
          {isChatOpen ? (
            <div className="bg-white rounded-lg shadow-xl w-80 h-96 mb-4">
              <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold">Agri-Link Support</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 h-72 overflow-y-auto">
                <div className="bg-gray-100 rounded-lg p-3 mb-2">
                  <p className="text-sm">
                    Hello! How can I help you today?
                  </p>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;