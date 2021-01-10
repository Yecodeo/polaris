import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyparser from 'body-parser';
import publicationRouter from './routes/punblication.route';
import userRouter from './routes/user.route';
import countryRoute from './routes/country.router';

const app = express();
/**
 * calling middlewares
 */

app.use(bodyparser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Calling routes middleware
 */
app.use('/', publicationRouter);
app.use('/', userRouter);
app.use('/', countryRoute);

export default app;
