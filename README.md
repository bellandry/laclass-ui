# My UI Library 🚀

Une collection de composants UI personnalisés en **React + Tailwind CSS**.

## 📦 Installation

```sh
pnpm add @laclass-ui/ui
```

## 🚀 Utilisation

```tsx
import { Button, useToast } from "@laclass-ui/ui";

function App() {
  const { addToast } = useToast();

  return (
    <div>
      <Button
        label="Show Toast"
        onClick={() => addToast({ message: "Hello!", type: "info" })}
      />
    </div>
  );
}
```

## 🛠️ Développement

```sh
# Installer les dépendances
pnpm install

# Lancer le playground
pnpm dev
```

## 📖 Documentation

## 🤝 Contribuer

1. Fork ce repo
2. Clone le projet :

```sh
git clone https://github.com/bellandry/laclass-ui.git
```

3. Crée une branche :

```sh
git checkout -b feat/mon-nouveau-composant
```

4. Fais tes modifications et commit :

```sh
git add .
git commit -m "✨ Ajout d'un nouveau composant"
```

5. Pousse sur GitHub et ouvre une Pull Request 🚀

## 📜 Licence

MIT License - Voir le fichier LICENSE

## 📌 Étape 4 : Ajouter un `CHANGELOG.md`

On va suivre les mises à jour de la librairie avec un **changelog**.

📄 **`CHANGELOG.md`**

```md
# Changelog

## [1.0.0] - 2024-03-14

### ✨ Nouveautés

- Ajout du composant `Button`
- Ajout du composant `Toast` avec gestion globale

## [0.1.0] - 2024-03-10

- 🚀 Initialisation du projet avec Turborepo et pnpm
```
