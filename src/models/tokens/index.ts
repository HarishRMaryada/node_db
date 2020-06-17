import _ from "lodash";
import * as crypto from "crypto";
import { IAccessToken, IRefreshToken } from "./token.types"
import AccessTokenModel from "./accessToken.schema"
import RefreshTokenModel from "./refreshToken.schema"

export const generateAccessToken = async (userId: string) => {
    try {
        let doc = {
            accessToken: crypto.randomBytes(256).toString('hex'),
            user: userId
        }
        let token = new AccessTokenModel(doc);
        return await token.save(); //control data flow
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const generateRefreshToken = async (userId: string) => {
    try {
        let doc = {
            refreshToken: crypto.randomBytes(256).toString('hex'),
            user: userId
        }
        let token = new RefreshTokenModel(doc);
        return await token.save(); //control data flow
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const validateAccessToken = async ({ token, user }: any) => {
    try {
        return await AccessTokenModel.findOne({ accessToken: token, user: user, expiryDate: { $gte: new Date() } }) ? true : false
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const validateRefreshToken = async ({ refreshToken, user }: any) => {
    try {
        return await RefreshTokenModel.findOne({ refreshToken: refreshToken, user: user, expiryDate: { $gte: new Date() } }) ? true : false
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export const generateAccessTokenByRefreshToken = async ({ refreshToken, user }: any) => {
    try {
        if (await validateRefreshToken({ refreshToken, user })) {
            return await generateAccessToken(user)
        }
    } catch (error) {
        console.log(error) //implement error handler
    }
}

export { IAccessToken, IRefreshToken }