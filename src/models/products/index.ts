import { Product, ProductModel } from "./productSchema"
import { DB } from "../Index"

export const list = () => {
    DB.Models.Product.find({}, (err, results) => {
        if (err) {
            console.log(err)
        }
        return results; //needs fix with cb
    })
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