import { Document,Schema,Model,model } from 'mongoose'

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true
    },
});

enum Gender {
    Male = 1,
    Female = 0
}


interface IUserSchema extends Document {
    firstName: string;
    lastName?: string;
    email: string;
    //password: string;
    gender: Gender;
}

//Instance methods
UserSchema.methods.method1 =function (){return ''}
UserSchema.methods.getGender=function(this:IUserSchema){
    return this.gender>0 ? 'Male':'Female'
}
//Virtual methods
UserSchema.virtual('fullName').get(function(this:IUser){
    return this.firstName + this.lastName;
})

export interface IUser extends IUserSchema {
    fullName :string,
    method1():string
}

export interface IUserModel extends Model<IUser>{

}

export default model<IUser,IUserModel>('user',UserSchema)