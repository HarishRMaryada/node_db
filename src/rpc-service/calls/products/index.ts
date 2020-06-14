import * as ProductCollection from "../../../models/products"

function list(call: any, callback: any) {
    let data = ProductCollection.list()
    data.then(function (result: any) {
        callback(null, { "results": result })
    })
}

function create(call: any, callback: any) {
    let data = ProductCollection.create(call.request)
    data.then(function (result: any) {
        callback(null, result)
    })
}

function listStream(call: any, callback: any) {
    //products.forEach(p => call.write(p))
    call.end()
}

const productServices = (server: any, grpcObj: any) => {
    const productPackage = grpcObj.productPackage;
    server.addService(productPackage.Product.service, {
        create: create,
        list: list,
        listStream: listStream
    });
}


export { productServices }

