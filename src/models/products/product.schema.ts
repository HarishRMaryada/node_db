import { Model, model } from "mongoose"
import { timeStamps } from "../utils/baseSchema"
import { IProduct } from "./product.types"



export interface ProductModel extends Model<IProduct> {

}

export class Product {
    private _model: Model<IProduct>
    constructor() {
        const schema = {
            name: { type: String, required: true },
            price: { type: Number, required: true }
        }
        this._model = model<IProduct>('product', timeStamps(schema))
    }
    public get model(): Model<IProduct> {
        return this._model
    }
}