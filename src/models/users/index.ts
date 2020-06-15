import _ from "lodash";
import { User, UserModel } from "./user.schema"
import { IUser } from "./user.types"
import { DB } from "../index"

export const list = async () => {
    try {
        return await DB.Models.User.find({})
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const create = async (doc: IUser) => {
    try {
        let user = new DB.Models.User(doc);
        return await user.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const update = async (doc: IUser) => {
    try {
        let user = await DB.Models.User.findById(doc._id);
        if (!user) {
            console.log("No User found")
            return "something"
        }
        user = _.assign(user, doc)
        return await user.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}


export { User, UserModel, IUser }