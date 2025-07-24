// src/app/components/tabs/CertificationsTab.tsx
import Image from 'next/image';

const certifications = [
    // Cloud
    { name: 'Google Cloud Certified Associate Cloud Engineer', issuer: 'Google Cloud', logo: '/logos/google-cloud.svg', url: '#' },
 
    // Sécurité
    { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', logo: '/logos/cisco.svg', url: '#' },
    { name: 'ISO/IEC 27001 Information Security Associate', issuer: 'SkillFront', logo: '/logos/skillfront.svg', url: '#' },
    { name: 'Cyber Threat Intelligence Analyst', issuer: 'arcX', logo: '/logos/arcx.svg', url: '#' },
    { name: 'Fortinet Certified Associate', issuer: 'Fortinet', logo: '/logos/fortinet.svg', url: '#' },
    { name: 'CrowdSec Driven Cybersecurity Certificate', issuer: 'CrowdSec', logo: '/logos/crowdsec.svg', url: '#' },

    // DevOps & Automatisation
    { name: 'Introduction to Kubernetes LFS158', issuer: 'The Linux Foundation', logo: '/logos/linux-foundation.svg', url: '#' },
    { name: 'Certified Associate In Scrum Fundamentals (CASF)', issuer: 'SkillFront', logo: '/logos/skillfront.svg', url: '#' },

    // Réseau
    { name: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', logo: '/logos/cisco.svg', url: '#' },

    // Autres
    { name: 'The Complete MySQL Bootcamp', issuer: 'Udemy', logo: '/logos/udemy.svg', url: '#' },
];

export default function CertificationsTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Certifications</h2>
             
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certifications.map(cert => (
                    <a 
                        href={cert.url} 
                        key={cert.name} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group block p-4 bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all duration-300 text-center"
                    >
                        <div className="relative flex justify-center items-center h-20 mb-4">
                            <Image 
                                src={cert.logo} 
                                alt={`Logo de ${cert.issuer}`}
                                width={60} 
                                height={60} 
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden') }}
                            />
                            <div className="fallback-icon hidden text-gray-500">Logo manquant</div>
                        </div>
                        <h3 className="font-semibold text-white text-sm leading-tight">{cert.name}</h3>
                        <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}