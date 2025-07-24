// src/app/components/tabs/ExperienceTab.tsx (Version Corrigée)
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Administrateur Système",
        company: "NEXAH SARL - Douala, Cameroun",
        date: "Avril 2023 - Présent",
        tasks: [
            "Migration d'une architecture AWS vers Kubernetes (EKS, Terraform, Helm, ArgoCD).",
            "Administration de l'infrastructure cloud AWS (EC2, S3, IAM, VPC, RDS).",
            "Orchestration des applications avec Kubernetes & Helm, monitoring avec Prometheus.",
            "Automatisation des déploiements CI/CD avec GitHub Actions (réduction des délais de mise en production de 40%).",
            "Optimisation des coûts cloud (-15% grâce à la containerisation Docker & Kubernetes).",
            "Renforcement de la sécurité avec IAM, VPN IPSec et monitoring avancé."
        ]
    },
    {
        role: "Stagiaire en Informatique",
        company: "COMETAL SA - Douala, Cameroun",
        date: "Novembre 2021 - Janvier 2022",
        tasks: [
            "Administration et maintenance des serveurs Windows Server.",
            "Gestion des sauvegardes et supervision des performances."
        ]
    },
     {
        role: "Stagiaire Administrateur Réseau",
        company: "SAUNYA Cosmetics Sarl - Douala, Cameroun",
        date: "Novembre 2020 - Octobre 2021",
        tasks: [
            "Mise en place d'un cloud privé OpenStack.",
            "Installation et configuration d'un portail captif pfSense.",
            "Déploiement d'un datacenter avec serveurs rack et cluster Proxmox."
        ]
    }
];

export default function ExperienceTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Parcours Professionnel</h2>
            <div className="relative border-l-2 border-white/10 ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[33px] top-1 flex items-center justify-center">
                            <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border-2 border-green-500/50">
                                <Briefcase className="h-5 w-5 text-green-400" />
                            </span>
                        </div>
                        <div className="ml-10">
                           <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                               <h3 className="text-lg font-semibold text-white">{exp.role} @ {exp.company}</h3>
                               <time className="text-sm font-normal text-gray-400 sm:ml-4">{exp.date}</time>
                           </div>
                           <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm pl-2">
                               {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                           </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};