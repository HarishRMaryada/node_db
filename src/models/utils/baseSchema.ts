import { Document, Schema } from "mongoose"
import _ from "lodash";
import { IUser } from "../users"


export declare interface IBaseSchema extends Document {
    createdAt: Date,
    createdBy: IUser['_id'],
    modifiedAt: Date,
    modifiedBy: IUser['_id']
}

const schema = {
    createdAt: { type: Date, default: Date.now },
    createdBy: Schema.Types.ObjectId,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: Schema.Types.ObjectId
}
const timeStamps = (doc: any) => {
    return new Schema(_.assign(schema, doc));
}
export { timeStamps }