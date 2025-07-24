// src/app/components/tabs/ProjectsTab.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from "@/app/components/ui/Badge"; // Nous allons créer ce fichier
import { Loader, AlertTriangle, ExternalLink, Github } from "lucide-react";

export interface GitHubProject {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    homepage: string | null;
}

export default function ProjectsTab() {
    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    if (loading) {
        return <div className="flex items-center justify-center min-h-[400px]"><Loader className="animate-spin h-8 w-8 text-green-400"/></div>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 mb-4"/>
                <h3 className="text-xl font-bold text-red-400">Erreur de chargement des projets</h3>
                <p className="text-red-300/80 mt-2">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Mes Créations Récentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="group relative bg-black/30 p-4 rounded-xl border border-white/10 transition-all duration-300 hover:border-green-500/50 hover:scale-105">
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={`/projects/${project.name}.png`}
                                alt={`Aperçu du projet ${project.name}`}
                                layout="fill"
                                objectFit="cover"
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x200/111827/8D9297?text=Image+Indisponible'; }}
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all"/>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 truncate">{project.name}</h3>
                        <p className="text-gray-400 text-sm h-12 overflow-hidden">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.language && <Badge className="bg-gray-700/50 text-gray-300 border-gray-600">{project.language}</Badge>}
                        </div>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
                                <Github size={16}/> Code
                            </a>
                            {project.homepage && (
                               <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
                                   <ExternalLink size={16}/> Démo
                               </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}