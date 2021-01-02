FROM node:latest

WORKDIR /app

ENV NODE_ENV=development
RUN npm install -g vue-cli
COPY package.json ./
RUN npm install
EXPOSE 8080

COPY . .
CMD ["npm", "run", "serve"]
