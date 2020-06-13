import { Document, Model, Schema, model } from "mongoose"

export declare interface IProduct extends Document {
    name: string,
    price: number
}

export interface ProductModel extends Model<IProduct> {

}

export class Product {
    private _model: Model<IProduct>
    constructor() {
        const schema = new Schema({
            name: { type: String, required: true },
            price: { type: Number, required: true }
        })
        this._model = model<IProduct>('Product', schema)
    }
    public get model(): Model<IProduct> {
        return this._model
    }
}