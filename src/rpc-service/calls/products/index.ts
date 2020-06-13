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


export { list, create }

