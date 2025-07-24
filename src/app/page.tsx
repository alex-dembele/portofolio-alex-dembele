// src/app/page.tsx
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home as HomeIcon, Briefcase, Code, Award, User } from "lucide-react";
// Nous créerons ces composants d'onglet dans les prochaines étapes
// import HomeTab from "./components/tabs/HomeTab"; 
// import ExperienceTab from "./components/tabs/ExperienceTab";
// etc.

const tabs = [
  { id: "home", label: "Accueil", icon: HomeIcon },
  { id: "experience", label: "Expérience", icon: Briefcase },
  { id: "projects", label: "Projets", icon: Code },
  { id: "certifications", label: "Certifications", icon: Award },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8 text-center">
            <h1 className="text-4xl font-bold text-white">ALEXANDRE DEMBELE</h1>
            <p className="text-lg text-gray-300">Ingénieur Systèmes & Réseaux | Cloud & DevOps | Cybersécurité</p>
        </div>

        <div className="flex justify-center mb-8">
            <div className="flex space-x-2 p-2 bg-black/20 rounded-full border border-white/10 backdrop-blur-sm">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`${activeTab === tab.id ? "" : "hover:text-white/60"} relative rounded-full px-4 py-2 text-sm md:text-base font-medium text-white transition focus-visible:outline-2`}
                >
                  {activeTab === tab.id && (
                    <motion.span layoutId="bubble"
                      className="absolute inset-0 z-10 bg-white/10 border border-white/20"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20 flex items-center gap-2"><tab.icon size={16}/> {tab.label}</span>
                </button>
              ))}
            </div>
        </div>

        <div className="group relative w-full min-h-[400px] p-6 md:p-8 bg-black/30 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
            <div className="absolute -inset-px bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-500" style={{ filter: 'blur(15px)' }}></div>
            <div className="relative">
              {/* Le contenu des onglets sera affiché ici */}
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-white">Contenu de l'onglet : {activeTab}</h2>
                </motion.div>
              </AnimatePresence>
            </div>
        </div>
      </div>
    </main>
  );
}