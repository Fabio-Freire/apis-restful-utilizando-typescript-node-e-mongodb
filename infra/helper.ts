class Helper {
  
    sendResponse = function (res, statusCode, data) {
        res.status(statusCode).json(data);
    };

}

export default new Helper();