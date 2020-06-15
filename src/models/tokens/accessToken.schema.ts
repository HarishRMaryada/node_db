import { Model, model, Schema } from "mongoose"
import { IAccessToken } from "./token.types"



export interface AccessTokenModel extends Model<IAccessToken> {

}

export class AccessToken {
    private _model: Model<IAccessToken>
    constructor() {
        const schema = new Schema({
            accessToken: { type: String, required: true },
            user: { type: Schema.Types.ObjectId, required: true }
        })
        this._model = model<IAccessToken>('accessToken', schema)
    }
    public get model(): Model<IAccessToken> {
        return this._model
    }
}