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

### Run tests.

```bash
npm run test
```

### Endpoints

- [post] /login
- [get] /\_health
- [get] //cidr-to-mask?value=${cidr}
- [get] /mask-to-cidr?value=${mask}

### Docker

Docker image
https://hub.docker.com/repository/docker/caladdd/academy-sre-bootcamp-juan-calad

When run the docker image you have to add ENV variables

```bash

docker build -t your_dockerhub_username/nodejs-image-demo .

docker run -e DB_HOST= -e DB_PORT= -e DB_USER= -e DB_PASSWORD= -e DB_DATABASE= -e DIALECT= -e JWT_KEY= --name nodejs-image-demo -p 8000:8000 -d your_dockerhub_username/nodejs-image-demo
```
