console.log("Working")
import grpcServer from "./src/rpc-service"
import startDB from "./src/models"
grpcServer.start()
startDB()
