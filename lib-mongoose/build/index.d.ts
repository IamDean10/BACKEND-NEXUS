/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { ConnectOptions as MongooseConnectOptions } from 'mongoose';
export * from './SAMPLE';
export { connection } from 'mongoose';
export declare type ConnectOptions = MongooseConnectOptions;
export declare type ConnectParams = {
    url?: string;
    options: ConnectOptions;
};
export declare function connect(params?: ConnectParams): Promise<typeof import("mongoose")>;
export declare function disconnect(): Promise<void>;
