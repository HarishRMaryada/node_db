import mongoose, { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';
import config, { IConfig } from "config"
import { timeStamps } from "../utils/baseSchema"
import { IUserModel } from '.';

interface IConfigTokens extends IConfig {
    auth: {
        saltRounds: 10
    }
}

const user = {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
};

const UserSchema: Schema = timeStamps(user)

// Virtuals
UserSchema.virtual("fullName").get(function (this: { firstName: string, lastName: string }) {
    return this.firstName + this.lastName
})

// Methods
UserSchema.method('comparePassword', function (password: string): boolean { //array func
    // @ts-ignore
    if (bcrypt.compareSync(password, this.password)) return true;
    return false;
});

// Static methods
UserSchema.static('hashPassword', (password: string): string => {
    // @ts-ignore
    const { auth: { saltRounds } }: IConfigTokens = config
    return bcrypt.hashSync(password, saltRounds);
});


// Document middlewares
// UserSchema.pre<IUser>("save", function (next) {
//     if (this.isModified("password")) {
//         this.password = hashPassword(this.password)
//     }
// });


// Query middlewares
// UserSchema.post("findOneAndUpdate", async function (doc) {
//     await updateCompanyReference(doc);
// });


export default mongoose.model<IUserModel>('User', UserSchema);
