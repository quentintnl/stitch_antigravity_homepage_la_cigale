# Spécifications de Design : Google Stitch (StitchMCP)

Ce document détaille les capacités et les outils offerts par le serveur MCP **Google Stitch** pour la génération et la gestion d'interfaces utilisateur (UI).

## Vue d'ensemble
Google Stitch est une plateforme permettant de générer des designs d'écrans et du code frontend à partir de simples instructions textuelles. L'implémentation StitchMCP expose ces fonctionnalités sous forme d'outils actionnables par un agent IA.

## Capacités Principales (Skills)

### 1. Gestion de Projet
*   **Création de Projet** (`create_project`) : Permet d'initialiser un nouveau conteneur pour vos designs et votre code.
*   **Récupération de Projet** (`get_project`) : Donne accès aux métadonnées d'un projet spécifique.
*   **Liste des Projets** (`list_projects`) : Énumère tous les projets accessibles (possédés ou partagés).

### 2. Génération d'Écrans
*   **Texte vers Écran** (`generate_screen_from_text`) : La fonctionnalité phare. Elle transforme un prompt détaillé en un design d'écran complet, incluant les composants et la structure.
*   **Variantes d'Écrans** (`generate_variants`) : À partir d'écrans existants, Stitch peut générer plusieurs alternatives basées sur de nouveaux critères (style, complexité, focus créatif).

### 3. Modification et Édition
*   **Édition d'Écrans** (`edit_screens`) : Permet de modifier un ou plusieurs écrans existants via un prompt. Idéal pour des ajustements itératifs ou des changements de thème globaux.
*   **Mise à jour d'Écran** (`get_screen`) : Récupère les détails techniques et visuels les plus récents d'un écran spécifique pour modification ultérieure.

## Outils Disponibles dans StitchMCP

| Outil | Description | Paramètres Clés |
| :--- | :--- | :--- |
| `create_project` | Crée un nouveau projet Stitch. | `title` |
| `list_projects` | Liste les projets de l'utilisateur. | `filter` (view=owned/shared) |
| `generate_screen_from_text` | Génère un écran à partir d'un prompt. | `projectId`, `prompt`, `deviceType` |
| `edit_screens` | Modifie des écrans existants. | `projectId`, `selectedScreenIds`, `prompt` |
| `generate_variants` | Crée des variantes de design. | `projectId`, `selectedScreenIds`, `variantOptions` |
| `list_screens` | Liste tous les écrans d'un projet. | `projectId` |
| `get_screen` | Détails complets d'un écran. | `name`, `projectId`, `screenId` |

---
*Document généré par l'assistant Antigravity.*
