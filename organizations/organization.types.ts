import { Document, Model } from 'mongoose'

export declare interface IOrganization extends Document {
    name: string
}
export interface OrganizationModel extends Model<IOrganization> { }