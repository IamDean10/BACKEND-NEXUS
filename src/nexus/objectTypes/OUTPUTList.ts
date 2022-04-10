import {objectType} from 'nexus';

export const OUTPUTList = objectType({
    name: 'OUTPUTList',
    definition(t) {
        t.nonNull.list.nonNull.field('items', {type: 'OUTPUT'});
        // dynamic
        t.string('dateNow', {
            resolve: async () => {
                return  Date.now()
            },
        });
    },
});
