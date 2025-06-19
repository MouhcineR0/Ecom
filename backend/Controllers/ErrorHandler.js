const ErrorHandler = (err, req, res, next) => {
	const status = 200;
	res.status(status).json({
		success: false,
		status: req.errstatus || status,
		message: req.errmsg || 'Internal Server Error',
	});
};

module.exports = ErrorHandler;