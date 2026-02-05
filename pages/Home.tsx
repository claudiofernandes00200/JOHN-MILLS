import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, Settings, Star, ChevronRight } from 'lucide-react';
import homeContent from '../content/home.json';
import { fetchSanity } from '../lib/sanity';
import { homeQuery } from '../lib/sanityQueries';

type HomeContent = typeof homeContent;

const Home: React.FC = () => {
  const [content, setContent] = useState<HomeContent>(homeContent);

  useEffect(() => {
    let active = true;
    fetchSanity<HomeContent>(homeQuery).then((data) => {
      if (data && active) {
        setContent(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="w-full bg-brand-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-brand-dark overflow-hidden group pb-48 pt-32">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=2070" 
            alt="Mechanic working on car engine" 
            className="w-full h-full object-cover opacity-50 animate-ken-burns transform origin-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-[pulse_2s_infinite]"></span>
              {content.heroTagline}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[0.9] animate-fade-in-up delay-100 drop-shadow-2xl">
              {content.heroTitleLine1}{' '}
              <span className="text-stroke-white text-transparent bg-clip-text bg-white/10">
                {content.heroTitleLine1Emphasis}
              </span>{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-orange-500">
                {content.heroTitleLine2}
              </span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl animate-fade-in-up delay-200 border-l-4 border-brand-red pl-8 font-light">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
              <Link to="/contact" className="relative overflow-hidden px-10 py-5 bg-brand-red hover:bg-red-600 text-white font-display font-bold uppercase tracking-widest rounded-sm shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group border border-transparent hover:border-red-400">
                <span className="relative z-10 flex items-center gap-3">
                  Book Service <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              </Link>
              
              <Link to="/services" className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-display font-bold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center backdrop-blur-sm group">
                Our Services <ChevronRight size={20} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned higher to avoid overlap */}
        <div className="absolute bottom-32 right-10 md:right-20 text-white/30 animate-pulse hidden lg:flex flex-col items-center gap-4 z-10">
           <div className="h-20 w-px bg-gradient-to-b from-transparent to-white/50"></div>
           <span className="text-[10px] uppercase tracking-[0.3em] writing-vertical-rl rotate-180">Scroll Down</span>
        </div>
      </section>

      {/* Floating Features - Overlapping the Hero */}
      <div className="container mx-auto px-4 -mt-32 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Shield size={32} />, title: "Fully Insured", text: "Comprehensive insurance coverage for total peace of mind while your car is with us." },
            { icon: <Settings size={32} />, title: "Expert Diagnostics", text: "State-of-the-art computer diagnostic systems to identify issues accurately." },
            { icon: <Clock size={32} />, title: "Free Collection", text: "Complimentary vehicle collection and return service from your home or work." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-xl p-8 rounded-xl shadow-2xl shadow-black/20 border-t-4 border-brand-red group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 rotate-0 group-hover:rotate-6 shadow-inner group-hover:shadow-red-500/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro / About Section */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-32 z-0 shadow-[-50px_0_100px_rgba(0,0,0,0.02)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] border border-brand-red/20">Est. 2004</span>
                <span className="h-px w-12 bg-slate-200"></span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
                High Standard of <br/> Workmanship is Our <span className="relative inline-block text-brand-red">
                    Priority
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-red opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                </span>
              </h2>
              <div className="prose prose-lg text-slate-600 mb-10 font-light">
                <p>
                  JM Motors mechanics are highly trained in Car Servicing. We use only the latest technology for our diagnostic systems and recommended parts to ensure safety and reliability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['All Makes & Models', 'Pre-NCT Specialists', 'Timing Belt Experts', 'Crash Repairs'].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle size={20} className="text-brand-red" />
                    <span className="font-semibold text-slate-800 text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest hover:text-brand-red transition-colors group">
                More About Us <div className="bg-slate-900 group-hover:bg-brand-red text-white p-1 rounded-full transition-colors"><ArrowRight size={16} /></div>
              </Link>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border-[10px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                 <img 
                  src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Workshop" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
               </div>
               {/* Experience Badge */}
               <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-brand-dark rounded-full flex flex-col items-center justify-center text-white z-20 shadow-2xl border-8 border-brand-light hidden md:flex animate-float hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <span className="text-6xl font-display font-bold text-brand-red block">20+</span>
                    <span className="text-xs font-bold uppercase tracking-widest block text-slate-400">Years of<br/>Excellence</span>
                  </div>
               </div>
               {/* Decorative dots */}
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-dots opacity-40 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="absolute inset-0 bg-carbon opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Comprehensive Car Care</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">We handle everything from routine maintenance to complex engine diagnostics.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {[
              { title: "Servicing", img: "https://images.unsplash.com/photo-1632823471565-1ec2a1ad4015?auto=format&fit=crop&q=80&w=600" },
              { title: "Diagnostics", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600" },
              { title: "Tyres & Alignment", img: "https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=600" },
              { title: "Repairs", img: "https://images.unsplash.com/photo-1504222490245-4f67ad434259?auto=format&fit=crop&q=80&w=600" }
            ].map((s, i) => (
              <Link to="/services" key={i} className="group relative h-80 overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-500">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur mb-4 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <ArrowRight size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-red transition-colors">{s.title}</h3>
                  <div className="h-1 w-12 bg-brand-red group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="inline-block border border-slate-600 hover:border-brand-red hover:bg-brand-red hover:text-white text-slate-300 px-10 py-4 rounded-sm uppercase font-bold tracking-[0.2em] text-xs transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-brand-light relative">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-dark text-brand-red p-4 rounded-full shadow-lg">
                    <Star size={24} fill="currentColor" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 mt-4 italic leading-relaxed">
                    "I’ve always trusted John with my pride and joy. His service is unrivalled. The attention to detail is something you just don't find elsewhere."
                </h2>
                
                <div className="flex items-center justify-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center font-bold text-slate-600 shadow-inner">MS</div>
                    <div className="text-left">
                        <div className="font-bold text-slate-900 text-lg">Mick Stone</div>
                        <div className="text-xs text-brand-red font-bold uppercase tracking-widest">Loyal Customer</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden group">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-dark/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">Ready to book?</h2>
          <p className="text-red-50 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Don't wait until it's too late. Secure your Pre-NCT check or service today with Maynooth's most reliable mechanics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/contact" className="bg-white text-brand-red hover:bg-slate-50 px-12 py-5 rounded-sm font-display font-bold uppercase tracking-widest shadow-2xl shadow-red-900/40 transition-all transform hover:-translate-y-1">
               Book Appointment
             </Link>
             <a href="tel:016104376" className="bg-brand-dark text-white hover:bg-slate-900 px-12 py-5 rounded-sm font-display font-bold uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-3">
               <Clock size={20} /> Call Us Now
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
