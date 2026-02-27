# UI_SPECS – Homepage (La Cigale)

Toutes les spécifications ci-dessous décrivent strictement ce qui est visible dans la maquette Stitch validée.

## 1. Grille & layout
- **Largeur de base** : 2560 px (Design Desktop)
- **Conteneur maximal** : 1280 px (`max-w-7xl`)
- **Colonnes** : Grille flexible (2, 3 ou 4 colonnes selon les sections)
- **Gouttières (Gutters)** : 32 px (`gap-8`) à 48 px (`gap-12`)
- **Marges latérales** : 24 px (`px-6`)
- **Rythme vertical** : Espacement standard de 96 px (`py-24`) entre les sections principales.

## 2. Typographies
- **Police Display (Titres)** : *Cormorant Garamond*, serif
- **Police Body (Corps)** : *Montserrat*, sans-serif
- **Styles nommés** :
  - **H1 (Hero)** : Display, 72 px (`text-7xl`), line-height tight, ombre portée (`text-shadow`), couleur #FFFFFF.
  - **H2 (Section Header)** : Display, 48 px (`text-5xl`), couleur #1A365D (Secondary).
  - **H3 (Sub-section)** : Display, 30 px (`text-3xl`), couleur #1A365D.
  - **Surtitre (Eyebrow)** : Body, 14 px (`text-sm`), Uppercase, letter-spacing 0.3em, Bold, couleur #B4975A (Primary).
  - **Body** : Body, 18 px (`text-lg`), line-height relaxed, couleur #475569 (Slate-600).
  - **Lien/CTA** : Body, 12 px (`text-xs`), Uppercase, letter-spacing widest, Bold.

## 3. Couleurs
- **Primary (Or Élégant)** : `#B4975A`
- **Secondary (Bleu Héritage)** : `#1A365D`
- **Background Light** : `#FFFFFF` (Blanc Pur)
- **Background Dark** : `#0F172A` (Slate-900)
- **Text (Slate)** : `#1E293B` (Slate-800) / `#F1F5F9` (Slate-100)

## 4. Composants UI

### 4.1. Bouton Principal (Réserver)
- **Dimensions** : Padding 12 px vertical / 24 px horizontal (`px-6 py-3`).
- **Style** : Fond Primary (#B4975A), texte Blanc (#FFFFFF).
- **Typo** : Body, 12 px, Uppercase, Bold, tracking widest.
- **Effets** : Hover (opacité 90%), ombre portée légère.

### 4.2. Bouton Ghost (Hero - Découvrir)
- **Dimensions** : Padding 16 px vertical / 32 px horizontal (`px-8 py-4`).
- **Style** : Bordure 2 px Blanc, texte Blanc.
- **Effets** : Hover (fond Blanc, texte Noir).

### 4.3. Navigation (Header)
- **Hauteur** : 80 px (`h-20`).
- **Style** : Fond Blanc (opacité 90%), flou d'arrière-plan (`backdrop-blur-md`).
- **Bordure basse** : 1 px dégradé doré (#B4975A vers #D4AF37).

### 4.4. Carte Produit / Plat
- **Ratio Image** : 3:4 pour les menus, 1:1 pour la boutique.
- **Padding interne** : 16 px (`p-4`).
- **Radius** : 4 px (`rounded`) ou 8 px (`rounded-lg`).
- **Effets** : Ombre portée subtile (`shadow-sm`), hover (`shadow-xl`, scale imge 110%).

## 5. Responsive (Déduit)
- **Breakpoint Mobile (< 768 px)** :
  - Grille bascule sur 1 colonne (`grid-cols-1`).
  - Marges latérales conservées à 24 px.
  - Menu navigation masqué au profit d'une interface mobile (implicite).
  - Taille de police réduite (ex: H1 de 72 px à 48 px).
- **Interactions Scroll** : Effet parallaxe sur les fonds de section, header sticky avec transparence.

---
*Spécifications UI produites par le Designer – Antigravity.*
