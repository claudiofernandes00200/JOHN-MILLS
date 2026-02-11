import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone, Smartphone } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;

  return (
    <div className="w-full bg-white text-slate-800 selection:bg-brand-red selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-end pt-20 pb-0 md:pt-32 lg:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Garage Workshop" 
              className="w-full h-full object-cover object-center"
           />
           {/* Dark Overlay for text readability */}
           <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/60"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 relative z-10 mb-8 md:mb-12">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-[0.9] mb-6 animate-fade-in-up delay-100 drop-shadow-2xl">
                    {content.home.hero.titlePart1} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
                        {content.home.hero.titlePart2}
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200 font-light border-l-4 border-brand-red pl-6 drop-shadow-lg">
                    {content.home.hero.description}
                </p>
                
                <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
                    <Link to="/services" className="bg-brand-red hover:bg-red-600 text-white font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-red-500/30 flex items-center gap-2 group text-sm md:text-base">
                       View Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                     <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm transition-all flex items-center gap-2 hover:border-white text-sm md:text-base">
                       Book Now
                    </Link>
                </div>
            </div>
        </div>

        {/* OVERLAPPING ACTION BAR - Compact Size */}
         <div className="container mx-auto px-4 relative z-20 -mb-16 md:-mb-20 animate-fade-in-up delay-500">
             <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-lg overflow-hidden bg-white max-w-5xl mx-auto">
                 
                 {/* Box 1: Call Us (White) */}
                 <div className="p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b lg:border-b-0 lg:border-r border-slate-100 group hover:bg-slate-50 transition-colors">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shrink-0 shadow-inner">
                        <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-lg font-display font-bold text-slate-900 mb-2">Contact Us</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide w-10">Office</span>
                                <a href={`tel:${content.general.phone.replace(/\s/g, '')}`} className="text-lg font-display font-bold text-brand-red hover:text-brand-dark transition-colors">
                                    {content.general.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide w-10">Mobile</span>
                                <a href={`tel:${content.general.mobile.replace(/\s/g, '')}`} className="text-base font-display font-bold text-slate-700 hover:text-brand-dark transition-colors">
                                    {content.general.mobile}
                                </a>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Box 2: Google Reviews (White) */}
                 <div className="p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group hover:bg-slate-50 transition-colors">
                     
                     <div className="flex flex-col items-start w-full relative z-10">
                         <div className="flex items-center gap-2 mb-1">
                             {/* Google G Logo SVG */}
                             <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                             </svg>
                             <span className="text-slate-600 font-bold text-sm font-sans">Customer Reviews</span>
                         </div>
                         
                         <div className="flex items-center gap-3">
                             <span className="text-3xl font-display font-bold text-slate-900">4.8</span>
                             <div className="flex flex-col">
                                 <div className="flex text-[#FBBF24] gap-0.5">
                                     {[1,2,3,4,5].map(i => (
                                       <Star key={i} size={16} fill="currentColor" strokeWidth={0} className={i === 5 ? "opacity-70" : ""} />
                                     ))}
                                 </div>
                                 <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Excellent customer satisfaction</span>
                             </div>
                         </div>
                     </div>
                 </div>

             </div>
         </div>
      </section>

      {/* INTRO SECTION */}
      <section className="pt-28 pb-24 bg-white text-slate-900 relative">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                       <div className="relative group">
                           <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-100 rounded-lg z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                           <img 
                             src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" 
                             alt="Mechanic" 
                             className="relative z-10 rounded-lg shadow-2xl transition-all duration-700 w-full"
                           />
                           <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-8 rounded-lg shadow-xl z-20 hidden md:block border-b-4 border-brand-red">
                               <div className="text-5xl font-display font-bold text-brand-red">{content.home.intro.yearsExperience}</div>
                               <div className="text-xs uppercase tracking-widest font-bold opacity-80 mt-1">Years Experience</div>
                           </div>
                       </div>
                  </div>
                  <div className="lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-0.5 bg-brand-red"></span>
                        <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">{content.home.intro.est}</h4>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight text-slate-900">{content.home.intro.title}</h2>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                          {content.home.intro.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                          {content.home.intro.badges.map((badge: string, i: number) => (
                              <div key={i} className="flex items-center gap-3">
                                  <CheckCircle size={20} className="text-brand-red shrink-0" />
                                  <span className="font-bold text-slate-800 text-sm">{badge}</span>
                              </div>
                          ))}
                      </div>

                      <div className="mt-12">
                          <Link to="/about" className="text-slate-900 font-bold uppercase tracking-widest text-sm hover:text-brand-red transition-colors flex items-center gap-2 group border-b-2 border-slate-100 pb-1 hover:border-brand-red w-fit">
                              More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SERVICES GALLERY */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h2>
                    <p className="text-slate-400 max-w-xl text-lg font-light">Comprehensive care for your vehicle using the latest diagnostic technology.</p>
                </div>
                <Link to="/services" className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded hover:bg-white hover:text-brand-dark transition-all font-bold uppercase tracking-wider text-xs">
                    View All Services <ArrowRight size={14} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Servicing", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600" },
                  { title: "Diagnostics", img: "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { title: "Tyres & Alignment", img: "https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                  { title: "Crash Repairs", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600" }
                ].map((s, i) => (
                    <Link to="/services" key={i} className="group relative h-[420px] overflow-hidden rounded-xl bg-slate-800 border border-white/5 hover:border-brand-red/50 transition-colors duration-500">
                        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-brand-red mb-6 w-0 group-hover:w-16 transition-all duration-500"></div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2">{s.title}</h3>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                                Explore <ArrowRight size={12} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            
             <div className="mt-12 md:hidden text-center">
                <Link to="/services" className="inline-block border border-slate-600 hover:border-brand-red hover:bg-brand-red hover:text-white text-slate-300 px-10 py-4 rounded-sm uppercase font-bold tracking-[0.2em] text-xs transition-all duration-300">
                  View All Services
                </Link>
            </div>
        </div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="py-24 bg-brand-light">
          <div className="container mx-auto px-4">
              <div className="bg-white rounded-2xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                      <Star size={250} className="text-brand-dark rotate-12" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                      <div className="flex gap-1 text-yellow-400 mb-8">
                          {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-10 max-w-4xl leading-tight">
                          "{content.testimonials[0].content}"
                      </h3>
                      <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                              {content.testimonials[0].name.charAt(0)}
                          </div>
                          <div className="text-left">
                              <div className="font-bold text-slate-900 text-lg">{content.testimonials[0].name}</div>
                              <div className="text-xs text-brand-red uppercase font-bold tracking-wider">Trusted Client</div>
                          </div>
                      </div>
                      
                      <Link to="/testimonials" className="mt-12 text-slate-500 hover:text-brand-red font-bold text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-brand-red pb-0.5">
                          Read More Reviews
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase italic tracking-tighter">
                Ready to Roll?
            </h2>
            <p className="text-red-100 text-xl max-w-2xl mx-auto mb-10 font-light">
                {content.home.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link to="/contact" className="px-12 py-5 bg-white text-brand-red font-display font-bold uppercase tracking-widest rounded shadow-2xl hover:bg-slate-100 transition-colors transform hover:-translate-y-1">
                    Book Appointment
                </Link>
                <a href={`tel:${content.general.phone.replace(/\s/g, '')}`} className="px-12 py-5 border-2 border-white text-white font-display font-bold uppercase tracking-widest rounded hover:bg-white hover:text-brand-red transition-colors flex items-center justify-center gap-2">
                    Call {content.general.phone}
                </a>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
