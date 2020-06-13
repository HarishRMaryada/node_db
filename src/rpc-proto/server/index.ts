const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const paths = require("./paths")
const packageDefinition = protoLoader.loadSync(paths, {});
const grpcObj = grpc.loadPackageDefinition(packageDefinition);
const productPackage = grpcObj.productPackage;
const userPackage = grpcObj.userPackage;
const DB = require("../../models/DataBaseController")
const productModel = require("../../models/products")


const server = new grpc.Server();
server.bind("0.0.0.0:50055", grpc.ServerCredentials.createInsecure()); //need to config
let products = [{ name: "myproduct" }]
function create(call: any, callback: any) {
  products.push(call.request)
  callback(null, { _id: "product 1", name: "myproduct", price: 20 }); //resJson must match with proto
}
function list(call: any, callback: any) {
  let data = productModel.list()
  data.then(function (result: any) {
    callback(null, { "results": result })
  })

}
function listStream(call: any, callback: any) {
  products.forEach(p => call.write(p))
  call.end()
}
server.addService(productPackage.Product.service, {
  create: create,
  list: list,
  listStream: listStream
});

const users = [{ _id: "bbn", name: "none", price: 50 }]
function userlist(call: any, callback: any) {
  callback(null, { "users": users })
}

server.addService(userPackage.User.service, {
  userlist: userlist
});
server.start()
module.exports = server 
