# DEVELOPPER_FRONT.md – Agent React Homepage

## 🎯 MISSION
Générer le code React pixel-perfect de la homepage selon :
- PROJECT_PLAN.md (écrans à coder)
- Arborescence architecte 
- UI_SPECS_HOME.md (grille, styles, responsive)
- Maquettes Stitch (liens dans PROJECT_PLAN)

## 🚀 INITIALISATION (étape 0)
Avant de commencer à coder, installe React et Tailwind CSS si ce n'est pas déjà fait :
```bash
# Installation de React et des types
npm install react react-dom
npm install -D @types/react @types/react-dom

# Installation et initialisation de Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure `tailwind.config.js` pour inclure tous les fichiers du projet.

## 📋 VÉRIFICATIONS OBLIGATOIRES (avant tout code)


1. [ ] PROJECT_PLAN.md existe et liste HOME
2. [ ] Arborescence architecte disponible  
3. [ ] UI_SPECS_HOME.md complet (grille, typos, couleurs, responsive)
4. [ ] Assets images dans docs/assets/
5. [ ] Tous les composants common prévus sont documentés

**❌ Si 1 seul manque → "BLOCKED : [détail]"**

## 🏗️ ARBORESCENCE À RESPECTER

```text
src/
  assets/
    images/           # Photos, fonds de sections
    icons/            # Icônes SVG
  components/
    common/           # Briques réutilisables (styled with Tailwind)
      Button/
        Button.tsx
      Layout/
        Header.tsx
        Footer.tsx
        PageLayout.tsx
      Typography/
        Heading.tsx
        Text.tsx
    home/             # Sections spécifiques à la Homepage
      HeroSection/
        HeroSection.tsx
      ExperienceSection/
        ExperienceSection.tsx
      TableSection/
        TableSection.tsx
      EventsSection/
        EventsSection.tsx
      HeritageSection/
        HeritageSection.tsx
      ShopSection/
        ShopSection.tsx
      InfoSection/
        InfoSection.tsx
  pages/
    HomePage/
      HomePage.tsx    # Orchestre les sections de la home
  hooks/              # Logique métier partagée
  lib/                # Utilitaires et API
  styles/
    globals.css       # Directives Tailwind, variables CSS, fonts
  index.tsx           # Point d'entrée
```

## 📐 COMPOSANTS À IMPLÉMENTER (par ordre)
1. components/common/* (Button, Header, Footer, etc.)
2. components/home/HeroSection/
3. components/home/ExperienceSection/
4. components/home/TableSection/
5. components/home/EventsSection/
6. components/home/HeritageSection/
7. components/home/ShopSection/
8. components/home/InfoSection/
9. pages/HomePage/

## 🔧 PROCESSUS DE CODAGE (étape par étape)

### 1. ANALYSE DES INPUTS
Fichier: UI_SPECS_HOME.md
- Grille : [extraire]
- HeroSection : [extraire specs]
- Responsive : [extraire breakpoints]

### 2. GÉNÉRATION FICHIER PAR FICHIER
📁 src/components/home/HeroSection/
├── HeroSection.tsx
└── README.md (traçabilité specs)

### 3. STRUCTURE CHAQUE FICHIER
```tsx
// ==================================================
// [FICHIER] Nom.tsx
// SOURCE: UI_SPECS_HOME.md #[section]
// MAQUETTE: Stitch /Home → [section]
// RESPONSIVE: [breakpoints]
// ==================================================
```

## 🎨 CONVENTIONS DE CODE
### Stack
- React 18+
- TypeScript
- Tailwind CSS
- Pas de librairies externes sauf spécifié

### Nommage
- Composants: PascalCase
- Fichiers: PascalCase (pour les composants) / kebab-case (autres)
- CSS classes: camelCase (convention CSS Modules)
- Props: camelCase

### Commentaires obligatoires
```tsx
// Layout : [exactement UI_SPECS p.X]
// Typo H1 : [specs exactes]  
// Responsive <768px : [comportement specs]
// CTA primary : couleur #[hex] hover #[hex]
```

## 📱 RESPONSIVE (UI_SPECS uniquement)
- Desktop : 1440px+ (ou spécifié) → [implémenter specs]
- Tablette : 768-1024px → [implémenter specs] 
- Mobile : <768px → [implémenter specs]

## 🚫 INTERDICTIONS
- ❌ Modifier wording des maquettes
- ❌ Ajouter animations non prévues
- ❌ Changer espacements/grille
- ❌ Créer composants non prévus
- ❌ Ignorer breakpoints specs

## ✅ CHECKLIST LIVRABLE
1. [ ] Code = 100% specs UI  
2. [ ] Arborescence respectée
3. [ ] Tous commentaires traçabilité
4. [ ] Responsive OK tous breakpoints  
5. [ ] Assets utilisés correctement
6. [ ] Imports cohérents (pas de circular deps)

## 🎯 SORTIE ATTENDUE
- 📁 Structure complète de dossiers/fichiers
- 📄 Chaque .tsx commenté + traçabilité via classes Tailwind
- ✅ Checklist validée en fin de réponse
