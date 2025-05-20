# Projet #13 - Argent Bank API

Ce dépôt contient le code nécessaire pour exécuter le backend d'Argent Bank.

## 🎯 Objectifs
* Mettre en place une API bancaire sécurisée
* Implémenter un système d'authentification des utilisateurs
* Développer un système de gestion de profil utilisateur
* Préparer la documentation pour de futures fonctionnalités (transactions)

## 🛠️ Technologies utilisées
* **Node.js** (v12)
* **MongoDB** (Community Server)
* **Express**
* **JavaScript** (ES6+)
* **JWT** (JSON Web Tokens)
* **Swagger** (pour la documentation API)

## 📁 Structure du projet

```
argent-bank/
├── designs/
│   └── wireframes/
├── server/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## ▶️ Lancer le projet en local

### 1. Prérequis

Vérifiez que vous disposez des bonnes versions:

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de MongoDB
mongo --version
```

### 2. Configurer le projet

```bash
# Forkez ce dépôt
# Clonez le dépôt sur votre ordinateur
# Ouvrez une fenêtre de terminal dans le projet cloné

# Installer les dépendances
npm install
```

### 3. Lancer l'application

```bash
# Démarrer le serveur de développement local
npm run dev:server

# Remplir la base de données avec deux utilisateurs
npm run populate-db
```

Votre serveur sera accessible à l'adresse : `http://localhost:3001`

## 👤 Utilisateurs pré-configurés

### Tony Stark
* Prénom: `Tony`
* Nom: `Stark`
* Email: `tony@stark.com`
* Mot de passe: `password123`

### Steve Rogers
* Prénom: `Steve`
* Nom: `Rogers`
* Email: `steve@rogers.com`
* Mot de passe: `password456`

## 📚 Documentation API
Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter: `http://localhost:3001/api-docs`

## 🎨 Ressources de Design
* Le HTML et CSS statiques se trouvent dans: `/designs`
* Maquette pour la modification du nom d'utilisateur: `/designs/wireframes/edit-user-name.png`
* Wireframe pour le modèle de transactions: `/designs/wireframes/transactions.png`

## 📄 Licence
Ce projet a été réalisé dans un but pédagogique dans le cadre de la formation OpenClassrooms – Développeur d'application JavaScript React.

## 👤 Auteur
**NIAKATE Biaguy**  
Formation Développeur d'application JavaScript React – OpenClassrooms  
📅 Février 2025
