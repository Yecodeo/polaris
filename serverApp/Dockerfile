FROM node:latest

# work folder
WORKDIR /app

# set envirement variable to developpement
ENV NODE_ENV=development
ENV APP_PORT=3001
ARG APP_PORT
ENV APP_PORT=$DB_PORT
# copy npm package
COPY package*.json ./

# install whole requirements
RUN npm install

# expose port
EXPOSE 3001

# copy all files to current directory
COPY . .

# run server
CMD ["npm", "start"]