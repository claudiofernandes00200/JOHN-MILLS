import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';
import testimonialsContent from '../content/testimonials.json';

const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = testimonialsContent.reviews;

  return (
    <div className="min-h-screen bg-brand-light">
       <div className="bg-brand-dark py-32 pb-48 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-carbon opacity-10"></div>
         {/* Animated circles */}
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">{testimonialsContent.header.title}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">{testimonialsContent.header.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={review.id} className={`bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:border-brand-red/30 transition-all duration-300 relative flex flex-col group ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}>
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-red-50 transition-colors duration-500 transform group-hover:scale-110">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 mb-8 text-yellow-400 relative z-10">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />)}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed italic mb-8 flex-grow relative z-10 font-medium">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-slate-50 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-red-500/30 ring-4 ring-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display text-lg">{review.name}</h4>
                  {(review.location || review.role) && (
                    <p className="text-xs text-brand-red font-bold uppercase tracking-widest mt-1">
                      {review.role ? review.role : ''}
                      {review.role && review.location ? ' - ' : ''}
                      {review.location ? review.location : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <div className="inline-flex flex-col items-center">
                <p className="text-slate-500 mb-8 text-lg font-light">{testimonialsContent.cta.text}</p>
                <a href={`mailto:${testimonialsContent.cta.email}`} className="flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-red/30 text-slate-800 font-bold uppercase tracking-widest py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all group">
                   <MessageSquare size={20} className="text-brand-red group-hover:scale-110 transition-transform" /> {testimonialsContent.cta.buttonLabel}
                </a>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
