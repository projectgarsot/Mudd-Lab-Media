import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Calculator } from 'lucide-react';
import { askTheAccountant } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAccountant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Είμαι ο Διευθυντής Επιβίωσης. Διαχειρίζομαι τα λεφτά. Τι θέλεις; Έχω δουλειά με το ΦΠΑ." }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await askTheAccountant(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Σφάλμα σύνδεσης με το Taxisnet.", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Sticky Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-mudd-red text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform border-2 border-mudd-black flex items-center gap-2 group"
      >
        {isOpen ? <X size={24} /> : <Calculator size={24} />}
        <span className="hidden md:block font-mono text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Ρωτήστε τον Λογιστή
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 md:w-96 h-96 bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col font-mono text-sm">
          <div className="bg-zinc-800 p-3 border-b border-zinc-700 flex justify-between items-center">
            <span className="text-mudd-white font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Διευθυντής Επιβίωσης
            </span>
            <span className="text-xs text-zinc-500">Gemini Powered</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-mudd-black">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 border ${
                  m.role === 'user' 
                    ? 'bg-zinc-800 border-zinc-700 text-mudd-white' 
                    : 'bg-mudd-white text-mudd-black border-mudd-white'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-mudd-black text-zinc-500 text-xs italic animate-pulse">
                  Υπολογισμός αποσβέσεων...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 bg-zinc-800 border-t border-zinc-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ρωτήστε για τιμολόγια..."
              className="flex-1 bg-black border border-zinc-600 p-2 text-white focus:outline-none focus:border-mudd-red"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-mudd-white text-black p-2 hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAccountant;