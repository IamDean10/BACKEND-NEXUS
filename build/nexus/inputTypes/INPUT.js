"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INPUT = void 0;
const nexus_1 = require("nexus");
exports.INPUT = (0, nexus_1.inputObjectType)({
    name: 'INPUT',
    definition(t) {
        t.nonNull.string('name');
    },
});
//# sourceMappingURL=INPUT.js.map