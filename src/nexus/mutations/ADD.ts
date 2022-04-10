import {arg, mutationField} from 'nexus';
import {Sample} from "lib-mongoose";

export const AddTest = mutationField(t => {
    t.nonNull.field('AddTest', {
        type: 'OUTPUT',
        args: {
            input: arg({type: 'INPUT'}),
        },
        resolve: async (source, args) => {
            const {input} = args;
            console.log(input)
            if (!input) {
                throw new Error('Input cannot be empty');
            }
            const {name} = input;


            const mutation = new Sample({name})
            await mutation.save()
            const id = mutation._id

            return {
                name,
                id
            }
        },
    });
});
