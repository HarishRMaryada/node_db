require("app-module-path").addPath(__dirname);
const grpcServer = require("src/rpc-proto")
grpcServer.start();
