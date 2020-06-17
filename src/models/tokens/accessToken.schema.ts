import { Model, model, Schema } from "mongoose"
import config, { IConfig } from "config"
import * as moment from "moment"
import { IAccessToken } from "./token.types"


interface IConfigTokens extends IConfig {
    tokens: {
        accessTokenExp: number,
    }
}



export interface AccessTokenModel extends Model<IAccessToken> {

}

export class AccessToken {
    private _model: Model<IAccessToken>
    constructor() {
        // @ts-ignore
        const { tokens: { accessTokenExp } }: IConfigTokens = config
        const schema = new Schema({
            accessToken: { type: String, required: true },
            user: { type: Schema.Types.ObjectId, required: true },
            // expiryDate: {
            //     type: Date, default: () => moment().add(accessTokenExp, 'hour')
            // },
        })
        this._model = model<IAccessToken>('accessToken', schema)
    }
    public get model(): Model<IAccessToken> {
        return this._model
    }
}