import React from 'react';
import { Wrench, CheckSquare, Monitor, Disc, Car, Zap, Activity, AlertTriangle, Layers, Ruler, Wind, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Services: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;

  // Map IDs to Icons (since we can't persist component functions easily in JSON)
  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Wrench size={32} />;
      case 2: return <CheckSquare size={32} />;
      case 3: return <Monitor size={32} />;
      case 4: return <Disc size={32} />;
      case 5: return <Wind size={32} />;
      case 6: return <Zap size={32} />;
      case 7: return <Activity size={32} />;
      case 8: return <Ruler size={32} />;
      case 9: return <AlertTriangle size={32} />;
      case 10: return <Car size={32} />;
      case 11: return <Layers size={32} />;
      default: return <Wrench size={32} />;
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header - Increased padding for overlap safety */}
      <div className="bg-brand-dark py-32 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-carbon"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up">{content.services.headerTitle}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed animate-fade-in-up delay-100">
            {content.services.headerText}
          </p>
        </div>
      </div>

      {/* Services Grid - Negative margin pulls it up */}
      <div className="container mx-auto px-4 py-20 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service: any, index: number) => (
            <div key={service.id} className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-white group hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-red-500/40 group-hover:scale-110">
                    {getIcon(service.id)}
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
          ))}
        </div>
      </div>

      {/* Highlight Feature */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border-l-8 border-brand-red relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">{content.services.collectionTitle}</h2>
            <p className="text-slate-600 max-w-xl text-lg mb-8 leading-relaxed">
              {content.services.collectionText}
            </p>
            <ul className="flex flex-wrap gap-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
               <li className="flex items-center gap-3"><div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div> Home Collection</li>
               <li className="flex items-center gap-3"><div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div> Work Collection</li>
               <li className="flex items-center gap-3"><div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div> Fully Insured</li>
            </ul>
          </div>
          
          <div className="relative z-10 shrink-0">
             <a href={`tel:${content.general.mobile.replace(/\s/g, '')}`} className="inline-flex items-center gap-4 bg-brand-dark hover:bg-slate-900 text-white font-display font-bold uppercase tracking-widest py-5 px-10 rounded-sm transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group-hover:ring-4 ring-brand-red/20">
               <Car size={24} /> Arrange Collection
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