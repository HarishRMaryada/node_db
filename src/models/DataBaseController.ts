// import { connect, connection, Collection, Connection } from "mongoose"
// import config, { IConfig } from "config"
// import { IModels } from "./models.types";
// import { Product } from "./products"
// import { User } from "./users";
// import { AccessToken, RefreshToken } from "./tokens";

// interface IConfigDB extends IConfig {
//     dbConfig: {
//         host: string;
//         port: number;
//         dbName: string;
//     }
// }

// export class DB {
//     private static instance: DB
//     private _db: Connection;
//     private _models: IModels;
//     private constructor() {
//         // @ts-ignore
//         const { dbConfig: { host, port, dbName } }: IConfigDB = config
//         let url = `mongodb://${host}:${port}/${dbName}`
//         connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//         this._db = connection;
//         this._db.on('open', this.connected);
//         this._db.on('error', this.error);

//         this._models = {
//             Product: new Product().model,
//             User: new User().model,
//             AccessToken: new AccessToken().model,
//             RefreshToken: new RefreshToken().model
//             // this is where we initialise all models
//         }
//     }

//     public static get Models() {
//         if (!DB.instance) {
//             DB.instance = new DB();
//         }
//         return DB.instance._models;
//     }

//     private connected() {
//         console.log('Mongoose has connected');
//     }

//     private error(error: any) {
//         console.log('Mongoose has errored', error);
//     }

// } 