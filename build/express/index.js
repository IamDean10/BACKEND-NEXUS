"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb' }));
exports.default = app;
//# sourceMappingURL=index.js.map