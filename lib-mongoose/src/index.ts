import {
    connect as connectToMongoDB,
    ConnectOptions as MongooseConnectOptions,
    disconnect as disconnectFromMongoDB,
} from 'mongoose';

// import model here
export * from './SAMPLE';



//mongoose connection
export {connection} from 'mongoose';

export type ConnectOptions = MongooseConnectOptions;
export type ConnectParams = {
    url?: string;
    options: ConnectOptions;
};

export function connect(params?: ConnectParams) {
    console.log(process.env.MONGODB_URI)
    return connectToMongoDB(
        process.env.MONGODB_URI!,
        Object.assign(
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                keepAlive: true,
            },
            params?.options || {}
        )
    );
}

export function disconnect() {
    return disconnectFromMongoDB();
}
