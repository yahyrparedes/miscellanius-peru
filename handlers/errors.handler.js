const httpStatusCodes = require('http-status-codes');
const responseResult = require('./../utils/response.util');

const catchAsync = (ftn) => {
    return (req, res, next) => {
        return ftn(req, res, next).catch((error) => {
            const err = new Error(error.message);
            err.status = httpStatusCodes.INTERNAL_SERVER_ERROR;
            next(err);
        });
    };
};

const pathNotFound = (req, res, next) => {
    const error = new Error('Path not found');
    error.status = httpStatusCodes.NOT_FOUND;
    next(error);
};

const generalError = (error, req, res, next) => {
    const environment = process.env.NODE_ENV;

    if (environment !== 'production') {
        responseResult.error(res, error.status, error.message, error.stack);
    } else {
        responseResult.error(res, error.status, error.message);
    }
};

module.exports = {catchAsync, pathNotFound, generalError};
