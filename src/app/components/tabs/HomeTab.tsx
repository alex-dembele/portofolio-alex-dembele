// src/app/components/tabs/HomeTab.tsx (Corrigé)
import { Cloud, Database, Github, Lock, Monitor, Pin, Zap } from "lucide-react"; // "Briefcase" a été retiré

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
                    <h3 className="text-lg md:text-xl font-bold text-green-400 mb-2">SUMMARY</h3>
                    {/* Les apostrophes ont été remplacées par &apos; */}
                    <p className="text-secondary leading-relaxed text-sm">
                        Ingénieur Cloud & DevOps expert en automatisation (AWS, Kubernetes, Docker) et cybersécurité. Je bâtis des infrastructures performantes, résilientes et hautement disponibles pour optimiser et sécuriser les systèmes
                    </p>
                </div>
            </BentoCard>
            <BentoCard>
                <div className="h-full flex flex-col justify-between">
                    <Cloud className="w-8 h-8 text-green-400"/>
                    <div>
                        <h3 className="font-bold text-base md:text-lg">Cloud & Infrastructure</h3>
                        <p className="text-sm text-secondary">AWS, Kubernetes, Docker, OpenStack, Azure, Google Cloud</p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                 <div className="h-full flex flex-col justify-between">
                    <Lock className="w-8 h-8 text-green-400"/>
                    <div>
                       <h3 className="font-bold text-base md:text-lg">Security & Networking</h3>
                       <p className="text-sm text-secondary">VPN IPSec, IAM, Threat Intelligence, Cisco, pfSense</p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                <div className="h-full flex flex-col justify-between">
                    <Zap className="w-8 h-8 text-green-400"/>
                    <div>
                       <h3 className="font-bold text-base md:text-lg">DevOps & Automatisation</h3>
                       <p className="text-sm text-secondary">Terraform, Helm, ArgoCD, CI/CD, GitHub Actions, Bash Scripting </p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                <div className="h-full flex flex-col justify-between">
                    <Monitor className="w-8 h-8 text-green-400"/>
                    <div>
                       <h3 className="font-bold text-base md:text-lg">Monitoring & Optimization</h3>
                       <p className="text-sm text-secondary">Prometheus, Grafana, Cloud Cost Management </p>
                    </div>
                </div>
            </BentoCard>
            <BentoCard>
                <a href="https://github.com/alex-dembele" target="_blank" rel="noopener noreferrer" className="h-full flex flex-col justify-between group">
                    <Github className="w-8 h-8 text-green-400 transition-transform group-hover:scale-110"/>
                    <div>
                        <h3 className="font-bold text-base md:text-lg">Code & Projects</h3>
                        <p className="text-sm text-green-400 group-hover:underline">My contributions →</p>
                    </div>
                </a>
            </BentoCard>
        </div>
    )
}