import React, { useState } from 'react';
import Preloader from './components/Preloader';
import GeminiAccountant from './components/GeminiAccountant';
import Evolution from './components/Evolution';
import Legal from './components/Legal';

// Icons
import { ArrowRight, Play, Mail, MapPin, Hash, Briefcase, ExternalLink, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-mudd-black text-mudd-white selection:bg-mudd-red selection:text-white">
      
      {/* 1. Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0 opacity-40 grayscale">
            {/* Placeholder for Fanis in Tuxedo */}
            <img src="images/fanishero.jpg" className="w-full h-full object-cover" alt="Background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4 leading-[0.85]">
            Muddlab<br/><span className="text-stroke text-transparent stroke-white" style={{WebkitTextStroke: "2px white"}}>Media</span>.
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif italic text-mudd-red mb-8">
            Σας ζητούμε συγγνώμη.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 font-mono mb-12 border-l-2 border-mudd-red pl-6 text-left">
            Το επίσημο φορολογικό όχημα του Θεοφάνη Λαμπρόπουλου. Ναι, είμαστε πραγματική εταιρεία. Όχι, δεν ξέρουμε τι κάνουμε.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-mudd-white text-mudd-black font-bold uppercase tracking-widest hover:bg-mudd-red hover:text-white transition-all duration-300">
            ΣΤΕΙΛΤΕ ΛΕΦΤΑ <ArrowRight size={20} />
          </a>
        </div>
      </header>

      {/* 2. The About Section (Split) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-800">
        <div className="p-12 md:p-24 flex flex-col justify-center border-r border-zinc-800 bg-zinc-950">
          <h3 className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">Ιδρυθηκε το 2020 • Νεα Σμυρνη</h3>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Η Κατά Λάθος Διαφημιστική</h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Η Muddlab Media ιδρύθηκε στην ιστορική γειτονιά της Νέας Σμύρνης (Το Κέντρο του Σύμπαντος).
            </p>
            <p>
              Δεν έχουμε "αποστολή". Έχουμε ΑΦΜ (<span className="font-mono text-white">801295370</span>) και ένα όνειρο: Να φτιάχνουμε διαφημίσεις που δεν σε κάνουν να θέλεις να πετάξεις το κινητό σου στον τοίχο.
            </p>
            <p>
              Από τα χαρακώματα του Βοηθού Παραγωγής μέχρι τα φώτα του Prime Time, ειδικευόμαστε σε περιεχόμενο που μοιάζει με συζήτηση, συνήθως μια θορυβώδη και αμήχανη συζήτηση.
            </p>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto border-t md:border-t-0 border-zinc-800 group overflow-hidden">
            <img 
              src="images/fanisconfused.jpg" 
              alt="Fanis Confused" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute bottom-0 left-0 p-6 bg-black/80 w-full backdrop-blur-sm">
                <p className="font-mono text-xs">Εικ. 1.1: Ο CEO προσπαθεί να στείλει email.</p>
            </div>
        </div>
      </section>

      {/* 3. The Philosophy */}
      <section className="bg-mudd-white text-mudd-black py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto w-16 h-1 bg-mudd-black"></div>
          <blockquote className="text-3xl md:text-5xl font-serif leading-snug italic">
            "Ποτέ μην δέχεσαι καλά λόγια. Η άνεση είναι ο εχθρός. Ακούω μόνο τα κακά σχόλια—αυτά που λένε ότι είμαι ατάλαντος. Αυτό είναι το καύσιμο."
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
             <div className="text-right">
                <cite className="block font-bold not-italic text-xl">— Φάνης Λαμπρόπουλος</cite>
                <span className="block font-mono text-sm text-zinc-500">Ιδρυτής, Οραματιστής, Γενικά Αγχωμένος</span>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Evolution Slider */}
      <Evolution />

      {/* 5. Case Studies */}
      <section className="py-24 px-6 border-t border-zinc-800 bg-zinc-950">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase text-mudd-white leading-none">
                        Αποδειξεις<br/> Οτι Δουλευουμε
                    </h2>
                    <p className="font-mono text-mudd-red mt-4">ΠΡΟΣΟΧΗ: Περιέχει δυνατούς θορύβους και αμήχανες σιωπές.</p>
                </div>
                <a 
                    href="https://www.youtube.com/@FanisLabropoulos/videos" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 pb-1"
                >
                    Δείτε Όλες Τις Καταστροφές <ExternalLink size={16} />
                </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Video Card 1 */}
                <a href="https://www.youtube.com/watch?v=-fWBuELeYbs" target="_blank" rel="noreferrer" className="group block">
                    <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden border border-zinc-800 group-hover:border-mudd-red transition-all">
                        {/* Fake Thumbnail */}
                        <img src="images/UNPOPULAROPINION.png" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" alt="Political Parody" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-mudd-red group-hover:border-mudd-red transition-all">
                                <Play fill="currentColor" className="ml-1" size={24} />
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 bg-mudd-red text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            POPULAR OPINION
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-mono px-2 py-1 flex items-center gap-1 rounded">
                            <Clock size={12} /> 37:46
                        </div>
                    </div>
                    <div className="pr-4">
                        <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-mudd-red transition-colors">Ο Μυστικός Δείπνος</h3>
                        <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">Κατηγορία: Γαστρονομικό Τραύμα</p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            "Ο Φάνης αποξενώνει τον μισό ελληνικό πληθυσμό κηρύσσοντας πόλεμο στη μαγειρική της γιαγιάς σου. Δείτε έναν ενήλικα άντρα να παθαίνει νευρικό κλονισμό πάνω από σπανακόρυζο και βραστή γίδα, το οποίο αναπόφευκτα καταλήγει σε μια ανεπιθύμητη συνεδρία ψυχοθεραπείας για τα εσώρουχα του πατέρα του. Περιλαμβάνει φωνές, προσβολές σε vegans και ανησυχητικά παιδικά flashbacks. Καλή όρεξη."
                        </p>
                    </div>
                </a>

                 {/* Video Card 2 */}
                 <a href="https://www.youtube.com/watch?v=lHHr2IFA2YQ" target="_blank" rel="noreferrer" className="group block">
                    <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden border border-zinc-800 group-hover:border-mudd-red transition-all">
                        <img src="images/consumerism.png" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" alt="Radio Prank" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-mudd-red group-hover:border-mudd-red transition-all">
                                <Play fill="currentColor" className="ml-1" size={24} />
                            </div>
                        </div>

                        <div className="absolute top-4 left-4 bg-zinc-200 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            SCAM ALERT
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-mono px-2 py-1 flex items-center gap-1 rounded">
                            <Clock size={12} /> 32:49
                        </div>
                    </div>
                    <div className="pr-4">
                        <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-mudd-red transition-colors">Τα Σκουπίδια Ενός Ανδρός...</h3>
                        <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">Κατηγορία: ΚΑΠΙΤΑΛΙΣΤΙΚΕΣ ΠΑΓΙΔΕΣ</p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            "Ο Φάνης εξηγεί γιατί τα Air Fryers είναι απλώς φούρνοι για τεμπέληδες και γιατί τα smartwatches είναι άχρηστα αν η μόνη σου αερόβια είναι το άγχος. Συζητάμε την τραγωδία των αχρησιμοποίητων πιστολιών μασάζ, το ψέμα των οικιακών προτζέκτορα και γιατί το να έχεις 50 κούπες καφέ είναι σημάδι ψυχικής ασθένειας."
                        </p>
                    </div>
                </a>

                 {/* Video Card 3 */}
                 <a href="https://www.youtube.com/watch?v=7jkh8aBHKJc&t=1s" target="_blank" rel="noreferrer" className="group block">
                    <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden border border-zinc-800 group-hover:border-mudd-red transition-all">
                        <img src="images/ken.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" alt="Commercial" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-mudd-red group-hover:border-mudd-red transition-all">
                                <Play fill="currentColor" className="ml-1" size={24} />
                            </div>
                        </div>

                         <div className="absolute top-4 left-4 bg-mudd-red text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                            Hollywood Trash
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-mono px-2 py-1 flex items-center gap-1 rounded">
                            <Clock size={12} /> 15:35
                        </div>
                    </div>
                    <div className="pr-4">
                        <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-mudd-red transition-colors">Η Γυμνή Αλήθεια</h3>
                        <p className="font-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">Κατηγορία: Οι Θεοί του Ολύμπου</p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            "Ο Φάνης υποστηρίζει ότι το να κοιμηθείς με τη Μαντόνα είναι καλύτερο από τη Μόνικα Μπελούτσι γιατί 'είναι μάθημα ιστορίας' και τελικά καταλήγει ότι θα προτιμούσε έναν μακαρίτη Πρωθυπουργό. Δείτε τον να αποδομεί την καριέρα του Ryan Gosling, να υποστηρίζει ότι ο John Cena γυμνός είναι υψηλή τέχνη και να εξηγεί γιατί ο Charles Bronson είναι το απόγειο της ανδρικής ομορφιάς. Δεν είναι podcast, είναι κραυγή για βοήθεια."
                        </p>
                    </div>
                </a>
            </div>
         </div>
      </section>

      {/* 6. Team */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800">
         <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-center font-serif text-4xl mb-16">Η Ηγετική "Ομάδα"</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                
                {/* Member 1 */}
                <div className="text-center group">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-zinc-700 mb-6 grayscale group-hover:grayscale-0 transition-all">
                        <img src="images/founder.jpg" alt="Fanis" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Θεοφάνης Λαμπρόπουλος</h3>
                    <p className="font-mono text-xs text-mudd-red mb-2">Ιδρυτής / Ταλέντο</p>
                    <p className="text-sm text-zinc-500 max-w-xs mx-auto">"Του αρέσουν τα φυτά εσωτερικού. Μισεί τα κομπλιμέντα."</p>
                </div>

                {/* Member 2 - CEO (Daughter/Marsa) - Added bg-zinc-800 for transparent PNG consistency */}
                <div className="text-center group">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-zinc-700 mb-6 grayscale group-hover:grayscale-0 transition-all bg-zinc-800">
                        <img src="images/ceo.jpg" alt="Marsa" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Μάρσα</h3>
                    <p className="font-mono text-xs text-mudd-red mb-2">Η Πραγματική CEO (Κόρη)</p>
                    <p className="text-sm text-zinc-500 max-w-xs mx-auto">"Υπεύθυνη για την έλλειψη ύπνου. Αν ο Φάνης φαίνεται κουρασμένος, φταίει αυτή."</p>
                </div>

                {/* Member 3 */}
                <div className="text-center group">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-zinc-700 mb-6 grayscale group-hover:grayscale-0 transition-all">
                        <img src="images/accountant.jpg" alt="The Accountant" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Ο Λογιστής</h3>
                    <p className="font-mono text-xs text-mudd-red mb-2">Διευθυντής Επιβίωσης</p>
                    <p className="text-sm text-zinc-500 max-w-xs mx-auto">"Ο μόνος άνθρωπος που ξέρει τον κωδικό του Taxisnet."</p>
                </div>
            </div>
         </div>
      </section>

      {/* 7. Legal (Corporate Transparency) */}
      <Legal />

      {/* 8. Footer */}
      <footer id="contact" className="bg-zinc-900 border-t border-zinc-800 text-zinc-500 py-16 px-6 font-mono text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2">
                <h4 className="text-white text-lg font-bold mb-6">MUDDLAB MEDIA ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Hash size={16} /> <span>Αρ. ΓΕΜΗ: 153759603000</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase size={16} /> <span>ΑΦΜ: 801295370</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <MapPin size={16} /> <span>Κωνσταντινουπόλεως 18-20, Νέα Σμύρνη, 17121</span>
                    </div>
                </div>
            </div>

            <div>
                <h5 className="text-white font-bold mb-4">Επίσημη Δραστηριότητα</h5>
                <p>ΚΑΔ: 7311 (Διαφημιστικές Υπηρεσίες)</p>
                <p className="mt-2 text-xs">Κατάσταση: ΕΝΕΡΓΗ (Εκτός αν πει κάτι άλλο ο λογιστής)</p>
            </div>

            <div>
                 <h5 className="text-white font-bold mb-4">Επικοινωνία</h5>
                 <a href="mailto:info@muddlab.gr" className="flex items-center gap-2 hover:text-mudd-red transition-colors">
                    <Mail size={16} /> info@muddlab.gr
                 </a>
                 <p className="mt-2 text-xs opacity-60">(Μην στέλνετε email αν δεν έχετε budget)</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2020-{new Date().getFullYear()} Muddlab Media. Με επιφύλαξη παντός δικαιώματος.</p>
            <p>Σχεδιάστηκε μέσα στο χάος.</p>
        </div>
      </footer>

      <GeminiAccountant />
    </div>
  );
};

export default App;