import { ProductModel } from "./products"
import { UserModel } from "./users";
import { AccessTokenModel, RefreshTokenModel } from "./tokens";
export declare interface IModels {
    Product: ProductModel,
    User: UserModel,
    AccessToken: AccessTokenModel,
    RefreshToken: RefreshTokenModel
}