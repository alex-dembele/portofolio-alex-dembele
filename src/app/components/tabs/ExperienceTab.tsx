// src/app/components/tabs/ExperienceTab.tsx (Nouvelle version)
import { Briefcase } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';

const experiences = [
    {
        role: "Administrateur Système",
        company: "NEXAH SARL - Douala, Cameroun",
        date: "Avril 2023 - Présent",
        tasks: [
            "Migration d'une architecture AWS vers Kubernetes.",
            "Administration de l'infrastructure cloud AWS.",
            "Orchestration des applications avec Kubernetes & Helm.",
            "Automatisation des déploiements CI/CD avec GitHub Actions (réduction des délais de 40%).",
            "Optimisation des coûts cloud de 15% grâce à la containerisation.",
            "Renforcement de la sécurité avec IAM et VPN IPSec."
        ],
        // On extrait les technologies clés pour les mettre en évidence
        tech: ["AWS", "Kubernetes", "Docker", "Terraform", "Helm", "ArgoCD", "Prometheus", "CI/CD"]
    },
    {
        role: "Stagiaire en Informatique",
        company: "COMETAL SA - Douala, Cameroun",
        date: "Novembre 2021 - Janvier 2022",
        tasks: [
            "Administration et maintenance des serveurs Windows Server.",
            "Gestion des sauvegardes et supervision des performances."
        ],
        tech: ["Windows Server", "Gestion de sauvegardes"]
    },
     {
        role: "Stagiaire Administrateur Réseau",
        company: "SAUNYA Cosmetics Sarl - Douala, Cameroun",
        date: "Novembre 2020 - Octobre 2021",
        tasks: [
            "Mise en place d'un cloud privé utilisant OpenStack.",
            "Installation et configuration d'un portail captif avec pfSense.",
            "Déploiement d'un datacenter avec serveurs rack et cluster Proxmox."
        ],
        tech: ["OpenStack", "pfSense", "Proxmox", "Serveurs Rack", "Synology"]
    }
];

export default function ExperienceTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Parcours Professionnel</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6">
                        {/* --- Icône de la Timeline --- */}
                        <div className="relative flex flex-col items-center">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-green-500/50">
                                <Briefcase className="w-6 h-6 text-green-400" />
                            </div>
                            {/* Ligne verticale connectant les points */}
                            {index < experiences.length - 1 && (
                                <div className="flex-grow w-px bg-white/10 mt-4"></div>
                            )}
                        </div>

                        {/* --- Contenu de l'expérience --- */}
                        <div className="w-full">
                           <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                               <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                               <time className="text-sm font-normal text-gray-400 sm:ml-4 flex-shrink-0">{exp.date}</time>
                           </div>
                           <p className="text-base text-gray-400 mb-3">{exp.company}</p>
                           
                           <ul className="list-disc list-inside space-y-1.5 text-gray-300 text-sm pl-2 mb-4">
                               {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                           </ul>

                           <div className="flex flex-wrap gap-2">
                                {exp.tech.map((techItem) => (
                                    <Badge key={techItem} className="bg-gray-700/50 text-gray-300 border-gray-600">
                                        {techItem}
                                    </Badge>
                                ))}
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};