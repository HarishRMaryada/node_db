import { Product, ProductModel } from "./productSchema"
import { DB } from "../Index"

export async function list() {
    let data = await DB.Models.Product.find({}).select({ name: 1, _id: 0 })
    return data
}

export const create = () => {
    let contact = new DB.Models.Product(
        {
            name: "Product1",
            price: 20
        }
    );
    contact.save((err) => {
        if (err) {
            return err;
        }
        console.log("CREATED")
        return 1
    });
}

export { Product, ProductModel }