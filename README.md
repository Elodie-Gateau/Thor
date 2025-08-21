# 🔨⚡ Jeu Thor — Mini‑jeu JavaScript (v1 → v3)

> **Projet pédagogique** réalisé dans le cadre de la préparation au **Titre Professionnel Développeur Web & Web Mobile (TP DWWM)**.  
> Ce projet met en pratique la **manipulation du DOM**, la **gestion d’événements clavier**, l’**algorithmie 2D** (coordonnées x/y), et la **structuration d’un projet front-end**.  

---

## 🎯 Objectif du jeu

Déplacer **Thor** sur une grille **40×18** jusqu’à l’**éclair** pour gagner, tout en :
- évitant les **pièges** (perte de PV),
- ne pas sortir de la **carte** (défaite),
- et en prenant garde à **Thanos** qui se déplace aléatoirement (v3).

Deux entités sont générées aléatoirement : l’**éclair** et **Thanos** (proche de l’éclair). Les **pièges** et **obstacles** sont paramétrés au lancement via `prompt` (v1/v3).

---

## 🧱 Versions & évolutions

- **v1** : logique console (prompts), comparaisons de positions, déplacements au clavier via saisie texte, PV et conditions de fin.  
- **v2** : **affichage graphique** en CSS Grid (40×18), sprites **Thor** + **éclair**, déplacements **flèches clavier** → mise à jour des `gridRow`/`gridColumn`.  
- **v3** : **interface complète** : panneau PV, **pièges** rendus visuels, **obstacles** révélés au contact, **Thanos** mobile, feedback fin de partie (victoire/défaites) en overlay, **animations** de marche (sprites).

---

## ✨ Fonctionnalités

- Déplacement de **Thor** au **clavier** (`ArrowUp/Right/Down/Left`)  
- Génération **aléatoire** des positions (éclair, pièges, obstacles, Thanos)  
- **PV** (3 cœurs) et **pièges** (−1 PV)  
- **Obstacles** : bloquent le mouvement, affichés à l’impact (v3)  
- **Thanos** : se déplace aléatoirement à chaque tour (v3)  
- **Overlays** de fin : victoire, sortie de map, 0 PV, rencontre Thanos (v3)

---

## 🛠️ Stack & concepts

- **HTML5** : structure sémantique, panneaux d’UI (overlays, PV)  
- **CSS3 / Grid** : plateau `display: grid` (**40×18**), sprites via `background-image`  
- **JavaScript (ES6)** : gestion d’événements (`keydown`), **génération pseudo‑aléatoire**, **logique de tour**, **collisions** (comparaison de coordonnées)

---

## 📂 Arborescence (extrait)

```
/
├─ Thor v1/
│  ├─ index.html
│  └─ script.js
├─ Thor v2/
│  ├─ index.html
│  ├─ style.css           
│  └─ script.js           # déplacements flèches → gridRow/Column
└─ Thor v3/
   ├─ index.html
   ├─ style.css           
   └─ script.js           # logique complète (pièges, obstacles, Thanos, fin de partie)
```

---

## ▶️ Lancer le projet (local)

1. Ouvrir le dossier de la **version souhaitée** (ex. *Thor v3*).  
2. Ouvrir `index.html` dans un navigateur moderne.  
3. Saisir le **nombre de pièges** et **d’obstacles** quand le navigateur le demande (prompts).  
4. Jouer avec les **flèches du clavier**.

---

## 🎮 Règles & commandes

- **But** : atteindre l’**éclair** ⚡ → **Victoire**  
- **Pièges** : collision → **–1 PV** (0 PV → **Défaite**)  
- **Map** : sortir des bornes (**x∈[0,39], y∈[0,17]**) → **Défaite**  
- **Thanos** (v3) : collision → **Défaite**  
- **Obstacles** (v3) : bloquent le mouvement et deviennent visibles

**Touches** : `↑` `→` `↓` `←`

---

## 🧩 Détails techniques clés

- **Comparaison de positions** :  
  ```js
  function comparePosition(a, b) { return a.x === b.x && a.y === b.y; }
  ```
- **Coordonnées aléatoires** (plateau 40×18) :  
  ```js
  obj.x = Math.floor(Math.random() * 40);
  obj.y = Math.floor(Math.random() * 18);
  ```
- **Placement visuel (CSS Grid)** :  
  ```js
  div.style.gridRow = y + 1;
  div.style.gridColumn = x + 1;
  ```
- **Déplacements clavier** (v2/v3) : mise à jour de `thor.x/y` + des propriétés CSS Grid correspondantes.

---

## 👩‍💻 Auteur

**Elodie Gateau** — 
- 💼 LinkedIn : https://www.linkedin.com/in/elodiegateau/  
- 🐙 GitHub : https://github.com/Elodie-Gateau

---

## 📜 Licence

Projet d’apprentissage — usage **pédagogique** dans le cadre du **Titre Professionnel DWWM**.
