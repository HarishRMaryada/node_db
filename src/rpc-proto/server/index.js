const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const paths =  require("./paths")
const packageDefinition = protoLoader.loadSync(paths, {});
const grpcObj = grpc.loadPackageDefinition(packageDefinition);
const productPackage = grpcObj.productPackage;
const userPackage = grpcObj.userPackage;
const productModel = require("../../models/products")
const DB = require("../../models/DataBaseController")

const server = new grpc.Server();
server.bind("0.0.0.0:50055", grpc.ServerCredentials.createInsecure()); //need to config
 let products = [{ _id: "product 1", name: "myproduct", price: 44 }]
function create(call, callback) {
  products.push(call.request)
  callback(null, { _id: "product 1", name: "myproduct", price: 20 }); //resJson must match with proto
}


function list(call, callback) {  
  let data = productModel.list()
  data.then(function(result){
    callback({},{"products":data})
  })
}
function listStream(call, callback) {
  products.forEach(p => call.write(p))
  call.end()
}
console.log("STARTED GRPC")
server.addService(productPackage.Product.service, {
  create: productModel.create(),
  list: list,
  listStream:listStream
});

const users = [ {_id: "bbn", name: "none", price: 50}]
function userlist(call, callback) {
  callback(null,{"users":users})
}

server.addService(userPackage.User.service, {
  userlist: userlist
});
module.exports = server