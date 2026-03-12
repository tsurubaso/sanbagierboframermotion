

---


# 🎬 Introduction à Framer Motion (Next.js)

Ce projet est une **page tiree d'une application Next.js** servant de **terrain d’expérimentation pour Framer Motion**.

L’objectif n’est pas de reconstruire l'app complète, mais de :
- tester des **animations propres et lisibles**
- isoler des **composants animés réutilisables**
- valider l' `app/page.jsx` provenant d’un autre projet

---

## 🧱 Stack technique

- **Next.js (App Router)**
- **React**
- **Framer Motion**
- **Tailwind CSS**
- **jsDelivr** (assets partagés via CDN)

---

## 🎥 Pourquoi Framer Motion ?

Framer Motion est actuellement **la référence** pour l’animation en React.
Je decouvre aussi **Motion**
Quelle est la difference?

### Avantages clés :
- API **déclarative**
- Intégration **native avec React**
- Performances excellentes (animations GPU)
- Support du **scroll**, du **viewport**, du **hover**, du **layout**
- Compatible **SSR / Next.js**

---

## 📦 Structure recommandée

```

src/
├─ app/
│  ├─ page.jsx        # Page principale (animations ici)
│  ├─ layout.jsx
│  └─ globals.css
├─ components/
│  └─ MotionEffects.jsx  # Tous les composants animés

````

👉 **Bonne pratique** :  
👉 regrouper **toutes les animations** dans un seul fichier (`MotionEffects.jsx`).

---

## 🧩 Philosophie du projet

- ❌ Pas d’animations “magiques” cachées
- ✅ Chaque animation est **lisible, nommée et isolée**
- ✅ Les composants sont **réutilisables entre projets**
- ✅ Le layout reste **compréhensible sans animation**

---

## ⚙️ Setup Framer Motion

```bash
npm install framer-motion
````

Dans les composants clients :

```js
"use client";
import { motion } from "framer-motion";
```

⚠️ **Important**
Framer Motion **nécessite des Client Components** dans Next.js.

---

## ✨ Exemples d’animations utilisées

* **HeroSection**
  → entrée latérale + fade + hover optionnel

* **SlideIn**
  → apparition au scroll

* **ScrollColorSection**
  → changement de couleur basé sur le scroll

* **ScrollShiftSection**
  → effet de déplacement horizontal au scroll

* **AnimatedText**
  → révélation progressive du texte

---

## 🖼️ Gestion des assets (images)

Les images sont **centralisées dans un repo public** et consommées via **jsDelivr**.

### Exemple :

```js
const ASSETS = process.env.NEXT_PUBLIC_ASSETS_URL;
```

```jsx
<img src={`${ASSETS}/photos/moon/image.jpg`} alt="Moon" />
```

### Avantages :

* un seul stockage
* pas de duplication
* mises à jour globales
* cache CDN performant

---

## ⚠️ Conseils importants

### 1️⃣ Ne pas tout animer

> Une bonne animation sert le contenu, elle ne le remplace pas.

### 2️⃣ Toujours penser au scroll

Utiliser :

```js
viewport={{ once: true }}
```

pour éviter les animations infinies.

### 3️⃣ Séparer logique et animation

* page.jsx → structure & contenu
* MotionEffects.jsx → animation uniquement

### 4️⃣ Tester sans animation

Si la page est moche **sans Framer Motion**, l’animation ne corrigera rien.

---

## 🚧 Ce projet n’est PAS

* ❌ un template final
* ❌ une landing page marketing
* ❌ une démo exhaustive de Framer Motion

👉 C’est un **laboratoire**, pensé pour évoluer.

---


reported in other project also

