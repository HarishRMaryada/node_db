import _ from "lodash";
import { IUser, IUserModel } from "./user.types"
import UserModel from "./user.schema"

export const getUserByUsername = async (username: string) => {
    try {
        return await UserModel.findOne({ $or: [{ 'email': username }, { 'phone': username }] })
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const verifyPassword = async (password: string) => {
    try {
        return await new UserModel().schema.methods.comparePassword(password)
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const list = async ({ }) => {
    try {
        console.log("HIT")
        return await UserModel.find({}).select({ email: 1, _id: 0 })
    } catch (error) {
        console.log(error) //implement error handler
    }
}



export { IUser, IUserModel }