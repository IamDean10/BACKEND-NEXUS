"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OUTPUTList = void 0;
const nexus_1 = require("nexus");
exports.OUTPUTList = (0, nexus_1.objectType)({
    name: 'OUTPUTList',
    definition(t) {
        t.nonNull.list.nonNull.field('items', { type: 'OUTPUT' });
        // dynamic
        t.string('dateNow', {
            resolve: async () => {
                return Date.now();
            },
        });
    },
});
//# sourceMappingURL=OUTPUTList.js.map