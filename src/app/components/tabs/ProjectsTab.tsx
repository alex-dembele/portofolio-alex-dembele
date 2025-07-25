// src/app/components/tabs/ProjectsTab.tsx (Version Complète et Corrigée)
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from "@/app/components/ui/Badge";
import { Loader, AlertTriangle, ExternalLink, Github, ZoomIn } from "lucide-react";
import { Modal } from '@/app/components/ui/Modal';
import { Dialog } from '@headlessui/react';

// --- INTERFACES POUR NOS DONNÉES ---
export interface GitHubProject {
    id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; homepage: string | null;
}
export interface ProjectDetails {
    detailedDescription: string;
    techStack: string[];
}

// ⚠️ ACTION REQUISE : Personnalisez cette section pour VOS projets !
// La clé (ex: 'portfolio-final') doit correspondre EXACTEMENT au nom de votre dépôt GitHub.
const projectDetailsMap: Record<string, ProjectDetails> = {
    'portofolio-alex-dembele': {
        detailedDescription: "Ce portfolio a été construit avec Next.js pour un rendu côté serveur rapide, TypeScript pour la robustesse du code, et Tailwind CSS pour un design moderne et responsive. L'interactivité est gérée par Framer Motion. Le défi était de créer une expérience utilisateur fluide et un design qui reflète des compétences techniques avancées.",
        techStack: ["nextjs", "react", "typescript", "tailwind", "framermotion"],
    },
    // Exemple pour un autre projet :
    'autre-projet-cool': {
        detailedDescription: "Description détaillée de votre autre projet. Expliquez le but, les fonctionnalités principales et les défis techniques que vous avez rencontrés. Mettez en valeur ce que vous avez appris.",
        techStack: ["docker", "python", "fastapi", "postgresql", "react"],
    },
};


export default function ProjectsTab() {
    // --- GESTION DES ÉTATS ---
    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const [selectedProject, setSelectedProject] = useState<(GitHubProject & ProjectDetails) | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- RÉCUPÉRATION DES PROJETS DEPUIS GITHUB ---
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(`https://api.github.com/users/alex-dembele/repos?sort=updated&per_page=100`);
                if (!res.ok) {
                    throw new Error(`Erreur API GitHub: ${res.status}. Vérifiez votre nom d'utilisateur.`);
                }
                const data = await res.json();
                setProjects(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    // --- FONCTION POUR OUVRIR LE MODAL ---
    const handleProjectClick = (project: GitHubProject) => {
        const details = projectDetailsMap[project.name] || { 
            detailedDescription: project.description || 'Pas de détails supplémentaires fournis pour ce projet.', 
            techStack: project.language ? [project.language.toLowerCase()] : [] 
        };
        setSelectedProject({ ...project, ...details });
        setIsModalOpen(true);
    };

    // --- AFFICHAGE CONDITIONNEL (CHARGEMENT, ERREUR, SUCCÈS) ---
    if (loading) {
        return <div className="flex items-center justify-center min-h-[400px]"><Loader className="animate-spin h-8 w-8 text-accent"/></div>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 mb-4"/>
                <h3 className="text-xl font-bold text-red-400">Failed to load projects</h3>
                <p className="text-red-300/80 mt-2">{error}</p>
            </div>
        );
    }

    return (
        <>
            {/* --- GRILLE DES PROJETS --- */}
            <div>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-card-bg p-4 rounded-xl border border-border-color transition-all duration-300 hover:border-accent/50 hover:scale-105">
                            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={() => handleProjectClick(project)}>
                             <Image src={`/projects/${project.name}.png`} alt={`Aperçu du projet ${project.name}`} layout="fill" objectFit="cover"  onError={(e) => { e.currentTarget.src = '/projects/default.png'; }}
/>                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <ZoomIn className="text-white h-10 w-10" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 truncate">{project.name}</h3>
                            <p className="text-secondary text-sm h-12 overflow-hidden">{project.description}</p>
                            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition"> <Github size={16}/> Code </a>
                                {project.homepage && (<a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition"> <ExternalLink size={16}/> Démo </a> )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- LE MODAL (qui s'affiche quand un projet est sélectionné) --- */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedProject && (
                    <div className="space-y-4">
                        <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-accent pr-8">{selectedProject.name}</Dialog.Title>
                        <div className="relative w-full h-56 md:h-64 mt-4 rounded-lg overflow-hidden border border-border-color">
                           <Image src={`/projects/${selectedProject.name}.png`} alt={`Aperçu du projet ${selectedProject.name}`} layout="fill" objectFit="cover" onError={(e) => { e.currentTarget.style.display = 'none' }}/>
                        </div>
                        <p className="text-sm text-secondary">{selectedProject.detailedDescription}</p>
                        
                        <div>
                            <h4 className="font-bold text-primary mb-2">Technologies utilisées :</h4>
                            <div className="flex flex-wrap gap-4 items-center">
                                {selectedProject.techStack.map(tech => (
                                    <div key={tech} className="flex items-center justify-center p-2 bg-gray-700/30 rounded-full" title={tech}>
                                        <Image src={`/logos/${tech}.svg`} alt={`Logo ${tech}`} width={24} height={24} className="object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border-color">
                            <a href={selectedProject.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition font-semibold"> <Github size={18}/> Voir le Code </a>
                            {selectedProject.homepage && (<a href={selectedProject.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition font-semibold"> <ExternalLink size={18}/> Visiter le Site </a>)}
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}