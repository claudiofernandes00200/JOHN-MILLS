import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Location: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;

  return (
    <div className="min-h-screen bg-brand-gray">
      <div className="bg-brand-dark py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Find Us</h1>
        <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
          <MapPin size={20} className="text-brand-red" /> 
          {content.general.address}
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

              {/* Step 1 */}
              <div className="relative pl-12 pb-10 group">
                <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-brand-red text-brand-red rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">1</div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">M4 Motorway</h3>
                <p className="text-slate-600 text-sm">Take the Leixlip exit <span className="font-bold text-slate-800">(Junction 6)</span> from the M4 motorway.</p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-12 pb-10 group">
                <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-slate-300 text-slate-400 rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:border-brand-red group-hover:text-brand-red transition-colors">2</div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Roundabout</h3>
                <p className="text-slate-600 text-sm">Take the <span className="font-bold">left exit</span> on the next roundabout.</p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-12 pb-10 group">
                <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-slate-300 text-slate-400 rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:border-brand-red group-hover:text-brand-red transition-colors">3</div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">T-Junction</h3>
                <p className="text-slate-600 text-sm">Continue until you reach a “T” junction, and then <span className="font-bold">turn left</span>.</p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-0 w-10 h-10 bg-brand-dark border-2 border-brand-dark text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-lg shadow-slate-900/30">
                  <MapPin size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Arrival</h3>
                <p className="text-slate-600 text-sm">The road turns sharp right. JM Motors is <span className="font-bold">100m on the left</span>. Look for the sign outside.</p>
              </div>
            </div>

            <div className="mt-12 p-5 bg-amber-50 border border-amber-100 rounded-lg flex gap-3 items-start">
              <div className="bg-amber-100 p-1.5 rounded-full text-amber-600 shrink-0 mt-0.5">
                 <ArrowRight size={14} />
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Can't make it?</strong> We offer a free collection and return service. Call us to arrange.
              </p>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:w-7/12 relative bg-slate-200 h-[450px] lg:h-auto">
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
  );
};

export default Location;