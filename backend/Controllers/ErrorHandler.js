const ErrorHandler = (err, req, res, next) => {
    const status = 200;
    res.status(status).json({
        success: false,
        status: status,
        message: 'Internal Server Error',
    });
};

module.exports = ErrorHandler;