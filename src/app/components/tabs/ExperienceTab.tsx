// src/app/components/tabs/ExperienceTab.tsx (Version Finale)
import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';

const experiences = [
    {
        role: "Administrateur Système",
        company: "NEXAH SARL",
        location: "Douala, Cameroun",
        logo: "/logos/nexah.svg", // Remplacez par le vrai logo si vous l'avez
        date: "Avril 2023 - Présent",
        tasks: [
            "Migration d'une architecture AWS vers Kubernetes (EKS, Terraform, Helm, ArgoCD). [cite: 12]",
            "Administration de l'infrastructure cloud AWS (EC2, S3, IAM, VPC, RDS). [cite: 13]",
            "Orchestration des applications avec Kubernetes & Helm, monitoring avec Prometheus. [cite: 14]",
            "Automatisation des déploiements CI/CD avec GitHub Actions (réduction des délais de mise en production de 40%). [cite: 15]",
            "Optimisation des coûts cloud (-15% grâce à la containerisation Docker & Kubernetes). [cite: 16]",
            "Renforcement de la sécurité avec IAM, VPN IPSec et monitoring avancé. [cite: 17]"
        ],
        tech: ["AWS", "Kubernetes", "Docker", "Terraform", "Helm", "ArgoCD", "Prometheus", "CI/CD"]
    },
    {
        role: "Stagiaire en Informatique",
        company: "COMETAL SA",
        location: "Douala, Cameroun",
        logo: "/logos/cometal.svg", // Remplacez par le vrai logo si vous l'avez
        date: "Novembre 2021 - Janvier 2022",
        tasks: [
            "Administration et maintenance des serveurs Windows Server. [cite: 20]",
            "Gestion des sauvegardes et supervision des performances. [cite: 21]"
        ],
        tech: ["Windows Server", "Gestion de sauvegardes"]
    },
     {
        role: "Stagiaire Administrateur Réseau",
        company: "SAUNYA Cosmetics Sarl",
        location: "Douala, Cameroun",
        logo: "/logos/saunya.svg", // Remplacez par le vrai logo si vous l'avez
        date: "Novembre 2020 - Octobre 2021",
        tasks: [
            "Mise en place d'un cloud privé OpenStack. [cite: 24]",
            "Installation et configuration d'un portail captif pfSense. [cite: 25]",
            "Déploiement d'un datacenter avec serveurs rack et cluster Proxmox. [cite: 26]"
        ],
        tech: ["OpenStack", "pfSense", "Proxmox", "Serveurs Rack"]
    }
];

export default function ExperienceTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">Parcours Professionnel</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6">
                        <div className="relative flex flex-col items-center">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color p-1">
                                <Image src={exp.logo} alt={`Logo ${exp.company}`} width={40} height={40} className="rounded-full object-contain" onError={(e) => { e.currentTarget.src = '/logos/default.svg'; }} />
                            </div>
                            {index < experiences.length - 1 && (
                                <div className="flex-grow w-px bg-border-color mt-4"></div>
                            )}
                        </div>
                        <div className="w-full">
                           <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                               <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                               <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{exp.date}</time>
                           </div>
                           <p className="text-base text-secondary mb-3">{exp.company} - {exp.location}</p>
                           <ul className="list-disc list-inside space-y-1.5 text-secondary text-sm pl-2 mb-4">
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