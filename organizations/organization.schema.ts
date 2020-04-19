import {Schema,Model, model} from 'mongoose'
import {IOrganization} from './organization.types'
export class Organization {
    private _model :Model<IOrganization>
    constructor(){
        const schema = new Schema({
            name :String
        })
        this._model =model<IOrganization>('organization',schema)
    }
    public get model():Model<IOrganization>{
        return this._model
    }
}