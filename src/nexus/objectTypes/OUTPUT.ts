import {objectType} from 'nexus';

export const OUTPUT = objectType({
    name: 'OUTPUT',
    definition(t) {
        t.id('id');
        t.string('name');
        // dynamic
        t.string('dateNow', {
            resolve: async () => {
                return  Date.now()
            },
        });
    },
});
