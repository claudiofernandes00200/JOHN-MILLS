import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { Lock, Save, RotateCcw, LayoutDashboard, Type, List, MessageSquare, Phone, Download, Upload, FileJson, Trash2, Plus, Code, Database, Copy, Check, AlertTriangle, Eye, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const { content, updateContent, resetContent } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('general');
  const [tempContent, setTempContent] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load content into temp state when authenticated
  useEffect(() => {
    if (content) setTempContent(JSON.parse(JSON.stringify(content)));
  }, [content]);

  // Simple hash function to obfuscate the password (NOT military grade, but prevents plain text reading)
  const simpleHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hash of 'admin' is 92668751
    if (simpleHash(password) === 92668751) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect access key.');
    }
  };

  const handleSave = () => {
    updateContent(tempContent);
    alert('SAVED TO LOCAL PREVIEW!\n\nNOTE: This has NOT updated the live website for other visitors yet.\n\nGo to the "Database / Deploy" tab to make these changes public.');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(tempContent, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'site-content.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setTempContent(json);
        updateContent(json);
        alert('Content imported successfully!');
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const copyToClipboard = () => {
    const code = `const defaultContent = ${JSON.stringify(tempContent, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateField = (path: string, value: any) => {
    const newContent = JSON.parse(JSON.stringify(tempContent));
    const keys = path.split('.');
    let current = newContent;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setTempContent(newContent);
  };

  const updateArrayItem = (path: string, index: number, field: string, value: any) => {
     const newContent = JSON.parse(JSON.stringify(tempContent));
     const keys = path.split('.');
     let current = newContent;
     for (let i = 0; i < keys.length; i++) {
       current = current[keys[i]];
     }
     current[index][field] = value;
     setTempContent(newContent);
  };

  const addArrayItem = (path: string, itemTemplate: any) => {
     const newContent = JSON.parse(JSON.stringify(tempContent));
     const keys = path.split('.');
     let current = newContent;
     for (let i = 0; i < keys.length; i++) {
       current = current[keys[i]];
     }
     // Generate a unique ID if needed
     const newItem = { ...itemTemplate, id: Date.now() };
     current.push(newItem);
     setTempContent(newContent);
  };

  const removeArrayItem = (path: string, index: number) => {
     if (!window.confirm("Are you sure you want to remove this item?")) return;
     const newContent = JSON.parse(JSON.stringify(tempContent));
     const keys = path.split('.');
     let current = newContent;
     for (let i = 0; i < keys.length; i++) {
       current = current[keys[i]];
     }
     current.splice(index, 1);
     setTempContent(newContent);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden">
        {/* Matrix-like background effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-black opacity-90"></div>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-red p-4 rounded-full shadow-lg shadow-red-500/50">
              <Database className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold text-center mb-2 text-white">Content Database</h1>
          <p className="text-slate-400 text-center mb-8 text-sm uppercase tracking-widest">Authorized Personnel Only</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-10 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all text-white placeholder:text-slate-600"
                  placeholder="Enter password..."
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-900/50 transition-all transform hover:-translate-y-1">
              Connect to Database
            </button>
            <div className="text-center mt-4">
                <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-slate-400 pb-0.5">Return to Website</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (!tempContent) return <div className="min-h-screen bg-brand-dark text-white flex items-center justify-center">Loading Database...</div>;

  const tabs = [
    { id: 'general', label: 'General Info', icon: <Phone size={18} /> },
    { id: 'home', label: 'Home Page', icon: <LayoutDashboard size={18} /> },
    { id: 'about', label: 'About Us', icon: <Type size={18} /> },
    { id: 'services', label: 'Services', icon: <List size={18} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare size={18} /> },
    { id: 'deploy', label: 'Database / Deploy', icon: <Database size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-white fixed h-full overflow-y-auto z-20 shadow-xl">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <Database className="text-brand-red" size={24} />
          <div>
             <h1 className="text-lg font-display font-bold leading-none">JM Motors</h1>
             <span className="text-[10px] text-slate-400 uppercase tracking-widest">CMS v1.0</span>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-brand-red text-white shadow-lg shadow-red-900/20 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 mt-auto border-t border-slate-800 absolute bottom-0 w-full bg-brand-dark">
            <Link to="/" className="flex items-center justify-center gap-2 w-full text-center py-2 text-slate-400 hover:text-white text-xs uppercase tracking-wider transition-colors">
                 <Eye size={12} /> View Local Preview
            </Link>
            <button onClick={() => setIsAuthenticated(false)} className="block w-full text-center py-2 text-red-400 hover:text-red-300 text-xs uppercase tracking-wider mt-2">
                Disconnect
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8 overflow-y-auto bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto pb-20">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-50/95 backdrop-blur z-10 py-4 border-b border-slate-200">
            <div>
                 <h2 className="text-2xl font-bold text-slate-800 capitalize flex items-center gap-3">
                    {tabs.find(t => t.id === activeTab)?.icon}
                    {activeTab === 'deploy' ? 'Database Management' : activeTab.replace('-', ' ')}
                 </h2>
                 {activeTab !== 'deploy' && (
                    <div className="text-xs text-brand-red font-bold uppercase tracking-wider mt-1 flex items-center gap-1">
                        <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div> Editing Local Preview
                    </div>
                 )}
            </div>
            <div className="flex gap-3">
              <button onClick={resetContent} className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 transition-colors text-sm font-bold uppercase tracking-wide border border-transparent hover:border-slate-200 rounded">
                <RotateCcw size={16} /> Reset
              </button>
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 bg-brand-dark text-white rounded shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 text-sm font-bold uppercase tracking-wide">
                <Save size={16} /> Save Preview
              </button>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            
            {activeTab === 'general' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="Phone Number" value={tempContent.general.phone} onChange={(v) => updateField('general.phone', v)} />
                  <Input label="Mobile Number" value={tempContent.general.mobile} onChange={(v) => updateField('general.mobile', v)} />
                  <Input label="Email Address" value={tempContent.general.email} onChange={(v) => updateField('general.email', v)} />
                  <Input label="Address" value={tempContent.general.address} onChange={(v) => updateField('general.address', v)} />
                </div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 mt-10 pb-2 border-b border-slate-100">Opening Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <Input label="Weekdays" value={tempContent.general.hours.weekdays} onChange={(v) => updateField('general.hours.weekdays', v)} />
                   <Input label="Saturday" value={tempContent.general.hours.saturday} onChange={(v) => updateField('general.hours.saturday', v)} />
                   <Input label="Sunday" value={tempContent.general.hours.sunday} onChange={(v) => updateField('general.hours.sunday', v)} />
                </div>
              </div>
            )}

            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">Hero Section</h3>
                   <div className="space-y-6">
                     <Input label="Tagline" value={tempContent.home.hero.tagline} onChange={(v) => updateField('home.hero.tagline', v)} />
                     <div className="grid grid-cols-2 gap-6">
                        <Input label="Title Part 1" value={tempContent.home.hero.titlePart1} onChange={(v) => updateField('home.hero.titlePart1', v)} />
                        <Input label="Title Part 2 (Highlighted)" value={tempContent.home.hero.titlePart2} onChange={(v) => updateField('home.hero.titlePart2', v)} />
                     </div>
                     <TextArea label="Description" value={tempContent.home.hero.description} onChange={(v) => updateField('home.hero.description', v)} />
                   </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">Intro Section</h3>
                   <div className="space-y-6">
                     <Input label="Title" value={tempContent.home.intro.title} onChange={(v) => updateField('home.intro.title', v)} />
                     <TextArea label="Description" value={tempContent.home.intro.description} onChange={(v) => updateField('home.intro.description', v)} />
                     <Input label="Experience Badge Text" value={tempContent.home.intro.yearsExperience} onChange={(v) => updateField('home.intro.yearsExperience', v)} />
                   </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">Features List</h3>
                   {tempContent.home.features.map((feature: any, idx: number) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-lg mb-4 border border-slate-200">
                          <h4 className="font-bold text-xs text-brand-red uppercase mb-3">Feature {idx + 1}</h4>
                          <Input label="Title" value={feature.title} onChange={(v) => updateArrayItem('home.features', idx, 'title', v)} />
                          <div className="mt-4">
                             <TextArea label="Text" value={feature.text} onChange={(v) => updateArrayItem('home.features', idx, 'text', v)} />
                          </div>
                      </div>
                   ))}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                  <Input label="Page Title" value={tempContent.about.title} onChange={(v) => updateField('about.title', v)} />
                  <Input label="Subtitle" value={tempContent.about.subtitle} onChange={(v) => updateField('about.subtitle', v)} />
                  <Input label="Main Heading" value={tempContent.about.heading} onChange={(v) => updateField('about.heading', v)} />
                  <TextArea label="Paragraph 1" value={tempContent.about.p1} onChange={(v) => updateField('about.p1', v)} />
                  <TextArea label="Paragraph 2" value={tempContent.about.p2} onChange={(v) => updateField('about.p2', v)} />
                  <TextArea label="Paragraph 3" value={tempContent.about.p3} onChange={(v) => updateField('about.p3', v)} />
                  <div className="grid grid-cols-2 gap-6 pt-4">
                      <Input label="Years Stat" value={tempContent.about.stats.years} onChange={(v) => updateField('about.stats.years', v)} />
                      <Input label="Customer Stat" value={tempContent.about.stats.customers} onChange={(v) => updateField('about.stats.customers', v)} />
                  </div>
               </div>
            )}

            {activeTab === 'services' && (
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                        <Input label="Header Title" value={tempContent.services.headerTitle} onChange={(v) => updateField('services.headerTitle', v)} />
                        <div className="mt-4">
                            <TextArea label="Header Description" value={tempContent.services.headerText} onChange={(v) => updateField('services.headerText', v)} />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                        <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Service List</h3>
                            <button 
                                onClick={() => addArrayItem('services.items', { title: "New Service", description: "Description..." })}
                                className="flex items-center gap-2 text-xs bg-brand-red text-white px-3 py-1.5 rounded hover:bg-red-600 transition-colors"
                            >
                                <Plus size={14} /> Add Service
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {tempContent.services.items.map((item: any, idx: number) => (
                                <div key={item.id} className="bg-slate-50 p-6 rounded-lg border border-slate-200 group relative hover:border-brand-red/30 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="flex-1 space-y-4">
                                            <Input label="Service Title" value={item.title} onChange={(v) => updateArrayItem('services.items', idx, 'title', v)} />
                                            <TextArea label="Description" value={item.description} onChange={(v) => updateArrayItem('services.items', idx, 'description', v)} />
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => removeArrayItem('services.items', idx)}
                                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 bg-white rounded-full shadow-sm"
                                        title="Remove Service"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'testimonials' && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                    <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-100">
                         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Client Testimonials</h3>
                         <button 
                                onClick={() => addArrayItem('testimonials', { name: "New Client", content: "Feedback..." })}
                                className="flex items-center gap-2 text-xs bg-brand-red text-white px-3 py-1.5 rounded hover:bg-red-600 transition-colors"
                            >
                                <Plus size={14} /> Add Review
                        </button>
                    </div>

                    <div className="space-y-6">
                        {tempContent.testimonials.map((t: any, idx: number) => (
                            <div key={t.id} className="bg-slate-50 p-6 rounded-lg border border-slate-200 relative group hover:border-brand-red/30 transition-colors">
                                <h4 className="font-bold text-xs text-brand-red mb-4 uppercase">Review #{idx + 1}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <Input label="Name" value={t.name} onChange={(v) => updateArrayItem('testimonials', idx, 'name', v)} />
                                    <Input label="Role" value={t.role || ''} onChange={(v) => updateArrayItem('testimonials', idx, 'role', v)} />
                                </div>
                                <div className="mb-4">
                                    <Input label="Location (Optional)" value={t.location || ''} onChange={(v) => updateArrayItem('testimonials', idx, 'location', v)} />
                                </div>
                                <TextArea label="Content" value={t.content} onChange={(v) => updateArrayItem('testimonials', idx, 'content', v)} />
                                
                                <button 
                                    onClick={() => removeArrayItem('testimonials', idx)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 bg-white rounded-full shadow-sm"
                                    title="Remove Review"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'deploy' && (
                <div className="space-y-6">
                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-4 opacity-10">
                            <AlertTriangle size={100} className="text-amber-500" />
                        </div>
                        <h3 className="flex items-center gap-2 font-bold text-amber-900 text-lg mb-2 relative z-10">
                            <AlertTriangle size={20} /> IMPORTANT: Live Deployment Required
                        </h3>
                        <p className="text-amber-900 text-sm leading-relaxed mb-4 relative z-10 font-medium">
                            Clicking "Save Preview" only updates the site on <u>your computer</u> (Local Preview).
                            <br/><br/>
                            To update the website for <u>all visitors</u> (Live Production), you must follow the steps below to update the source code.
                        </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                        <h3 className="flex items-center gap-2 font-bold text-blue-900 text-lg mb-2">
                            <Globe size={20} /> How to make changes Public
                        </h3>
                        <ol className="list-decimal list-inside text-sm text-blue-800 space-y-3 ml-2">
                            <li>Make all your changes in the tabs above and click <strong>Save Preview</strong>.</li>
                            <li>Click the <strong>"Copy Code"</strong> button below.</li>
                            <li>Open your project source code file: <code className="bg-blue-100 px-1 py-0.5 rounded text-blue-900 font-bold">context/ContentContext.tsx</code></li>
                            <li>Locate the variable: <code className="bg-blue-100 px-1 py-0.5 rounded text-blue-900 font-bold">const defaultContent = ...;</code></li>
                            <li>Replace that entire variable with the code you copied.</li>
                            <li>Re-deploy your website (e.g., git push).</li>
                        </ol>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 relative group shadow-2xl">
                         <div className="absolute top-4 right-4 flex gap-2">
                             <button 
                                onClick={copyToClipboard}
                                className={`flex items-center gap-2 px-4 py-2 rounded font-bold text-xs uppercase tracking-wide transition-all ${copied ? 'bg-green-500 text-white' : 'bg-brand-red text-white hover:bg-red-600'}`}
                             >
                                 {copied ? <Check size={16} /> : <Copy size={16} />}
                                 {copied ? 'Copied!' : 'Copy Code'}
                             </button>
                         </div>
                         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                             <Code size={16} /> Source Code Snippet
                         </h4>
                         <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-[500px]">
                            <pre className="text-xs font-mono text-green-400 whitespace-pre-wrap">
{`const defaultContent = ${JSON.stringify(tempContent, null, 2)};`}
                            </pre>
                         </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">Backup & Restore (Local)</h3>
                        <div className="flex gap-4">
                            <button onClick={handleExport} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium">
                                <Download size={18} /> Download Backup (JSON)
                            </button>
                            <button onClick={handleImportClick} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium">
                                <Upload size={18} /> Restore from Backup
                            </button>
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                className="hidden" 
                                accept=".json"
                            />
                        </div>
                    </div>
                </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Components
const Input: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      className="w-full p-3 border border-slate-200 rounded-lg focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none text-slate-800 font-medium bg-white transition-shadow focus:shadow-sm"
    />
  </div>
);

const TextArea: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">{label}</label>
    <textarea 
      rows={4}
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      className="w-full p-3 border border-slate-200 rounded-lg focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none text-slate-800 font-medium bg-white transition-shadow focus:shadow-sm resize-y"
    />
  </div>
);

export default Admin;