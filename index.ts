import * as User from './users'

export default {
    User,test
}


import { Database } from './DatabaseContoller'



function test (){
    let organization = new Database.Models.Organization({
        name: "test" //add value from req object
    })
    organization.save((err) => {
        console.log(err)
    })
}
