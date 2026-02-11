import React from 'react';
import { Check, Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();
  if (!content) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
       <div className="bg-brand-dark py-24 text-center text-white relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=2070" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
            alt="Workshop Background" 
         />
         <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">{content.about.title}</h1>
            <p className="text-slate-300 text-lg uppercase tracking-widest font-semibold">{content.about.subtitle}</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8 border-l-4 border-brand-red pl-6">
              {content.about.heading}
            </h2>
            <div className="prose prose-lg text-slate-600 text-justify leading-relaxed">
              <p className="mb-6">{content.about.p1}</p>
              <p className="mb-6">{content.about.p2}</p>
              <p className="mb-6">{content.about.p3}</p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '20+ Years Experience', 
                'Latest Diagnostic Tech', 
                'Fully Insured Service', 
                'Warranty Protected', 
                'All Makes & Models', 
                'Free Collection'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-brand-gray p-3 rounded-lg border border-slate-100">
                  <div className="bg-green-100 p-1 rounded-full shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
               <Link to="/contact" className="inline-block bg-brand-red text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-red-700 transition-colors">
                  Contact The Team
               </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Mechanic working on engine" 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-display font-bold text-xl">Expert Diagnostics</p>
                 <p className="text-slate-300 text-sm">Finding the root cause, not just the symptom.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-blue p-6 rounded-xl text-white text-center flex flex-col items-center justify-center shadow-lg">
                 <Calendar size={32} className="text-brand-red mb-3" />
                 <span className="text-3xl font-display font-bold">{content.about.stats.years}</span>
                 <span className="text-xs uppercase opacity-70 mt-1">Years in Business</span>
              </div>
              <div className="bg-brand-dark p-6 rounded-xl text-white text-center flex flex-col items-center justify-center shadow-lg">
                 <Users size={32} className="text-brand-red mb-3" />
                 <span className="text-3xl font-display font-bold">{content.about.stats.customers}</span>
                 <span className="text-xs uppercase opacity-70 mt-1">Happy Customers</span>
              </div>
            </div>

             <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-100">
                  <Award size={100} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 relative z-10">Our Promise</h3>
                <p className="text-slate-600 text-sm relative z-10">
                  We promise to provide transparent pricing, honest advice, and quality workmanship on every single job. No hidden fees, no unnecessary repairs.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;