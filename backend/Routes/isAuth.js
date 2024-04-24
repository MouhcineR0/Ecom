const { VerifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ isAuth: false });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = VerifyToken(token);
        if (decoded) {
            return res.json({ isAuth: true });
        }
        return res.json({ isAuth: false });
    }
    catch (e) {
        next(e);
    }

};