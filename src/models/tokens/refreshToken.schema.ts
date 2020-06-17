import { Model, model, Schema } from "mongoose"
import { IRefreshToken } from "./token.types"



export interface RefreshTokenModel extends Model<IRefreshToken> {

}

export class RefreshToken {
    private _model: Model<IRefreshToken>
    constructor() {
        const schema = new Schema({
            refreshToken: { type: String, required: true },
            user: { type: Schema.Types.ObjectId, required: true },
            expiryDate: { type: Date } //max limit needs to be added by config
        })
        this._model = model<IRefreshToken>('refreshToken', schema)
    }
    public get model(): Model<IRefreshToken> {
        return this._model
    }
}