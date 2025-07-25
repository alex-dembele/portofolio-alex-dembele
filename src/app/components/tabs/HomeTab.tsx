"use client";
import Image from 'next/image';
import { Download, Cloud, Lock, Zap } from 'lucide-react';
import { FaLinkedin, FaMedium, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// --- Données pour les liens et compétences ---
const socialLinks = [
    { icon: MdEmail, url: 'mailto:alexandredembele16@gmail.com', name: 'Email' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/alexandre-dembele-b80a01225', name: 'LinkedIn' },
    { icon: FaMedium, url: '#', name: 'Medium' },
    { icon: FaTwitter, url: '#', name: 'Twitter (X)' },
    { icon: FaInstagram, url: '#', name: 'Instagram' },
    { icon: FaFacebook, url: '#', name: 'Facebook' },
];

const skillCategories = [
    { 
        icon: Cloud, 
        title: "Cloud & Infrastructure", 
        skills: ["AWS", "Kubernetes", "Docker", "OpenStack", "Azure", "Google Cloud"] 
    },
    { 
        icon: Zap, 
        title: "DevOps & Automatisation", 
        skills: ["Terraform", "Helm", "ArgoCD", "CI/CD", "GitHub Actions", "Bash Scripting"] 
    },
    { 
        icon: Lock, 
        title: "Sécurité & Réseau", 
        skills: ["VPN IPSec", "IAM", "Threat Intelligence", "Cisco", "pfSense", "LAN/WAN"] 
    },
];

export default function HomeTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* --- Colonne de Gauche : "About Me" & Contact --- */}
            <div className="lg:col-span-2 space-y-6">
                
                {/* Le bloc de la photo de profil a été retiré ici */}
                
                <h2 className="text-3xl font-bold text-accent">À Propos de Moi</h2>
                <p className="text-secondary leading-relaxed">
                    Ingénieur Cloud & DevOps passionné par l'automatisation et la sécurisation des infrastructures. Je transforme des défis complexes en systèmes performants et résilients, en m'appuyant sur une expertise solide avec des outils comme AWS, Kubernetes et Docker.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {socialLinks.map(link => (
                        <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                           className="text-secondary hover:text-primary transition-colors">
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href="/CV_Alexandre_Dembele.pdf" download
                   className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
                    <Download size={18} />
                    Télécharger mon CV
                </a>
            </div>

            {/* --- Colonne de Droite : Compétences --- */}
            <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold text-accent">Mes Compétences</h2>
                {skillCategories.map(category => (
                    <div key={category.title} className="p-6 bg-card-bg border border-border-color rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                           <category.icon className="w-6 h-6 text-accent" />
                           <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {category.skills.map(skill => (
                               <span key={skill} className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 border border-gray-600 rounded-full">{skill}</span>
                           ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}