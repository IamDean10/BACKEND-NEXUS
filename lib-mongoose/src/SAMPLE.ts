import {model, Schema, Document, Types} from 'mongoose';

export interface Sample {
    name: string | null;
}

const schema = new Schema<SampleDocument>({
    name: String,
});

schema.set('toJSON', {virtuals: true});

export interface SampleDocument
    extends Document<Types.ObjectId | string>,
        Sample {}

export const Sample = model<SampleDocument>(
    'Sample',
    schema,
    'Sample'
);
