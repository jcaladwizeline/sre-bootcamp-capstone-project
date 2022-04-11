# Setup

### Install dependencies.

```bash
npm install
```

### Setup dotenv (environment vars).

Copy the file .env.example to .env

```bash
cp .env.example
```

Remplace the values of the vars in the .env file.

### Run proyect.

```bash
npm start
```

### Endpoints

- [post] /login
- [get] /\_health
- [get] /mask/${cidr}
- [get] /cidr/${mask}

### Docker

```bash
docker run -e DB_HOST=mentoring.chezv7d8o5zi.us-east-1.rds.amazonaws.com -e DB_PORT=5432 -e DB_USER=postgres -e DB_PASSWORD=postgres -e DB_DATABASE=postgres -e DIALECT=postgres -e JWT_KEY=the-jwt-key --name nodejs-image-demo5 -p 8000:8000 -d caladdd/sre_caladdd
```
