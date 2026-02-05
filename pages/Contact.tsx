import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Facebook, ArrowRight } from 'lucide-react';
import contactContent from '../content/contact.json';
import { fetchSanity } from '../lib/sanity';
import { contactQuery } from '../lib/sanityQueries';

type ContactContent = typeof contactContent;

const Contact: React.FC = () => {
  const toTel = (value: string) => value.replace(/\s+/g, '');
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState<ContactContent>(contactContent);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const hash = window.location.hash;
    setSubmitted(hash.includes('success=1'));
  }, []);

  useEffect(() => {
    let active = true;
    fetchSanity<ContactContent>(contactQuery).then((data) => {
      if (data && active) {
        setContent(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-light">
      <div className="bg-brand-dark py-32 pb-48 text-center text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${content.header.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">{content.header.title}</h1>
            <p className="text-slate-400 text-xl font-light">{content.header.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 -mt-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-4/12 bg-slate-900 p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-carbon opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-[100px] opacity-20"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-12 text-white border-b border-slate-700 pb-6">{content.info.title}</h2>
                
                <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">{content.info.addressTitle}</h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm">
                        {content.info.addressLines.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Phone size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">{content.info.phoneTitle}</h3>
                    <p className="text-slate-400 font-light text-sm space-y-1">
                        <span className="block">
                          Office:{' '}
                          <a href={`tel:${toTel(content.info.phoneOffice)}`} className="hover:text-white transition-colors border-b border-slate-600 hover:border-white pb-0.5">
                            {content.info.phoneOffice}
                          </a>
                        </span>
                        <span className="block">
                          Mobile:{' '}
                          <a href={`tel:${toTel(content.info.phoneMobile)}`} className="hover:text-white transition-colors border-b border-slate-600 hover:border-white pb-0.5">
                            {content.info.phoneMobile}
                          </a>
                        </span>
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Mail size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">{content.info.emailTitle}</h3>
                    <a href={`mailto:${content.info.email}`} className="text-slate-400 hover:text-white transition-colors font-light text-sm border-b border-slate-600 hover:border-white pb-0.5">
                        {content.info.email}
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-brand-red transition-colors duration-300 shadow-lg">
                    <Clock size={24} className="text-white" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-200">{content.info.hoursTitle}</h3>
                    <p className="text-slate-400 font-light text-sm">
                        {content.info.hoursLines.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between">
                   <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">{content.info.socialLabel}</span>
                   <a href={content.info.facebookUrl} className="p-3 bg-slate-800 rounded-full hover:bg-brand-red transition-colors text-white shadow-lg"><Facebook size={20} /></a>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-8/12 p-12 lg:p-16 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">{content.form.title}</h2>
                <p className="text-slate-500 mb-12 text-lg font-light">{content.form.subtitle}</p>

                {submitted && (
                  <div className="mb-10 rounded-xl border border-green-200 bg-green-50 px-6 py-4 text-green-800 text-sm font-semibold">
                    Thanks! Your message has been received. We will get back to you shortly.
                  </div>
                )}
                
                <form
                  className="space-y-8"
                  name="contact"
                  method="POST"
                  action="/#/contact?success=1"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">{content.form.nameLabel}</label>
                        <input 
                        type="text" 
                        name="name"
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300"
                        placeholder={content.form.namePlaceholder}
                        required
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">{content.form.phoneLabel}</label>
                        <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300"
                        placeholder={content.form.phonePlaceholder}
                        />
                    </div>
                </div>
                
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">{content.form.subjectLabel}</label>
                    <div className="relative">
                        <select name="subject" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 appearance-none cursor-pointer">
                            {content.form.subjectOptions.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ArrowRight size={18} className="rotate-90" />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 group-focus-within:text-brand-red transition-colors">{content.form.messageLabel}</label>
                    <textarea 
                    name="message"
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-300 h-40 resize-none"
                    placeholder={content.form.messagePlaceholder}
                    required
                    ></textarea>
                </div>
                
                <button 
                    type="submit"
                    className="w-full bg-brand-red hover:bg-red-600 text-white font-bold font-display uppercase tracking-widest py-5 rounded-xl shadow-xl shadow-red-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                    {content.form.submitLabel} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
