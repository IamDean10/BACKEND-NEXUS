"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const context_1 = require("./context");
const stringify = require("json-stringify-safe");
const nexus_1 = require("nexus");
const types = require("./nexus");
const formatError = (error) => {
    var _a, _b;
    console.error((_b = (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.exception) === null || _b === void 0 ? void 0 : _b.stacktrace);
    return error;
};
const formatResponse = (res) => {
    if (res.errors) {
        try {
            JSON.stringify(res.errors);
        }
        catch (err) {
            res.errors = JSON.parse(stringify(res.errors));
        }
    }
    return res;
};
const schema = (0, nexus_1.makeSchema)({
    types,
    plugins: [
        (0, nexus_1.nullabilityGuardPlugin)({
            shouldGuard: true,
            fallbackValues: {
                ID: () => 'MISSING_ID',
                Int: () => -1,
                Boolean: () => false,
                String: () => '',
                Long: () => 0,
                Float: () => 0,
            },
        }),
        (0, nexus_1.connectionPlugin)(),
        (0, nexus_1.fieldAuthorizePlugin)(),
    ],
});
// @ts-ignore
exports.default = new apollo_server_express_1.ApolloServer({
    schema,
    context: context_1.default,
    formatError,
    formatResponse,
    tracing: true,
    playground: true,
    introspection: true,
});
//# sourceMappingURL=apollo.js.map