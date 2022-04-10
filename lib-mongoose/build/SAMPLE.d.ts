/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Types } from 'mongoose';
export interface Sample {
    name: string | null;
}
export interface SampleDocument extends Document<Types.ObjectId | string>, Sample {
}
export declare const Sample: import("mongoose").Model<SampleDocument, {}, {}, {}>;
