# Exercice – Réécrire un fichier CSS avec la syntaxe imbriquée en SASS

## Objectif de l'exercice  
Dans cet exercice, vous allez transformer un fichier **CSS classique** en utilisant **l’imbrication en SASS**. L'objectif est de comprendre **comment organiser les sélecteurs de manière plus efficace** et d'appliquer **le sélecteur parent (`&`)** pour optimiser les pseudo-classes et pseudo-éléments.  

---

## Instructions  

### **1️. Analyse du fichier CSS existant**  
1. **Ouvrez le fichier `style.css`** et examinez sa structure.  
2. **Identifiez les répétitions de sélecteurs** et repérez les opportunités d'optimisation.  
3. **Réfléchissez aux améliorations possibles** :  
   - Quels sélecteurs pourraient être **imbriqués** ?  
   - Où utiliser **le sélecteur parent (`&`)** pour simplifier le code ?  
   - Comment rendre le CSS **plus lisible et plus maintenable** ?  

### **2️. Réécriture en SCSS**  
1. **Créez un fichier `style.scss`** dans le dossier `/scss/`.  
2. **Réécrivez le CSS en SCSS** en appliquant les bonnes pratiques :  
   - Utiliser **l’imbrication (`{}`)** pour regrouper les styles liés.  
   - Utiliser **le sélecteur parent (`&`)** pour les pseudo-classes et pseudo-éléments.  
3. **Compilez votre fichier SCSS** en CSS avec la commande suivante :  
   ```bash
   sass --watch scss/style.scss:css/style.css
   ```
4. **Vérifiez dans le navigateur** que l'affichage reste identique à la version originale.  

---

## Fichiers fournis  

```plaintext
/sass_exercice_3
  ├── css/
  │   ├── style.css     # Fichier CSS à transformer en SCSS
  ├── scss/
  │   ├── style.scss    # Fichier SCSS à compléter
  ├── index.html        # Page HTML pour tester les styles
  ├── README.md         # Explication du projet
```

*Une page Notion vous a été transmise pour accéder à cet exercice. Veuillez vous y rendre afin d'obtenir toutes les informations concernant celui-ci.* 