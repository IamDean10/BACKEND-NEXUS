import './initializers';

import app from './express';
import apollo from './apollo';
import {createServer} from 'http';

const {PORT = 8080} = process.env;

const server = createServer(app);
apollo.applyMiddleware({app});

app.get('/', (req, res, next) => {
    res.sendStatus(200);
    next();
});

server.listen({port: PORT}, () => {
    process.stdout.write(`Server ready at http://localhost:${PORT}\n`);
});
