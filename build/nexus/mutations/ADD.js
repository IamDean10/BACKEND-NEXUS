"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTest = void 0;
const nexus_1 = require("nexus");
const lib_mongoose_1 = require("lib-mongoose");
exports.AddTest = (0, nexus_1.mutationField)(t => {
    t.nonNull.field('AddTest', {
        type: 'OUTPUT',
        args: {
            input: (0, nexus_1.arg)({ type: 'INPUT' }),
        },
        resolve: async (source, args) => {
            const { input } = args;
            console.log(input);
            if (!input) {
                throw new Error('Input cannot be empty');
            }
            const { name } = input;
            const mutation = new lib_mongoose_1.Sample({ name });
            await mutation.save();
            const id = mutation._id;
            return {
                name,
                id
            };
        },
    });
});
//# sourceMappingURL=ADD.js.map