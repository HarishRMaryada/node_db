const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
import config, { IConfig } from "config"
import paths from "./paths"
const packageDefinition = protoLoader.loadSync(paths, {});
const grpcObj = grpc.loadPackageDefinition(packageDefinition);
import { productServices, userServices } from "./calls"

interface IConfigDB extends IConfig {
  grpcService: {
    host: string;
    port: number;
  }
}

const server = new grpc.Server();
// @ts-ignore
const { grpcService: { host, port } }: IConfigDB = config
server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());
productServices(server, grpcObj)
userServices(server, grpcObj)

export default server