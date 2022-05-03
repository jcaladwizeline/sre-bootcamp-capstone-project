FROM node:14.19-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ["node/package.json", ""]

RUN npm install

# Bundle app source
COPY ["node",""]

EXPOSE 8000
CMD [ "node", "index.js" ]

# App must run on port 8000
# Add your instructions to dockerize the application
