let response = (res, status, success, message, info) => {
    let response_data = {
        status,
        success,
        message,
        info
    }
    res.status(status).json(response_data);
}
module.exports = response;