import * as User from "../../../models/users"
const userServices = (server: any, grpcObj: any) => {
    const userPackage = grpcObj.userPackage;

    // function list(call: any, callback: any) {
    //     let data = ProductCollection.list()
    //     data.then(function (result: any) {
    //         callback(null, { "results": result })
    //     })
    // }

    // function create(call: any, callback: any) {
    //     let data = ProductCollection.create(call.request)
    //     data.then(function (result: any) {
    //         callback(null, result)
    //     })
    // }

    function getUserByUsername(call: any, callback: any) {
        callback(null, User.getUserByUsername(call.request))
    }
    function verifyPassword(call: any, callback: any) {
        callback(null, User.verifyPassword(call.request))
    }
    function list(call: any, callback: any) {
        callback(null, User.list(call.request))
    }

    server.addService(userPackage.User.service, {
        getUserByUsername: getUserByUsername,
        verifyPassword: verifyPassword,
        list: list
    });
}

export { userServices }