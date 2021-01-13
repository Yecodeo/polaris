import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyparser from 'body-parser';
import cors from 'cors';
import affiliationRouter from './routes/affiliation.route';
import userRouter from './routes/user.route';
import countryRoute from './routes/country.router';
import organisationRoute from './routes/organisation.route';

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
app.use(cors());
app.options('*', cors({
  origin: 'http://localhost:8080',
}));

/**
 * Calling routes middleware
 */
app.use('/', affiliationRouter);
app.use('/', userRouter);
app.use('/', countryRoute);
app.use('/', organisationRoute);

export default app;
