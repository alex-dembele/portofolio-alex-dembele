// src/app/components/tabs/ExperienceTab.tsx (Nouvelle version)
import { Briefcase } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';

const experiences = [
    {
        role: "System Administrator",
        company: "NEXAH SARL - Douala, Cameroon",
        date: "Avril 2023 - Present",
        tasks: [
            "Migrated an AWS architecture to Kubernetes",
            "Managed AWS cloud infrastructure",
            "Orchestrated applications with Kubernetes & Helm, monitored with Prometheus.",
            "Automated CI/CD deployments with GitHub Actions",
            "Optimized cloud costs (-35% through Docker & Kubernetes containerization)",
            "Strengthened security with IAM, IPSec VPN, and advanced monitoring."
        ],
        // On extrait les technologies clés pour les mettre en évidence
        tech: ["AWS", "Kubernetes", "Docker", "Terraform", "Helm", "ArgoCD", "Prometheus", "CI/CD", "EKS"]
    },
    {
        role: "IT Intern",
        company: "COMETAL SA - Douala, Cameroun",
        date: "November 2021 - January 2022",
        tasks: [
            "Administered and maintained Windows Server systems.",
            "Managed backups and monitored system performance. "
        ],
        tech: ["Windows Server", "Network saves"]
    },
     {
        role: "Network Administrator Intern",
        company: "SAUNYA Cosmetics Sarl - Douala, Cameroun",
        date: "November 2020 - October 2021",
        tasks: [
            "Deployed a private OpenStack cloud.",
            "Installed and configured a pfSense captive portal.",
            "Set up a datacenter with rack servers and a Proxmox cluster."
        ],
        tech: ["OpenStack", "pfSense", "Proxmox", "Rack Server", "Synology"]
    }
];

export default function ExperienceTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Professionnal Experience</h2>
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
                               <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{exp.date}</time>
                           </div>
                           <p className="text-base text-secondary mb-3">{exp.company}</p>
                           
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