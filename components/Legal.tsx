import React, { useState, useRef } from 'react';
import { CompanyDetail, FinancialDoc, DocType } from '../types';
import { FileText, MapPin, Building2, UserCheck, Lock, Plus, X, FileBarChart, FileSpreadsheet, Download, Upload, Trash2 } from 'lucide-react';

const details: CompanyDetail[] = [
  { label: 'Επωνυμία', value: 'MUDDLAB MEDIA ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.' },
  { label: 'Διακριτικός Τίτλος', value: 'MUDDLAB MEDIA' },
  { label: 'ΑΦΜ', value: '801295370' },
  { label: 'Αρ. ΓΕΜΗ', value: '153759603000' },
  { label: 'Νομική Μορφή', value: 'Μονοπρόσωπη Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.)' },
  { label: 'Ημερομηνία Ίδρυσης', value: '30 Ιανουαρίου 2020' },
  { label: 'Διαχειριστής', value: 'Θεοφάνης Λαμπρόπουλος' },
  { label: 'Κεφάλαιο', value: '€20.000,00' },
];

const initialDocs: FinancialDoc[] = [
  // Example placeholder
];

const Legal: React.FC = () => {
  const [docs, setDocs] = useState<FinancialDoc[]>(initialDocs);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [newDocYear, setNewDocYear] = useState(new Date().getFullYear().toString());
  const [newDocType, setNewDocType] = useState<DocType>('balance');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'petridis') {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Λάθος κωδικός.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddDoc = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Παρακαλώ επιλέξτε ένα αρχείο PDF ή εικόνας.");
      return;
    }

    // Create a fake URL for the uploaded file so it works in the browser session
    const objectUrl = URL.createObjectURL(selectedFile);

    const titleBase = newDocType === 'balance' ? 'Ισολογισμός' : 'Αποτελέσματα Χρήσης';
    
    const newDoc: FinancialDoc = {
      id: Math.random().toString(36).substr(2, 9),
      year: newDocYear,
      type: newDocType,
      title: `${titleBase} ${newDocYear}`,
      url: objectUrl
    };

    // Add to top of list
    setDocs([newDoc, ...docs]);
    
    // Reset Form
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDeleteDoc = (id: string) => {
    if (window.confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το έγγραφο; Η εφορία μπορεί να θυμώσει.')) {
      setDocs(docs.filter(doc => doc.id !== id));
    }
  };

  const balanceSheets = docs.filter(d => d.type === 'balance');
  const incomeStatements = docs.filter(d => d.type === 'income');

  return (
    <section id="legal" className="py-24 bg-black text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Εταιρική Διαφάνεια</h2>
          <p className="text-zinc-500 font-mono text-sm max-w-2xl mx-auto">
            Λειτουργούμε με πλήρη διαφάνεια και συμμόρφωση με το Ελληνικό Εταιρικό Δίκαιο. <br/>
            (Επειδή μας αναγκάζει ο λογιστής μας).
          </p>
          
          {/* Admin Trigger */}
          <button 
            onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
            className="absolute right-0 top-0 text-zinc-800 hover:text-mudd-red transition-colors p-2"
            title={isAdmin ? "Έξοδος Διαχειριστή" : "Είσοδος Διαχειριστή"}
          >
            {isAdmin ? <UserCheck size={20} /> : <Lock size={20} />}
          </button>
        </div>

        {/* --- OFFICIAL DETAILS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <div className="bg-zinc-900 p-8 border border-zinc-800 border-t-4 border-t-zinc-700 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-mudd-red" size={24} />
              <h3 className="font-serif text-2xl text-white">Ταυτότητα Εταιρείας</h3>
            </div>
            <dl className="space-y-4">
              {details.slice(0, 5).map((detail) => (
                <div key={detail.label} className="border-b border-zinc-800 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-wider text-zinc-500 mb-1 font-mono">{detail.label}</dt>
                  <dd className="text-zinc-200 font-medium font-serif">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-zinc-900 p-8 border border-zinc-800 border-t-4 border-t-mudd-red h-full">
              <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-white" size={24} />
              <h3 className="font-serif text-2xl text-white">Διοίκηση & Έδρα</h3>
            </div>
            <dl className="space-y-4">
              {details.slice(5).map((detail) => (
                <div key={detail.label} className="border-b border-zinc-800 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-wider text-zinc-500 mb-1 font-mono">{detail.label}</dt>
                  <dd className="text-zinc-200 font-medium font-serif">{detail.value}</dd>
                </div>
              ))}
              <div className="mt-6 pt-4">
                <div className="flex items-start space-x-2 text-zinc-400 text-sm font-sans">
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-mudd-red" />
                  <span>Κωνσταντινουπόλεως 18-20,<br/>Νέα Σμύρνη, 17121, Αθήνα</span>
                </div>
                  <div className="flex items-start space-x-2 text-zinc-400 text-sm mt-2 font-sans">
                  <FileText size={16} className="mt-1 flex-shrink-0 text-mudd-red" />
                  <span>Αρμόδια ΔΟΥ: ΚΕΦΟΔΕ Αττικής</span>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* --- FINANCIAL STATEMENTS (GEMI STYLE) --- */}
        <div className="max-w-5xl mx-auto border-t border-zinc-800 pt-16">
          <h3 className="font-serif text-3xl text-white mb-1">Δημοσιεύσεις Γ.Ε.ΜΗ.</h3>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 w-10 bg-mudd-red"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase">Επίσημα Οικονομικά Στοιχεία</span>
          </div>
          
          {/* Admin Add Panel */}
          {isAdmin && (
            <div className="mb-12 bg-zinc-900 p-6 border border-zinc-700 animate-pulse relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Lock size={100} />
                </div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                <Plus size={20} className="text-mudd-red" /> Προσθήκη Νέας Δημοσίευσης
              </h4>
              <form onSubmit={handleAddDoc} className="flex flex-col md:flex-row gap-4 items-end relative z-10">
                <div className="w-full md:w-auto">
                  <label className="block text-xs font-bold text-zinc-500 mb-1">Έτος Χρήσης</label>
                  <input 
                    type="number" 
                    value={newDocYear}
                    onChange={e => setNewDocYear(e.target.value)}
                    className="p-2 border border-zinc-700 bg-black rounded w-full md:w-32 text-white focus:border-mudd-red outline-none"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-xs font-bold text-zinc-500 mb-1">Τύπος Εγγράφου</label>
                  <select 
                    value={newDocType}
                    onChange={e => setNewDocType(e.target.value as DocType)}
                    className="p-2 border border-zinc-700 bg-black rounded w-full md:w-64 text-white focus:border-mudd-red outline-none"
                  >
                    <option value="balance">Ισολογισμός</option>
                    <option value="income">Αποτελέσματα Χρήσης</option>
                  </select>
                </div>
                <div className="w-full md:w-auto flex-grow">
                    <label className="block text-xs font-bold text-zinc-500 mb-1">Αρχείο PDF/Εικόνα</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-1.5 bg-black border border-zinc-700 rounded text-sm text-zinc-400 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 cursor-pointer"
                      />
                    </div>
                </div>
                <button type="submit" disabled={!selectedFile} className="bg-mudd-red text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center font-bold">
                  <Upload size={16} /> Δημοσίευση
                </button>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Balance Sheets Column */}
            <div className="bg-zinc-900 p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <FileSpreadsheet className="text-mudd-red" size={24} />
                <h4 className="font-serif text-xl text-white font-bold">Ισολογισμοί</h4>
              </div>
              <div className="space-y-3">
                {balanceSheets.map(doc => (
                  <div key={doc.id} className="flex items-center gap-2 group">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-black hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-mudd-red/50 text-zinc-300 hover:text-white">
                      <span className="text-sm font-medium font-serif">{doc.title}</span>
                      <Download size={16} className="text-zinc-600 group-hover:text-mudd-red" />
                    </a>
                    {isAdmin && (
                      <button 
                        onClick={() => handleDeleteDoc(doc.id)}
                        className="p-3 text-zinc-500 hover:text-red-600 hover:bg-black border border-transparent hover:border-red-900 transition-colors"
                        title="Διαγραφή"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
                {balanceSheets.length === 0 && <p className="text-sm text-zinc-600 italic font-mono border-l-2 border-zinc-800 pl-3">Δεν υπάρχουν καταχωρημένοι ισολογισμοί.</p>}
              </div>
            </div>

            {/* Income Statements Column */}
            <div className="bg-zinc-900 p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <FileBarChart className="text-white" size={24} />
                <h4 className="font-serif text-xl text-white font-bold">Αποτελέσματα Χρήσης</h4>
              </div>
              <div className="space-y-3">
                {incomeStatements.map(doc => (
                  <div key={doc.id} className="flex items-center gap-2 group">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-black hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-mudd-red/50 text-zinc-300 hover:text-white">
                      <span className="text-sm font-medium font-serif">{doc.title}</span>
                      <Download size={16} className="text-zinc-600 group-hover:text-mudd-red" />
                    </a>
                    {isAdmin && (
                      <button 
                        onClick={() => handleDeleteDoc(doc.id)}
                        className="p-3 text-zinc-500 hover:text-red-600 hover:bg-black border border-transparent hover:border-red-900 transition-colors"
                        title="Διαγραφή"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
                {incomeStatements.length === 0 && <p className="text-sm text-zinc-600 italic font-mono border-l-2 border-zinc-800 pl-3">Δεν υπάρχουν καταχωρημένα αποτελέσματα.</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <div className="bg-zinc-900 p-8 border border-zinc-700 shadow-2xl max-w-sm w-full relative">
              <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X size={20} />
              </button>
              <h3 className="font-serif text-xl mb-6 text-center font-bold text-white">Περιοχή Διαχειριστή</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-zinc-500 mb-1 font-mono">ΚΩΔΙΚΟΣ ΠΡΟΣΒΑΣΗΣ</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 bg-black border border-zinc-700 focus:border-mudd-red outline-none text-white font-mono"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="w-full bg-white text-black py-2 hover:bg-mudd-red hover:text-white transition-colors font-bold uppercase tracking-wider">
                  Είσοδος
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Legal;