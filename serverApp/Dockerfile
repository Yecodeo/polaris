FROM node:latest

ENV USER=www
ENV DIRAPP=webapp

ENV NODE_ENV=development
ENV DB_NAME=users
ENV DB_USER=root
ENV DB_PASS=root
ENV APP_PORT=3000
ENV DB_HOST=user-db
# importing port argument
ARG DB_PORT
ENV DB_PORT=$DB_PORT
# ENV DEBUG=express:* 
RUN useradd --user-group --create-home --shell /bin/false $USER
ENV HOME=/home/$USER
COPY package.json yarn.lock $HOME/$DIRAPP/
RUN chown -R $USER:$USER $HOME/*
USER $USER
WORKDIR $HOME/$DIRAPP

EXPOSE 3001

RUN npm
COPY . .

RUN npm start
