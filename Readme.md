## Context du projet

J'ai réalisé ce projet dans le cadre de ma formation de Dev Web. Il nous a été demandé de réaliser un site d'Agence de Voyage. Cet exercice a pour but de tester nos compétences sur les deux frameworks notamment NextJs et Symfony, il aussi pour but de tester nos connaissances sur les Api et leurs utilisations concrètes.

## Prérequis

Il sera nécéssaire d'avoir :
- Node version 20 et +
- PHP Version 8.3
- Symfony Version 7

## Instruction
Ne pas oublier de modifier le dossier .env du back pour qu'il corresponde à votre base de données :
- DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"

Pour démarer le serveur de NextJs, taper la commande:

```npm run dev```

Ensuite rendez vous sur http://localhost:3000 à l'aide votre navigateur pour afficher les résultats.

## Route API
-- /api/voyages/ - GET - Permet de récupérer les données des voyages qui été crées dans le back et les affiches dans le navigateur.

-- /api/voyages/id - GET -  Permet de voir les détails d'un voyage en récupérant l'id du dit voyage dans le back.


  
