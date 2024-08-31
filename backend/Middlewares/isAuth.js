const { VerifyToken } = require('../utils/jwt');

// i need to fix this also  | Authorization

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ isAuth: false });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ isAuth: false, msg: "Authorization denied" });
    }

    try {
        const verify = VerifyToken(token);
        req.user = verify.id;
        req.role = verify.role;
        next();
    } catch (err) {
        res.status(401).json({ isAuth: false, msg: "Token is not valid" });
    }
};

