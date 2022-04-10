import {queryField} from 'nexus';
import {Sample} from "lib-mongoose";

export const GetTest = queryField(t => {
    t.nonNull.field('GetTest', {
        type: 'OUTPUTList',
        resolve: async (source, args) => {
            const items = await Sample.find();
            return {
                items: items || []
            }
        },
    });
});
