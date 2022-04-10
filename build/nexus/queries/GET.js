"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTest = void 0;
const nexus_1 = require("nexus");
const lib_mongoose_1 = require("lib-mongoose");
exports.GetTest = (0, nexus_1.queryField)(t => {
    t.nonNull.field('GetTest', {
        type: 'OUTPUTList',
        resolve: async (source, args) => {
            const items = await lib_mongoose_1.Sample.find();
            return {
                items: items || []
            };
        },
    });
});
//# sourceMappingURL=GET.js.map