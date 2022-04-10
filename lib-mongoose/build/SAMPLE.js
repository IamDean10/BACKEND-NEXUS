"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
});
schema.set('toJSON', { virtuals: true });
exports.Sample = (0, mongoose_1.model)('Sample', schema, 'Sample');
//# sourceMappingURL=SAMPLE.js.map