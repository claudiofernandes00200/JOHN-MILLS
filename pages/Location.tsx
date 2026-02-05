import React from 'react';
import { MapPin, Navigation, ArrowRight, CornerRightUp } from 'lucide-react';
import locationContent from '../content/location.json';

const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-gray">
      <div className="bg-brand-dark py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{locationContent.header.title}</h1>
        <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
          <MapPin size={20} className="text-brand-red" />
          {locationContent.header.address}
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          {/* Directions Text */}
          <div className="lg:w-5/12 p-8 md:p-12 bg-white flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-brand-red/10 p-4 rounded-xl text-brand-red">
                <Navigation size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900">Step-by-Step</h2>
                <p className="text-slate-500 text-sm">Easy directions from the M4</p>
              </div>
            </div>

            <div className="space-y-0 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

              {locationContent.steps.map((step, index) => {
                const isLast = index === locationContent.steps.length - 1;
                const isFirst = index === 0;
                return (
                  <div key={step.title} className={`relative pl-12 ${isLast ? '' : 'pb-10'} group`}>
                    <div
                      className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${
                        isLast
                          ? 'bg-brand-dark border-2 border-brand-dark text-white shadow-lg shadow-slate-900/30'
                          : isFirst
                            ? 'bg-white border-2 border-brand-red text-brand-red group-hover:bg-brand-red group-hover:text-white'
                            : 'bg-white border-2 border-slate-300 text-slate-400 group-hover:border-brand-red group-hover:text-brand-red'
                      }`}
                    >
                      {isLast ? <MapPin size={16} /> : index + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-5 bg-amber-50 border border-amber-100 rounded-lg flex gap-3 items-start">
              <div className="bg-amber-100 p-1.5 rounded-full text-amber-600 shrink-0 mt-0.5">
                <ArrowRight size={14} />
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>{locationContent.tip.title}</strong> {locationContent.tip.text}
              </p>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:w-7/12 relative bg-slate-200 group overflow-hidden">
            {/* Map Placeholder Image - in a real app, this would be an embed */}
            <img
              src={locationContent.map.image}
              alt="Map Background"
              className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
            />

            {/* Floating Map Pin Card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center max-w-xs text-center transform transition-transform group-hover:scale-105 duration-300">
                <div className="bg-brand-red p-4 rounded-full text-white mb-4 shadow-lg shadow-red-500/30 animate-bounce">
                  <MapPin size={32} fill="currentColor" />
                </div>
                <span className="font-display font-bold text-xl text-slate-900">{locationContent.map.cardTitle}</span>
                <span className="text-sm text-slate-500 mt-1 mb-4">{locationContent.map.cardSubtitle}</span>
                <a
                  href={locationContent.map.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-brand-dark hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-colors w-full flex items-center justify-center gap-2"
                >
                  {locationContent.map.linkLabel} <CornerRightUp size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
