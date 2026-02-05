import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, Facebook, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <div className="bg-brand-dark py-32 pb-48 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Get In Touch</h1>
            <p className="text-slate-400 text-xl font-light">Booking a service? Need a quote? We're here to help.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 -mt-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-4/12 bg-slate-900 p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-carbon opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-[100px] opacity-20"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-12 text-white border-b border-slate-700 pb-6">Contact Info</h2>
                
                <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">Our Garage</h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm">
                        JM Motors, Kilmacredock,<br/>
                        Maynooth, Co.Kildare
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Phone size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">Phone</h3>
                    <p className="text-slate-400 font-light text-sm space-y-1">
                        <span className="block">Office: <a href="tel:016104376" className="hover:text-white transition-colors border-b border-slate-600 hover:border-white pb-0.5">01 610 4376</a></span>
                        <span className="block">Mobile: <a href="tel:0872325767" className="hover:text-white transition-colors border-b border-slate-600 hover:border-white pb-0.5">087 232 5767</a></span>
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Mail size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">Email</h3>
                    <a href="mailto:jmmotors@eircom.net" className="text-slate-400 hover:text-white transition-colors font-light text-sm border-b border-slate-600 hover:border-white pb-0.5">
                        jmmotors@eircom.net
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Clock size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">Working Hours</h3>
                    <p className="text-slate-400 font-light text-sm">
                        Mon-Fri: 8:30am - 6:00pm<br/>
                        Saturday: 9:00am - 1:00pm
                    </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between">
                   <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Social Media</span>
                   <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-brand-red transition-colors text-white shadow-lg"><Facebook size={20} /></a>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-8/12 p-12 lg:p-16 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Send us a Message</h2>
                <p className="text-slate-500 mb-12 text-lg font-light">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">Full Name</label>
                        <input 
                        type="text" 
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300"
                        placeholder="John Doe"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">Phone</label>
                        <input 
                        type="tel" 
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300"
                        placeholder="087 123 4567"
                        />
                    </div>
                </div>
                
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">Subject</label>
                    <div className="relative">
                        <select className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 appearance-none cursor-pointer">
                            <option>General Enquiry</option>
                            <option>Book a Service</option>
                            <option>Pre-NCT Check</option>
                            <option>Crash Repairs</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ArrowRight size={18} className="rotate-90" />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">Message</label>
                    <textarea 
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300 h-40 resize-none"
                    placeholder="Tell us about your vehicle issues..."
                    ></textarea>
                </div>
                
                <button 
                    type="submit"
                    className="w-full bg-brand-red hover:bg-red-600 text-white font-bold font-display uppercase tracking-widest py-5 rounded-xl shadow-xl shadow-red-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;