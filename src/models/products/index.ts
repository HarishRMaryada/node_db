import { Product, ProductModel, IProduct } from "./productSchema"
import { DB } from "../index"

export const list = async () => {
    try {
        return await DB.Models.Product.find({})
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const create = async (product: IProduct) => {
    try {
        let contact = new DB.Models.Product(product);
        return await contact.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export { Product, ProductModel, IProduct }