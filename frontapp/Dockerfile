FROM node:latest

# work folder
WORKDIR /app

# set envirement variable to developpement
ENV NODE_ENV=development

# install global vue cli for developpement only
RUN npm install -g vue-cli

# copy npm package
COPY package.json ./

# install whole requirements
RUN npm install

# expose port
EXPOSE 8080

# copy all files to current directory
COPY . .

# run server
CMD ["npm", "run", "serve"]
