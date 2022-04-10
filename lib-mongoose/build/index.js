"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = exports.connection = void 0;
const mongoose_1 = require("mongoose");
// import model here
__exportStar(require("./SAMPLE"), exports);
//mongoose connection
var mongoose_2 = require("mongoose");
Object.defineProperty(exports, "connection", { enumerable: true, get: function () { return mongoose_2.connection; } });
function connect(params) {
    return (0, mongoose_1.connect)((params === null || params === void 0 ? void 0 : params.url) || process.env.MONGODB_URI, Object.assign({
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
    }, (params === null || params === void 0 ? void 0 : params.options) || {}));
}
exports.connect = connect;
function disconnect() {
    return (0, mongoose_1.disconnect)();
}
exports.disconnect = disconnect;
//# sourceMappingURL=index.js.map