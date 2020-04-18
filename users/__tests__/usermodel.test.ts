import mongoose,{Types} from 'mongoose';
import User, { IUser } from '../userSchema'
import config, { IConfig } from 'config'

describe('User Model', () => {
    beforeAll(async () => {
        const { host, port, dbName } = config.get('mongoose.dbConfig')
        let url = `mongodb://${host}:${port}/${dbName}`
        await mongoose.connect(url, { useNewUrlParser: true })
    })
    afterAll(async done => {
        mongoose.connection.close()
        done()
    })
    it('Should throw validation errors', () => {
        const user = new User()
        expect(user.validate).toThrow()
    })
    it('Should save a user', async () => {
        //expect.assertions(2);
        const user: IUser = new User({
            firstName: 'Test First Name',
            lastName: 'Test Last Name',
            email: 'test@example.com',
            gender: 1
        })
        const spy = jest.spyOn(user, 'save')
        user.save()

        expect(spy).toHaveBeenCalled()

        // expect(user).toMatchObject({
        //     _id:expect.any(String),
        //     firstName: expect.any(String),
        //     lastName: expect.any(String),
        //     email: expect.any(String),
        //     gender: expect.any(Number)
        // })
        expect(user.email).toBe('test@example.com')
        
    })
    it('Should get Gender of user', async () => {
        //expect.assertions(2);
        const user: IUser = new User({
            firstName: 'Test First Name',
            lastName: 'Test Last Name',
            email: 'test@example.com',
            gender: 1
        })
        const spy = jest.spyOn(user, 'save')
       console.log(user)
        user.save()
    })
})