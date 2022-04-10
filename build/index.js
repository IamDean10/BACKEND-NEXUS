"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./initializers");
const express_1 = require("./express");
const apollo_1 = require("./apollo");
const http_1 = require("http");
const { PORT = 8080 } = process.env;
const server = (0, http_1.createServer)(express_1.default);
apollo_1.default.applyMiddleware({ app: express_1.default });
express_1.default.get('/', (req, res, next) => {
    res.sendStatus(200);
    next();
});
server.listen({ port: PORT }, () => {
    process.stdout.write(`Server ready at http://localhost:${PORT}\n`);
});
//# sourceMappingURL=index.js.map