import React, { useEffect, useState } from 'react';
import { Wrench, CheckSquare, Monitor, Disc, Car, Zap, Activity, AlertTriangle, Layers, Ruler, Wind, ChevronRight } from 'lucide-react';
import servicesContent from '../content/services.json';
import { fetchSanity } from '../lib/sanity';
import { servicesQuery } from '../lib/sanityQueries';

type ServicesContent = typeof servicesContent;

const Services: React.FC = () => {
  const [content, setContent] = useState<ServicesContent>(servicesContent);

  useEffect(() => {
    let active = true;
    fetchSanity<ServicesContent>(servicesQuery).then((data) => {
      if (data && active) {
        setContent(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const iconMap = {
    wrench: Wrench,
    checksquare: CheckSquare,
    monitor: Monitor,
    disc: Disc,
    wind: Wind,
    zap: Zap,
    activity: Activity,
    ruler: Ruler,
    alerttriangle: AlertTriangle,
    car: Car,
    layers: Layers
  };

  const highlightTitleLines = content.highlight.title.split('\n');

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header - Increased padding for overlap safety */}
      <div className="bg-brand-dark py-32 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-carbon"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up">{content.header.title}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed animate-fade-in-up delay-100">
            {content.header.subtitle}
          </p>
        </div>
      </div>

      {/* Services Grid - Negative margin pulls it up */}
      <div className="container mx-auto px-4 py-20 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] ?? Wrench;
            return (
            <div key={service.id ?? index} className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-white group hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-red-500/40 group-hover:scale-110">
                    <Icon size={32} />
                    </div>
                    <span className="text-4xl font-display font-bold text-slate-100 group-hover:text-brand-red/10 transition-colors duration-500">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand-red transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-brand-red font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>

      {/* Highlight Feature */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border-l-8 border-brand-red relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
              {highlightTitleLines.map((line, idx) => (
                <span key={line}>
                  {line}
                  {idx < highlightTitleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-slate-600 max-w-xl text-lg mb-8 leading-relaxed">
              {content.highlight.body}
            </p>
            <ul className="flex flex-wrap gap-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
               {content.highlight.bullets.map((bullet) => (
                 <li key={bullet} className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                   {bullet}
                 </li>
               ))}
            </ul>
          </div>
          
          <div className="relative z-10 shrink-0">
             <a href={`tel:${content.highlight.ctaPhone}`} className="inline-flex items-center gap-4 bg-brand-dark hover:bg-slate-900 text-white font-display font-bold uppercase tracking-widest py-5 px-10 rounded-sm transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group-hover:ring-4 ring-brand-red/20">
               <Car size={24} /> {content.highlight.ctaLabel}
             </a>
          </div>

          {/* Background decoration */}
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-1000">
             <Car size={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
