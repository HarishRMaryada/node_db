import {connect,connection,Collection, Connection} from 'mongoose'
import config from 'config'
import { IModels } from './DBController.types'
import { Organization } from '../organizations/organization.schema'

export class Database {
    public static instance: Database

    private _db:Connection
    private _models:IModels;

    private constructor(){
        const host ='localhost'
        const port =27017
        const dbName ='db_test'
        //const { host, port, dbName } = config.get('mongoose.dbConfig')
        let url = `mongodb://${host}:${port}/${dbName}`
        connect(url, { useNewUrlParser: true })
        this._db =connection
        this._db.on('open',this.connected)
        this._db.on('error',this.error)
        this._models ={
            Organization: new Organization().model
        }
    }

    public static get Models(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance._models
    }

    private connected(){
        console.log('Mongoose has Connected')
    }

    private error(error:any){
        console.log('Mongoose has errored',error);
    }

}