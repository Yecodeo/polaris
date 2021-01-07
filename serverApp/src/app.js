import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyparser from 'body-parser';
import elastic from './db/elastic';

const client = elastic.getInstance();

import publicationRouter from './routes/punblication.route';
import userRouter from './routes/user.route';
import countryRoute from './routes/country.router';

let app = express();
app.use(bodyparser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', publicationRouter);
app.use('/', userRouter);
app.use('/', countryRoute);

app.use((req, res, next) => {
	esLog(client, req);
	next();
  })

export default app;
