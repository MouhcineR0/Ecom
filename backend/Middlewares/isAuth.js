const { VerifyToken } = require('../utils/jwt');

export default (req, res, next) => {
    try {
        const Token = req.cookies.token;
        if (Token) {
            const decoded = VerifyToken(Token);
            if (decoded) {
                const role = decoded.role;
                const id = decoded.id;
                next();
            }
            return res.json({ isAuth: false });
        }
        return res.json({ isAuth: false });

    }
    catch (e) {
        return res.json({ isAuth: false });
    }
};