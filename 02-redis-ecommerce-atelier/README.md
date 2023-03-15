# Un serveur express et un client vuejs

## Installation

### Pré-requis

-   Avoir installé `redis-stack` sur la machine [instructions ici](../01-code-examples/README.md)

### Les commandes

-   Faire ces commandes : `npm i && npm run install && npm run watch`
-   Ces commandes installent `concurrently`, les dépendances du serveur et du client, et enfin démarrent les deux services.

### L'architecture du serveur

```bash
├── app
│   ├── controllers
│   │   ├── appController.js
│   │   ├── CartController.js
│   │   ├── CategoriesController.js
│   │   └── ProductsController.js
│   └── routers.js
├── db
│   └── redis.conf
│   └── redisClient.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
