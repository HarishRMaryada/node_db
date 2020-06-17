import _ from "lodash";
import { AccessToken, AccessTokenModel } from "./accessToken.schema"
import { RefreshToken, RefreshTokenModel } from "./refreshToken.schema"
import { IAccessToken, IRefreshToken } from "./token.types"
import { DB } from "../index"


//access-token
export const createAccessToken = async (doc: IAccessToken) => {
    try {
        let accessToken = new DB.Models.AccessToken(doc);
        return await accessToken.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const validateAccessToken = async (_id: string) => {
    try {
        let accessToken = DB.Models.AccessToken.findById(_id);
        if (!accessToken) return false
        return true;
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const deletAccessTokenById = async (_id: string) => {
    try {
        return await DB.Models.AccessToken.deleteOne({ _id: _id })
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}




//refresh-token
export const createRefreshToken = async (doc: IRefreshToken) => {
    try {
        let refreshToken = new DB.Models.RefreshToken(doc);
        return await refreshToken.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const deleteExpiredRefreshTokens = async () => { //exception for clearing all tokens on update/someother
    try {
        return await DB.Models.AccessToken.find({ expiryDate: { $lt: new Date() } }); //deletes all access tokens 
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}



export { IAccessToken, IRefreshToken, AccessToken, RefreshToken, AccessTokenModel, RefreshTokenModel }