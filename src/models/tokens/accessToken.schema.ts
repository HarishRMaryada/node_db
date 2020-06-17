import mongoose, { Schema } from 'mongoose';
import config, { IConfig } from "config"
import { IAccessToken } from './token.types';

interface IConfigTokens extends IConfig {
    tokens: {
        accessTokenExp: number,
    }
}
// @ts-ignore
const { tokens: { accessTokenExp } }: IConfigTokens = config
const AccessToken: Schema = new Schema({
    accessToken: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true },
    expiryDate: {
        type: Date,
        //default: () => moment().add(accessTokenExp, 'hour')
    },
});


export default mongoose.model<IAccessToken>('accessToken', AccessToken);
