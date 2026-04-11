## Project structure
```
.
├── Dockerfile
├── README.md
├── config			#Strapi Configuration
│   ├── admin.js
│   ├── api.js
│   ├── database.js
│   └── server.js
├── data			#MySQL database
├── docker-compose.yml
├── package.json
├── public			#Assets uploaded via Strapi
│   └── uploads
├── restart.sh
├── src
└── yarn.lock
```

## .env structure
```.env
PUBLIC_URL=
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
JWT_SECRET=
ADMIN_JWT_SECRET=
APP_KEYS=
NODE_ENV=
ADMIN_AUTH_SECRET=
ADMIN_API_TOKEN_SALT=
ADMIN_TRANSFER_TOKEN_SALT=
```

## Database Migration

To move the database to a new host using a logical dump:

### 1. On Source Machine (Export)

```bash
docker exec strapiDB mysqldump -u root -pstrapi strapiDB > backup.sql
```

### 2. Transfer Files
Copy `backup.sql`, `.env`, `docker-compose.yml`, and the `public/uploads/` folder to the new server.

### 3. On Target Machine (Import)
First, start the containers:

```bash
docker compose up -d
```

Then, import the data:
```bash
cat backup.sql | docker exec -i strapiDB mysql -u root -pstrapi strapiDB
```

### 4. Finalize
Restart Strapi to refresh the connection:

```bash
docker compose restart strapi
```
