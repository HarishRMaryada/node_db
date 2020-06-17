import * as TokenModel from "../../../models/tokens"
const userServices = (server: any, grpcObj: any) => {
    const userPackage = grpcObj.userPackage;

    function generateAccessAndRefreshToken(call: any, callback: any) {
        const token = {
            accessToken: TokenModel.generateAccessToken(call.request),
            refreshToken: TokenModel.generateRefreshToken(call.request)
        }
        callback(null, token)
    }

    function generateAccessTokenByRefreshToken(call: any, callback: any) {
        callback(null, TokenModel.generateAccessTokenByRefreshToken(call.request))
    }

    function validateAccessToken(call: any, callback: any) {
        callback(null, TokenModel.validateAccessToken(call.request))
    }

    server.addService(userPackage.User.service, {
        generateAccessAndRefreshToken,
        generateAccessTokenByRefreshToken,
        validateAccessToken
    });
}

export { userServices }