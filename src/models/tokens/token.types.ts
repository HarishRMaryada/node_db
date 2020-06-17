import { Document } from "mongoose"
export declare interface IAccessToken extends Document {
    accessToken: string,
    user: string,
    expiryDate: Date
}

export declare interface IRefreshToken extends Document {
    refreshToken: string,
    user: string,
    expiryDate: Date
}