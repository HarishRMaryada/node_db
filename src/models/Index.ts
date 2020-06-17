import { connect, connection } from "mongoose"
import config, { IConfig } from "config"
interface IConfigDB extends IConfig {
    dbConfig: {
        host: string;
        port: number;
        dbName: string;
    }
}

const startDB = () => {
    try {
        // @ts-ignore
        const { dbConfig: { host, port, dbName } }: IConfigDB = config
        let uri = `mongodb://${host}:${port}/${dbName}`
        const options: any = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
        connect(uri, options);
        connection.on('error', err => {
            console.log(err);
        });
        connection.once('open', () => {
            console.log("Connected to db");
        });
    } catch (error) {
        console.log(error);
    }
}
export default startDB