const responseResult = {
    general(res, status, results) {
        res.status(status).json({
            status,
            results,
        });
    },
    error(res, status, message, stack = undefined) {
        const response = { status, message };

        if (stack) {
            response.stack = stack;
        }
        res.status(status).json(response);
    },
};

module.exports = responseResult;
