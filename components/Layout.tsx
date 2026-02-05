import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Wrench, Clock, Facebook, Instagram, ChevronRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Location', path: '/location' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-slate-800 font-sans selection:bg-brand-red selection:text-white">
      {/* Top Bar - Dark & Technical */}
      <div className="bg-brand-dark text-slate-400 py-2 text-xs font-medium tracking-wide border-b border-slate-800/50 z-50 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-carbon opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 relative z-10">
          <div className="flex items-center space-x-6">
            <a href="tel:016104376" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Phone size={14} className="text-brand-red group-hover:animate-pulse" /> <span>01 610 4376</span>
            </a>
             <a href="tel:0872325767" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Phone size={14} className="text-brand-red group-hover:animate-pulse" /> <span>087 232 5767</span>
            </a>
            <a href="mailto:jmmotors@eircom.net" className="flex items-center gap-2 hover:text-white transition-colors hidden sm:flex">
              <Mail size={14} className="text-brand-red" /> <span>jmmotors@eircom.net</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-slate-400">
              <Clock size={14} className="text-brand-red" /> 
              <span>Mon-Fri: 8:30am - 6:00pm</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ease-in-out border-b ${
          scrolled ? 'glass border-slate-200/60 shadow-lg shadow-slate-900/5 py-3' : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="bg-brand-dark p-2.5 rounded-lg transform group-hover:-rotate-3 transition-transform duration-300 shadow-xl shadow-slate-900/20 ring-1 ring-slate-900/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-slate-800"></div>
                <Wrench className="text-brand-red relative z-10" size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-slate-900 uppercase leading-none group-hover:text-brand-dark transition-colors">
                  JM <span className="text-brand-red">Motors</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-0.5 group-hover:text-brand-red transition-colors">Automotive Experts</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 group overflow-hidden ${
                    isActive(link.path)
                      ? 'text-brand-red'
                      : 'text-slate-600 hover:text-brand-red'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Hover/Active Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-6 px-7 py-2.5 bg-brand-red hover:bg-red-600 text-white text-sm font-bold uppercase tracking-wide rounded-sm shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:text-brand-red focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white px-4 py-4 shadow-inner space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'bg-red-50 text-brand-red'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-red'
                }`}
              >
                {link.name}
                {isActive(link.path) && <ChevronRight size={16} />}
              </Link>
            ))}
             <Link 
                to="/contact" 
                className="block mt-4 text-center px-4 py-3 bg-brand-red text-white text-sm font-bold uppercase tracking-wide rounded shadow-md"
              >
                Book Appointment
              </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white border-t border-slate-800 relative overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 bg-carbon opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 group cursor-default">
                <div className="bg-brand-red p-1.5 rounded transform group-hover:rotate-12 transition-transform">
                    <Wrench className="text-white" size={20} />
                </div>
                <span className="font-display text-2xl font-bold uppercase tracking-tight">JM Motors</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-brand-red/30 pl-4">
                Experience the gold standard in automotive care. Serving Maynooth and Kildare with precision diagnostics and expert repairs for over 20 years.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-6 text-white inline-flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                Our Services
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Full Car Servicing', 'Pre-NCT Testing', 'Computer Diagnostics', 'Crash Repairs', 'Wheel Alignment'].map(item => (
                  <li key={item} className="group">
                    <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-red transition-colors"></span> 
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-6 text-white inline-flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                Get in Touch
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3 group">
                  <div className="p-2 bg-slate-800 rounded group-hover:text-white transition-colors">
                      <MapPin size={16} className="text-brand-red" />
                  </div>
                  <span className="group-hover:text-slate-200 transition-colors">Kilmacredock, Maynooth,<br/>Co.Kildare</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-slate-800 rounded group-hover:text-white transition-colors">
                      <Phone size={16} className="text-brand-red" />
                  </div>
                  <span className="group-hover:text-slate-200 transition-colors">01 610 4376</span>
                </li>
                <li className="flex items-center gap-3 group">
                   <div className="p-2 bg-slate-800 rounded group-hover:text-white transition-colors">
                      <Mail size={16} className="text-brand-red" />
                   </div>
                  <span className="group-hover:text-slate-200 transition-colors">jmmotors@eircom.net</span>
                </li>
              </ul>
            </div>

            {/* Hours Column */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
              <h3 className="font-display text-lg font-bold mb-4 text-white flex items-center gap-2">
                 <Clock size={18} className="text-brand-red" /> Opening Hours
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-slate-300 border-b border-slate-700/50 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold text-white">8:30 - 6:00</span>
                </li>
                <li className="flex justify-between text-slate-300 border-b border-slate-700/50 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold text-white">9:00 - 1:00</span>
                </li>
                <li className="flex justify-between text-slate-500 pt-1">
                  <span>Sunday</span>
                  <span className="text-brand-red text-xs font-bold uppercase border border-brand-red/30 px-2 py-0.5 rounded">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950 py-6 border-t border-slate-800/50 relative z-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider font-medium">
            <p>&copy; {new Date().getFullYear()} John Mills Motors. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2">
                Designed for Performance
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                Professional Automotive Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;