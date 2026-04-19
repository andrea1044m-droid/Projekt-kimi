/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  Droplets, 
  Zap, 
  Activity, 
  Cpu, 
  Utensils, 
  Stethoscope, 
  AlertTriangle, 
  Search, 
  Send,
  Info,
  ChevronRight,
  Sparkles,
  Instagram
} from 'lucide-react';

// Types
interface ChemicalElement {
  id: string;
  name: string;
  symbol: string;
  role: string;
  sources: string[];
  deficiency: string;
  color: string;
}

const elements: ChemicalElement[] = [
  {
    id: 'oxygen',
    name: 'Oksigjeni',
    symbol: 'O',
    role: 'Thelbësor për frymëmarrjen qelizore dhe prodhimin e energjisë (ATP).',
    sources: ['Ajri (21%)', 'Uji'],
    deficiency: 'Hipoksia, lodhje e menjëhershme, dëmtim i qelizave të trurit.',
    color: 'bg-blue-500'
  },
  {
    id: 'carbon',
    name: 'Karboni',
    symbol: 'C',
    role: 'Shtylla kurrizore e të gjitha molekulave organike (ADN, proteinat, yndyrat).',
    sources: ['Buka', 'Mishi', 'Frutat', 'Zarzavatet'],
    deficiency: 'Nuk ndodh zakonisht ashtu si të tjerët sepse është pjesë e çdo ushqimi, por mungesa e përgjithshme çon në kequshqyerje.',
    color: 'bg-gray-700'
  },
  {
    id: 'iron',
    name: 'Hekuri',
    symbol: 'Fe',
    role: 'Prodhimi i hemoglobinës që mbart oksigjenin në gjak.',
    sources: ['Mishi i kuq', 'Spinaqi', 'Thjerrëzat'],
    deficiency: 'Anemia, lodhje kronike, rënie e flokëve, lëkurë e zbehtë.',
    color: 'bg-orange-600'
  },
  {
    id: 'calcium',
    name: 'Kalciumi',
    symbol: 'Ca',
    role: 'Ndërtimi i kockave dhe dhëmbëve, funksionimi i muskujve dhe nervave.',
    sources: ['Qumështi', 'Djathi', 'Brokoli', 'Bajamet'],
    deficiency: 'Osteoporoza, dobësi e kockave, dhimbje muskulore.',
    color: 'bg-yellow-100 text-gray-800'
  }
];

