import mongoose, { Schema } from 'mongoose';
import config, { IConfig } from "config"
import { IRefreshToken } from './token.types';

interface IConfigTokens extends IConfig {
    tokens: {
        refreshTokenExp: number,
    }
}
// @ts-ignore
const { tokens: { refreshTokenExp } }: IConfigTokens = config
const AccessToken: Schema = new Schema({
    refreshToken: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true },
    expiryDate: {
        type: Date,
        //default: () => moment().add(accessTokenExp, 'hour')
    },
});


export default mongoose.model<IRefreshToken>('refreshToken', AccessToken);
