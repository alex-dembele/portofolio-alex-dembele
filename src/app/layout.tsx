// src/app/layout.tsx (Version Corrigée)
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { CursorTrail } from './components/CursorTrail';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Dembele | Ingénieur Systèmes & Réseaux",
  description: "Portfolio d'Alexandre Dembele, spécialisé en Cloud, DevOps et Cybersécurité, basé sur son CV.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <CursorTrail />
        <div className="aurora-background"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Le LanguageProvider doit envelopper TOUT ce qui utilisera la traduction */}
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}