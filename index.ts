console.log("Working")
import * as DB from "./src/models/Index"
import grpcServer from "./src/rpc-service"
grpcServer.start()
export default DB
