import _ from "lodash";
import { AccessToken, AccessTokenModel } from "./accessToken.schema"
import { RefreshToken, RefreshTokenModel } from "./refreshToken.schema"
import { IAccessToken, IRefreshToken } from "./token.types"
import { DB } from "../index"

export const createAccessToken = async (doc: IAccessToken) => {
    try {
        let accessToken = new DB.Models.AccessToken(doc);
        return await accessToken.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}

export const createRefreshToken = async (doc: IRefreshToken) => {
    try {
        let refreshToken = new DB.Models.RefreshToken(doc);
        return await refreshToken.save();
    }
    catch (error) {
        console.log(error) //implement error handler
    }
}



export { IAccessToken, IRefreshToken, AccessToken, RefreshToken, AccessTokenModel, RefreshTokenModel }