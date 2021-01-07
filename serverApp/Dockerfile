FROM node:latest

# work folder
WORKDIR /app

# set envirement variable to developpement
ENV NODE_ENV=development

ARG DB
ENV DB=$DB

ARG APP_PORT=3001
ENV APP_PORT=$DB_PORT

# copy npm package
COPY package*.json ./

# install whole requirements
RUN npm install

# expose port
EXPOSE 3001

# copy all files to current directory
COPY . .
# COPY waitme.sh ./
# RUN chmod +x waitme.sh 
## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# run server
CMD /wait && npm run start