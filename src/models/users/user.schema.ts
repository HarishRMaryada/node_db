import { Model, model } from "mongoose"
import { timeStamps } from "../utils/baseSchema"
import { IUser } from "./user.types"



export interface UserModel extends Model<IUser> {

}

export class User {
    private _model: Model<IUser>
    constructor() {
        const schema = {
            email: { type: String, required: true },
            password: { type: String, required: true }
        }
        this._model = model<IUser>('user', timeStamps(schema))
    }
    public get model(): Model<IUser> {
        return this._model
    }
}