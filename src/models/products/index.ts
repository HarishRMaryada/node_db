import _ from "lodash";
import { Product, ProductModel, IProduct } from "./productSchema"
import { DB } from "../index"

export const list = async () => {
    try {
        return await DB.Models.Product.find({})
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const create = async (doc: IProduct) => {
    try {
        let product = new DB.Models.Product(doc);
        return await product.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const update = async (doc: IProduct) => {
    try {
        let product = await DB.Models.Product.findById(doc._id);
        if (!product) {
            console.log("No Product found")
            return "something"
        }
        product = _.assign(product, doc)
        return await product.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}


export { Product, ProductModel, IProduct }