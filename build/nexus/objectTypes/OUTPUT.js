"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OUTPUT = void 0;
const nexus_1 = require("nexus");
exports.OUTPUT = (0, nexus_1.objectType)({
    name: 'OUTPUT',
    definition(t) {
        t.id('id');
        t.string('name');
        // dynamic
        t.string('dateNow', {
            resolve: async () => {
                return Date.now();
            },
        });
    },
});
//# sourceMappingURL=OUTPUT.js.map