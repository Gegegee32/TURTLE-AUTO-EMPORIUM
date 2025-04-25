
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="font-sans">
      <section className="bg-gray-100 text-center py-20 px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Safest Way to Buy or Sell Your Car in Kenya</h1>
        <p className="text-lg text-gray-700 mb-6">Explore our vast range of vehicles and automotive products</p>
        <div className="space-x-4">
          <button>Explore Vehicles</button>
          <button>Sell Your Car</button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-600">↓ Scroll Down</span>
        </div>
      </section>

      <a href="https://wa.me/254702969638" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg z-50">
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      <section className="py-10 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Find Your Car</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          <input placeholder="Search by name..." value={search} onChange={e => setSearch(e.target.value)} />
          <div className="flex gap-2 flex-wrap">
            <button>0–500K</button>
            <button>500K–1M</button>
            <button>1M+</button>
            <button>Advanced Search</button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div><h3>1. Select Vehicle</h3><p>Browse our collection and pick your desired car or tyre.</p></div>
          <div><h3>2. Enquire</h3><p>Reach out to us for more details and vehicle inspection.</p></div>
          <div><h3>3. Purchase / Delivery</h3><p>Complete your purchase and get fast delivery at your convenience.</p></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Shop Tyres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <input placeholder="Width (e.g., 205)" />
          <input placeholder="Ratio (e.g., 55)" />
          <input placeholder="Rim Size (e.g., 16)" />
        </div>
        <div className="text-center mt-4">
          <button>Search by Vehicle</button>
          <p className="text-sm text-gray-500 mt-2">Tyre damage guarantee available</p>
        </div>
      </section>

      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
        <p>Head Office: Nairobi, Kenya</p>
        <p>Phone: +254 702 969 638</p>
        <p className="text-green-600 font-semibold">Now Open: Mombasa Branch</p>
      </section>

      <footer className="bg-gray-800 text-white py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div><h4>Company Info</h4><ul><li>About Us</li><li>Contact</li><li>Careers</li></ul></div>
          <div><h4>Resources</h4><ul><li>FAQs</li><li>Knowledge Centre</li></ul></div>
          <div><h4>Legal</h4><ul><li>Terms</li><li>Privacy</li><li>Warranty</li></ul></div>
          <div><h4>Follow Us</h4><div className="flex gap-4"><FaFacebook /><FaInstagram /></div></div>
        </div>
        <p className="text-center text-sm mt-6">© {new Date().getFullYear()} Turtle Auto Emporium. All rights reserved.</p>
      </footer>
    </div>
  );
}
