import { Model, model } from "mongoose"
import { IBaseSchema, timeStamps } from "../utils/baseSchema"

export declare interface IProduct extends IBaseSchema {
    name: string,
    price: number
}

export interface ProductModel extends Model<IProduct> {

}

export class Product {
    private _model: Model<IProduct>
    constructor() {
        const schema = {
            name: { type: String, required: true },
            price: { type: Number, required: true }
        }
        this._model = model<IProduct>('Product', timeStamps(schema))
    }
    public get model(): Model<IProduct> {
        return this._model
    }
}