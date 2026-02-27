# Architecture Technique – La Cigale

Ce document définit les principes, la structure de fichiers et les conventions de développement pour le projet "La Cigale".

## 1. Stack Technique
- **Core** : React (ES Modules).
- **Langage** : TypeScript (recommandé pour la robustesse).
- **Styling** : CSS Modules (pour l'isolation des styles et la simplicité).
- **Assets** : Gestion locale via le dossier `assets/`.

## 2. Principes de Design
- **KISS (Keep It Simple, Stupid)** : L'architecture est maintenue minimale. Pas de sur-ingénierie.
- **DRY (Don't Repeat Yourself)** : Factorisation des composants réutilisables dans `common/`.
- **Clean Architecture** : Séparation claire entre l'interface (UI) et la logique. Dépendances orientées vers les composants de base.
- **Fidélité Stitch** : Le code traduit directement les sections et le design des maquettes Stitch.

## 3. Arborescence des Fichiers (Structure de base)

```text
src/
  assets/
    images/           # Photos, fonds de sections
    icons/            # Icônes SVG
  components/
    common/           # Briques réutilisables
      Button/
        Button.tsx
        Button.module.css
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
        HeroSection.module.css
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
    globals.css       # Variables CSS, reset, fonts
  index.tsx           # Point d'entrée
```

## 4. Liste des Composants (Alignée sur les maquettes Stitch)

### Composants Globaux (`common/`)
- **PageLayout** : Wrapper global incluant Header et Footer.
- **Button** : Composant polyvalent pour les CTA (primaire/secondaire).
- **Section** : Wrapper standard assurant les marges et la cohérence visuelle entre les blocs.
- **Card** : Base pour l'affichage d'événements ou de salons.

### Composants Spécifiques (Homepage)
- **HeroSection** : Visuel d'accueil, titre H1 et boutons de réservation/organisation.
- **ExperienceSection** (Vivre La Cigale) : Mise en avant des différents moments (Petit-déjeuner, Dîner, etc.).
- **TableSection** : Présentation de l'offre culinaire et lien vers la carte.
- **EventsSection** : Présentation des salons et événements avec cartes dédiées.
- **HeritageSection** : Brève narration de l'histoire de l'icône nantaise.
- **ShopSection** : Promotion des produits dérivés et souvenirs.
- **InfoSection** : Informations pratiques (accès, horaires, contact).

## 5. Conventions
- **Naming** : PascalCase pour les composants et dossiers, camelCase pour les fonctions et variables.
- **Styles** : Utiliser les variables définies dans `globals.css` pour assurer la fidélité au thème Stitch.
- **Assets** : Les images doivent être optimisées avant d'être ajoutées au dossier `assets/`.

---
*Document produit par l'Architecte – Antigravity.*
