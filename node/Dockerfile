FROM node:14.19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]

# App must run on port 8000
# Add your instructions to dockerize the application
