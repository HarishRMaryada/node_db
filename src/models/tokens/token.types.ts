import { IBaseSchema } from "../utils/baseSchema"
export declare interface IAccessToken extends IBaseSchema {
    accessToken: string,
    user: string,
    expiryDate: Date
}

export declare interface IRefreshToken extends IBaseSchema {
    refreshToken: string,
    user: string,
    expiryDate: Date
}