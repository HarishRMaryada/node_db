import { Document, Schema } from "mongoose"
import _ from "lodash";


export declare interface IBaseSchema extends Document {
    createdAt: Date,
    createdBy: string,
    modifiedAt: Date,
    modifiedBy: string
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