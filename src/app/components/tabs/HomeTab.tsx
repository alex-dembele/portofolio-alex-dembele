// src/app/components/tabs/HomeTab.tsx (Corrigé)
import { Cloud, Github, Lock, Zap } from "lucide-react"; // "Briefcase" a été retiré

const BentoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-black/20 p-4 md:p-6 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-green-400/50 transition-colors ${className}`}>
        {children}
    </div>
);

export default function HomeTab() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            <BentoCard className="md:col-span-2">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">RÉSUMÉ PROFESSIONNEL</h3>
                    {/* Les apostrophes ont été remplacées par &apos; */}
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Administrateur Système & Réseau avec plusieurs années d&apos;expérience dans l&apos;optimisation et la sécurisation d&apos;infrastructures cloud. Spécialisé en automatisation et orchestration avec des technologies telles que AWS, Kubernetes, et Docker, je possède une expertise solide en DevOps et cybersécurité. Axé sur la performance et la résilience, je conçois des solutions innovantes garantissant la haute disponibilité et l&apos;efficacité des systèmes.
                    </p>
                </div>
            </BentoCard>
            <BentoCard>
                <div className="h-full flex flex-col justify-between">
                    <Cloud className="w-8 h-8 text-green-400"/>
                    <div>
                        <h3 className="font-bold text-base md:text-lg">Cloud & Infrastructure</h3>
                        <p className="text-sm text-gray-400">AWS, Kubernetes, Docker, OpenStack, Azure, Google Cloud</p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                 <div className="h-full flex flex-col justify-between">
                    <Lock className="w-8 h-8 text-green-400"/>
                    <div>
                       <h3 className="font-bold text-base md:text-lg">Sécurité & Réseau</h3>
                       <p className="text-sm text-gray-400">VPN IPSec, IAM, Threat Intelligence, Cisco, pfSense</p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                <div className="h-full flex flex-col justify-between">
                    <Zap className="w-8 h-8 text-green-400"/>
                    <div>
                       <h3 className="font-bold text-base md:text-lg">DevOps & Automatisation</h3>
                       <p className="text-sm text-gray-400">Terraform, Helm, ArgoCD, CI/CD, GitHub Actions</p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                <a href="https://github.com/alex-dembele" target="_blank" rel="noopener noreferrer" className="h-full flex flex-col justify-between group">
                    <Github className="w-8 h-8 text-green-400 transition-transform group-hover:scale-110"/>
                    <div>
                        <h3 className="font-bold text-base md:text-lg">Code & Projets</h3>
                        <p className="text-sm text-green-400 group-hover:underline">Voir mes contributions →</p>
                    </div>
                </a>
            </BentoCard>
        </div>
    )
}