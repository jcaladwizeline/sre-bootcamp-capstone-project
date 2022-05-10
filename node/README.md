# Setup

### Install dependencies.

```bash
npm install
```

### Setup dotenv (environment vars).

Copy the file .env.example to .env

```bash
cp .env.example .env
```

Remplace the values of the vars in the .env file.

### Run proyect.

```bash
npm run start
```

### Run Linter.

```bash
npm run lint
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

### Infrastructure as code

For create the insfractructure, it is used terraform, there are two folders postgres and beanstalk
Install AWS CLI to configure aws credentials https://aws.amazon.com/cli/
Install Terraform CLI to create insfractructure https://www.terraform.io/cli/commands

Set aws credentials AWS Access Key ID and AWS Secret Access Key

```bash

aws configure

AWS Access Key ID
AWS Secret Access Key

```

Now run these commands in terraform/postgres and terraform/beanstalk

```bash

terraform init
terraform apply

```

To destroy insfractruture run

```bash

terraform destroy

```