export default function App() {
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);
  const [elementSearch, setElementSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleAskAI = () => {
    if (!query.trim()) return;
    
    // Copy the question to clipboard so they can paste it in IG
    navigator.clipboard.writeText(query).catch(err => console.error('Error copying text:', err));
    
    // Open Instagram DM directly
    const url = `https://ig.me/m/andrea_m099`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Atom className="text-primary w-8 h-8" />
            <span className="font-bold text-xl tracking-tight text-primary">Elementet e Jetës</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-primary transition-colors">Kreu</a>
            <a href="#elements" className="hover:text-primary transition-colors">Elementet</a>
            <a href="#daily" className="hover:text-primary transition-colors">Jeta e Përditshme</a>
            <a href="#risks" className="hover:text-primary transition-colors">Rreziqet</a>
            <a href="#ask" className="hover:text-primary transition-colors bg-secondary px-3 py-1 rounded-full">Doktor Andrea</a>
            <a 
              href="https://instagram.com/andrea_m099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-600" />
              <span>@andrea_m099</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 pb-40 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-6">
            <span className="text-gray-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Punoi: Andrea Mbyeti</span>
            <div className="inline-block p-2 bg-secondary rounded-2xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest px-4">Zbuloni Botën Kimike</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Roli i <span className="gradient-text italic">Elementeve Kimike</span> <br /> 
            në Jetën Tonë
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            Nga oksigjeni që thithim deri te hekuri që rrjedh në gjakun tonë. 
            Çdo gjallesë është një laborator i gjallë kimik ku elementet luajnë rolin kryesor.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#elements" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
              Fillo Eksplorimin <ChevronRight w-5 h-5 />
            </a>
          </div>
        </motion.div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
      </section>

      {/* Elements Section */}
      <section id="elements" className="bg-gray-50 border-y border-gray-100">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-3">Elementet Kryesore</h2>
              <p className="text-gray-500">Këto elemente përbëjnë mbi 99% të masës së trupit tonë.</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <input 
                type="text"
                placeholder="Kërko elementin (psh: Fe)..."
                value={elementSearch}
                onChange={(e) => setElementSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-6 outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {elements
                .filter(el => 
                  el.name.toLowerCase().includes(elementSearch.toLowerCase()) || 
                  el.symbol.toLowerCase().includes(elementSearch.toLowerCase())
                )
                .map((el) => (
                <motion.div
                  key={el.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedElement(selectedElement?.id === el.id ? null : el)}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className={`w-16 h-16 ${el.color} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl font-bold shadow-lg`}>
                    {el.symbol}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{el.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{el.role}</p>
                  <div className="mt-6 flex items-center text-primary font-semibold text-xs uppercase tracking-wider">
                    Më shumë <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {elements.filter(el => 
              el.name.toLowerCase().includes(elementSearch.toLowerCase()) || 
              el.symbol.toLowerCase().includes(elementSearch.toLowerCase())
            ).length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="bg-white inline-flex p-6 rounded-full mb-4 border border-gray-100 shadow-sm">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 italic">Asnjë rezultat</h3>
                <p className="text-gray-500">Nuk u gjet asnjë element me emrin "{elementSearch}"</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Element Detail Modal */}
      <AnimatePresence>
        {selectedElement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedElement(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedElement.id}
              className="bg-white rounded-[40px] max-w-2xl w-full relative z-10 overflow-hidden shadow-2xl"
            >
              <div 
                onClick={() => setSelectedElement(null)}
                className={`${selectedElement.color} p-12 text-white flex justify-between items-start cursor-pointer transition-all active:scale-95 group`}
              >
                <div>
                  <span className="text-8xl font-bold opacity-20 absolute -top-4 -left-4">{selectedElement.symbol}</span>
                  <h3 className="text-4xl font-bold relative z-10">{selectedElement.name}</h3>
                  <p className="text-white/80 mt-2 font-medium">Klikoni këtu për t'u kthyer</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedElement(null);
                  }}
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Zap className="w-6 h-6 rotate-45" />
                </button>
              </div>
              
              <div className="p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold mb-4 text-gray-900">
                      <Activity className="w-5 h-5 text-primary" /> Roli në trup
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{selectedElement.role}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold mb-4 text-gray-900">
                      <Utensils className="w-5 h-5 text-primary" /> Ku e gjejmë?
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedElement.sources.map(s => (
                        <li key={s} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                  <h4 className="flex items-center gap-2 font-bold mb-2 text-red-700">
                    <AlertTriangle className="w-5 h-5" /> Çfarë ndodh në mungesë?
                  </h4>
                  <p className="text-red-700/80">{selectedElement.deficiency}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Daily Life Section */}
      <section id="daily" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4 italic">Në Jetën e Përditshme</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Elementet kimike nuk janë vetëm brenda nesh, ato ndërtojnë botën që na rrethon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Cpu />, title: 'Teknologia', text: 'Silici për procesorët, Litiumi për bateritë dhe Bakri për lidhjet elektrike bëjnë të mundur epokën digjitale.', color: 'text-blue-600' },
            { icon: <Utensils />, title: 'Ushqimi', text: 'Iodi shtohet në kripë, ndërsa Azoti përdoret në plehra për të ushqyer popullsinë botërore.', color: 'text-green-600' },
            { icon: <Stethoscope />, title: 'Mjekësia', text: 'Tekneciumi përdoret në skanerët mjekësorë, ndërsa Magnezi është thelbësor në barna kundër stresit.', color: 'text-red-600' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-b-4 border-gray-100 hover:border-primary p-10 rounded-3xl transition-all shadow-sm">
              <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risks Section */}
      <section id="risks" className="bg-gray-900 overflow-hidden relative">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-xs font-bold mb-6">
              <AlertTriangle className="w-4 h-4" /> KUJDES: ELEMENTET E RREZIKSHME
            </div>
            <h2 className="text-4xl font-bold font-serif text-white mb-6">Mbrojtja nga Toksiciteti</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Jo çdo element është i rëndësishëm për jetën. Disa janë tejet të dëmshëm dhe mund të shkaktojnë pasoja të rënda nëse hyjnë në organizëm.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-white/10 rounded-xl h-fit ring-1 ring-white/20">
                  <Info className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Plumbi (Pb)</h4>
                  <p className="text-gray-400 text-sm">Dëmton sistemin nervor, sidomos te fëmijët. Merret nga boja e vjetër ose uji i kontaminuar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-white/10 rounded-xl h-fit ring-1 ring-white/20">
                  <Info className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Merkuri (Hg)</h4>
                  <p className="text-gray-400 text-sm">Vjen shpesh nga peshqit e kontaminuar. Shkakton dridhje dhe dëmton shikimin e dëgjimin.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative bg-white/5 border border-white/10 p-1 rounded-[40px] overflow-hidden backdrop-blur-md">
              <img 
                src="https://picsum.photos/seed/chemical-reaction-molecular/800/600" 
                alt="Laboratori i Kimisë" 
                className="rounded-[36px] contrast-110 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Section */}
      <section id="ask" className="section-padding">
        <div className="bg-primary/5 rounded-[48px] p-8 md:p-20 overflow-hidden relative border border-primary/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Sparkles className="text-white w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold font-serif mb-4">Konsultë me Andrean</h2>
              <p className="text-gray-600">Shkruaj pyetjen tënde këtu dhe dërgoje direkt në Instagramin tim për një përgjigje personale.</p>
            </div>

            <div className="bg-white p-2 rounded-3xl shadow-2xl flex flex-col sm:flex-row gap-2 border border-gray-100">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                placeholder="Shkruaj pyetjen këtu..."
                className="flex-1 px-8 py-4 bg-transparent outline-hidden text-lg"
              />
              <button 
                onClick={handleAskAI}
                className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Dërgo në Instagram <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {['Mungesa e hekurit?', 'Roli i kalciumit?', 'Çfarë bën magnezi?'].map((q) => (
                <button 
                  key={q} 
                  onClick={() => { setQuery(q); setTimeout(handleAskAI, 0); }}
                  className="text-xs bg-white/50 hover:bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a 
                href="https://instagram.com/andrea_m099" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Instagram className="w-6 h-6" />
                Më pyet në Instagram @andrea_m099
              </a>
            </div>

            <div className="mt-12 p-8 bg-white/50 rounded-3xl border border-gray-100 text-center">
              <h3 className="font-bold mb-4 text-gray-700">Sugjerime për pyetje:</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span>• Mungesa e hekurit?</span>
                <span>• Pse na duhet kalciumi?</span>
                <span>• Elementet në gjak?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="section-padding text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Atom className="text-primary w-6 h-6" />
            <span className="font-bold text-lg tracking-tight text-primary">Elementet e Jetës</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Projekt Shkolle - Punoi: Andrea Mbyeti - Kimi Klasa 8b. Gjitha të drejtat e rezervuara.</p>
        </div>
      </footer>
    </div>
  );
}
