import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import nocache from 'nocache';
import express from 'express';
import healthz from './routes/healthz/route';
import apidocs from './routes/apidocs/route';
import notFound from './routes/middlewares/notFound';
import error from './routes/middlewares/error';
import httpLogger from './routes/middlewares/httpLogger';
import v1Routes from './routes/v1';

const app = express();

app.use(nocache());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(httpLogger);

app.use('/', v1Routes);

app.use(healthz);
app.use(apidocs);
app.use(notFound);
app.use(error);

export default app;
