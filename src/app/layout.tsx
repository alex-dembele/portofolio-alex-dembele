// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider"; // On créera ce fichier

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Dembele | Ingénieur Systèmes & Réseaux",
  description: "Portfolio d'Alexandre Dembele, spécialisé en Cloud, DevOps et Cybersécurité, basé sur son CV.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <div className="aurora-background"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}