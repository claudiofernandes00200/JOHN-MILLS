import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Navigation, Smartphone } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Contact: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Hero Section - Taller to accommodate overlap safely */}
      <div className="bg-brand-dark pt-32 pb-48 md:pt-40 md:pb-64 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 to-brand-dark"></div>
        
        {/* Content Container - Pushed up to avoid overlap */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight animate-fade-in-up">Contact Us</h1>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl mx-auto animate-fade-in-up delay-100">
              We are here to help with all your automotive needs.
            </p>
        </div>
      </div>

      {/* Main Content Card - Overlapping Hero with Negative Margin */}
      <div className="container mx-auto px-4 -mt-32 md:-mt-48 relative z-20 pb-20 animate-fade-in-up delay-200">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
            
            {/* Left Side: Contact Info (White Theme - "Inside white stuff") */}
            <div className="md:w-5/12 bg-white p-8 md:p-12 relative overflow-hidden flex flex-col border-r border-slate-100">
                <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">Get in Touch</h3>
                    
                    <div className="space-y-10">
                        {/* Address */}
                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300 text-brand-red group-hover:text-white shadow-sm">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-1">Visit Us</h4>
                                <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line font-medium">
                                    {content.general.address.replace(', ', ',\n')}
                                </p>
                                <a 
                                    href={content.general.googleMapsLink || "https://maps.google.com"} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-3 text-brand-red text-xs font-bold hover:text-brand-dark transition-colors border-b border-brand-red/20 hover:border-brand-dark pb-0.5"
                                >
                                    <Navigation size={12} /> Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300 text-brand-red group-hover:text-white shadow-sm">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-1">Email Us</h4>
                                <a href={`mailto:${content.general.email}`} className="text-slate-700 hover:text-brand-red transition-colors text-base font-medium block">
                                    {content.general.email}
                                </a>
                                <span className="text-slate-500 text-xs mt-1 block">Response within 24 hours</span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-5 group">
                             <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors duration-300 text-brand-red group-hover:text-white shadow-sm">
                                <Phone size={22} />
                            </div>
                            <div className="w-full">
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-2">Call Us</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-500 text-xs uppercase font-bold flex items-center gap-2"><Phone size={12} /> Office</span>
                                        <a href={`tel:${content.general.phone.replace(/\s/g, '')}`} className="text-slate-900 hover:text-brand-red transition-colors font-display font-bold text-lg tracking-wide">
                                            {content.general.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 text-xs uppercase font-bold flex items-center gap-2"><Smartphone size={12} /> Mobile</span>
                                        <a href={`tel:${content.general.mobile.replace(/\s/g, '')}`} className="text-slate-900 hover:text-brand-red transition-colors font-display font-bold text-lg tracking-wide">
                                            {content.general.mobile}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Footer */}
                <div className="pt-8 mt-10 border-t border-slate-100 relative z-10">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-400 uppercase tracking-widest">Connect With Us</span>
                        <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-[#1877F2] transition-all text-slate-600 hover:text-white hover:-translate-y-1">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side: Hours & Map (Grey Theme for Contrast) */}
            <div className="md:w-7/12 bg-slate-50 p-8 md:p-12 flex flex-col">
                <div className="mb-12">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm text-brand-red flex items-center justify-center">
                            <Clock size={20} />
                        </div>
                        Opening Hours
                    </h3>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0 group">
                                <span className="font-medium text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Monday - Friday</span>
                                <span className="font-bold text-slate-900 font-display">{content.general.hours.weekdays.replace('Mon-Fri: ', '')}</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0 group">
                                <span className="font-medium text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Saturday</span>
                                <span className="font-bold text-slate-900 font-display">{content.general.hours.saturday.replace('Saturday: ', '')}</span>
                            </li>
                            <li className="flex items-center justify-between pb-0 pt-1 group">
                                <span className="font-medium text-slate-500 text-sm group-hover:text-slate-800 transition-colors">Sunday</span>
                                <span className="font-bold text-brand-red px-3 py-1 bg-red-50 rounded text-xs uppercase tracking-wide border border-brand-red/10">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-5 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-white shadow-sm text-brand-red flex items-center justify-center">
                            <Navigation size={20} />
                        </div>
                        Location
                    </h3>
                    <div className="w-full flex-grow min-h-[300px] bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner border border-slate-200 group">
                         <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.6074247838915!2d-6.543239822949348!3d53.36818037308921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486771c0ed118b15%3A0xef13d81549446a93!2sJM%20Motors!5e0!3m2!1spt-PT!2sie!4v1770820034745!5m2!1spt-PT!2sie" 
                           className="w-full h-full absolute inset-0"
                           style={{ border: 0 }}
                           allowFullScreen 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           title="JM Motors Location Map"
                         ></iframe>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;