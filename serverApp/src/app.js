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
import publicationRoute from './routes/publication.route';

const app = express();

/**
 * calling middlewares
 */

app.use(bodyparser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'avatars')));
app.use(express.json({ limit: '50mb' }));

app.use(cors());
app.options('*', cors({
  origin: 'http://localhost:8080',
}));

/**
 * Calling routes middleware
 */
app.use('/affiliation', affiliationRouter);
app.use('/user', userRouter);
app.use('/country', countryRoute);
app.use('/organisation', organisationRoute);
app.use('/publication', publicationRoute);

export default app;
