
export default {
    //User,
    // test
}


// import { Database } from './DatabaseContoller'

import { list, create } from "./src/models/products"

function test() {
    // let organization = new Database.Models.Organization({
    //     name: "test" //add value from req object
    // })
    // organization.save((err) => {
    //     console.log(err)
    // })
    console.log("Working")
    // list()
    // create()
    require("./src/rpc-proto")
}

test()
