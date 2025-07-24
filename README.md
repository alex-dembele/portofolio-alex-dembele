# Portfolio d'Alexandre Dembele

Un portfolio professionnel moderne et interactif construit avec Next.js 14, TypeScript et Tailwind CSS. Ce projet est optimisé pour un déploiement gratuit sur Vercel.

## ✨ Fonctionnalités

-   **Design Moderne :** Fond d'aurore animé, effets de "glassmorphism" et micro-interactions.
-   **Interface à Onglets :** Navigation claire et animée entre les sections (Accueil, Expérience, Projets, Certifications).
-   **Accueil en "Bento Grid" :** Présentation visuelle et concise des compétences et du profil.
-   **Timeline d'Expérience :** Parcours professionnel affiché de manière chronologique et élégante.
-   **Projets Dynamiques :** Galerie de projets récupérés depuis l'API GitHub, avec images personnalisées.
-   **Grille de Certifications :** Affichage de toutes les certifications avec les logos des organismes.

## 🛠️ Stack Technique

-   **Framework** : [Next.js](https://nextjs.org/) 14 (App Router)
-   **Langage** : [TypeScript](https://www.typescriptlang.org/)
-   **Styling** : [Tailwind CSS](https://tailwindcss.com/)
-   **Animations** : [Framer Motion](https://www.framer.com/motion/)
-   **Icônes** : [Lucide React](https://lucide.dev/)

---

## 🚀 Démarrage et Déploiement

### 1. Préparation des Fichiers Personnels (Assets)

Avant de lancer le projet, vous devez ajouter vos propres images.

-   **Images des Projets :**
    -   Créez le dossier `public/projects`.
    -   Pour chaque projet, ajoutez une image (`.png` ou `.jpg`) nommée **exactement** comme le dépôt GitHub. (Ex: `mon-projet.png` pour le dépôt `mon-projet`).
-   **Logos des Certifications :**
    -   Créez le dossier `public/logos`.
    -   Ajoutez les logos de chaque organisme de certification (ex: `google-cloud.svg`, `cisco.svg`, `ibm.svg`, etc.).

### 2. Installation

```bash
# Clonez le dépôt
git clone [https://github.com/VOTRE_USERNAME/VOTRE_REPO.git](https://github.com/VOTRE_USERNAME/VOTRE_REPO.git)
cd VOTRE_REPO

# Installez les dépendances
npm install
```

### 3. Lancer le Serveur de Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir votre portfolio.

### 4. Déploiement sur Vercel

1.  **Poussez votre code sur GitHub.**
2.  **Importez votre projet sur [Vercel](https://vercel.com).** Vercel détectera automatiquement que c'est un projet Next.js.
3.  Il n'y a pas de variables d'environnement à configurer pour cette version.
4.  **Cliquez sur "Deploy".** Votre portfolio sera en ligne en quelques instants !