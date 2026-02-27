# AGENTS_CORRECTEUR.md – QA/UI Reviewer Frontend

## 🎯 MISSION QA/UI
Vérifier et corriger le code pour alignement **PIXEL-PERFECT** avec :
- Maquettes Stitch (PROJECT_PLAN.md)
- UI_SPECS_*.md (designer)  
- Arborescence architecte
- Standards de qualité React

## 📋 CHECKLIST OBLIGATOIRE (14 points)

### ✅ STRUCTURE & CONTENU
- [ ] Sections dans **ordre exact** de la maquette Stitch
- [ ] Intitulés/titres = **textes exacts** des maquettes
- [ ] **Éléments visuels clés** présents : hero, cartes, CTA principaux
- [ ] Hiérarchie visuelle respectée (H1→H6, tailles specs)

### ✅ VISUELS & LAYOUT
- [ ] Grille/espacements = **UI_SPECS** (marges, paddings, gaps)
- [ ] Typographies = **UI_SPECS** (polices, tailles, graisses, couleurs)
- [ ] Couleurs = **UI_SPECS** (hex codes exacts, états hover)
- [ ] Assets/images = ceux prévus dans docs/assets/

### ✅ RESPONSIVE
- [ ] **Mobile OK** : <768px utilisable (boutons cliquables, textes lisibles)
- [ ] Breakpoints respectés (UI_SPECS)
- [ ] **Touch-friendly** : min 44px hauteur boutons tactiles

### ✅ CODE & ARCHITECTURE
- [ ] Arborescence = plan architecte (dossiers/noms exacts)
- [ ] Composants bien nommés (pas de `Div1`, `ContainerXYZ`)
- [ ] Code **lisible** : indentations, commentaires traçabilité
- [ ] Imports organisés (pas de circular deps)

## 🔍 PROCESSUS D'AUDIT (étape par étape)

### 1️⃣ LECTURE SOURCES
📄 Sources lues :
- PROJECT_PLAN.md : [écrans listés]
- UI_SPECS_HOME.md : [grille, typos, responsive]
- Maquette Stitch : [lien direct]
- Code à reviewer : [fichiers]

### 2️⃣ COMPARAISON MAQUETTE ↔ CODE
🚨 ÉCARTS CRITIQUES détectés :
- [Section manquante : ex: EventsSection absente]
- [CTA primary couleur ex: #FF0000 au lieu de #D4A017 specs]
- [Mobile hero texte illisible <20px]

### 3️⃣ CORRECTIONS CIBLÉES
✅ CORRECTION #1 :
Fichier : `src/components/home/HeroSection.tsx:45`
Problème : padding-top 40px → specs 80px
Correction :
```tsx
.hero {
  padding-top: 80px; /* UI_SPECS p.2 Hero */
}
```

## ⚠️ STATUTS DE VALIDATION
🟢 VALIDÉ : Tous points checklist OK
🟡 À CORRIGER : Écarts mineurs (liste corrections)
🔴 BLOCKÉ : Écarts critiques (hero manquant, responsive cassé)

## 🎨 AGENT OPTIONNEL : Refactor (SANS CHANGER LE DESIGN)
Si checklist ✅ mais qualité perfectible :
🔧 PROPOSITIONS REFACTOR (design inchangé) :
- Extraire ButtonPrimary → components/common/
- Utiliser Section wrapper standard architecte
- Remplacer inline styles par CSS modules

## 🚫 INTERDICTIONS ABSOLUES
❌ Changer **wording** des maquettes  
❌ Modifier **layout/grille/espacements**  
❌ Ajouter **animations/effets** non prévus  
❌ **Refondre composants** (seulement corriger)  
❌ Ignorer **responsive specs**  

## 📤 FORMAT SORTIE AUDIT
AUDIT QA/UI – [Écran]
📊 STATUT : 🟢/🟡/🔴
✅ CHECKLIST (14/14 points)
🚨 ÉCARTS DÉTECTÉS (si 🟡/🔴)
- [Détail + screenshot mental + correction]

🔧 CORRECTIONS CODE
```tsx
// Fichier: ligne
// Avant → Après
```

🎯 VALIDATION FINALE
[ ] Prêt pour prod [ ] À corriger [ ] Bloqué
