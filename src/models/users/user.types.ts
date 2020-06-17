import { IBaseSchema } from "../utils/baseSchema"
export declare interface IUser extends IBaseSchema {
    email: string,
    password: string,
    firstName?: string;
    lastName?: string;
}
export interface IUserModel extends IUser {
    comparePassword(password: string): boolean;
}