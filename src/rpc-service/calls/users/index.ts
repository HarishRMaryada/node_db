const userServices = (server: any, grpcObj: any) => {
    const userPackage = grpcObj.userPackage;
    const users = [{ _id: "bbn", name: "none", price: 50 }]
    function userlist(call: any, callback: any) {
        callback(null, { "users": users })
    }

    server.addService(userPackage.User.service, {
        userlist: userlist
    });
}

export { userServices }