import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb'}));

export default app;
