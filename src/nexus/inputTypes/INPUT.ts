import {inputObjectType} from 'nexus';

export const INPUT = inputObjectType({
    name: 'INPUT',
    definition(t) {
        t.nonNull.string('name');
    },
});
