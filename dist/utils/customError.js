class CustomError extends Error {
    constructor(serverMessage, clientMessage, statusCode) {
        super(serverMessage || clientMessage.toString());
        this.serverMessage = serverMessage || null;
        this.clientMessage = clientMessage;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default CustomError;
//# sourceMappingURL=customError.js.map