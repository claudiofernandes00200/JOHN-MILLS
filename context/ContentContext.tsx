import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext<any>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the content.json file that Netlify CMS updates
    fetch('./content.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch content");
        return res.json();
      })
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load site content:", err);
        setError("Could not load website content.");
        setLoading(false);
      });
  }, []);

  const updateContent = (newContent: any) => {
    // In read-only mode, we can only update local state temporarily
    setContent(newContent);
  };

  const resetContent = () => {
     window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 font-display uppercase tracking-widest text-sm">Loading Engine...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);