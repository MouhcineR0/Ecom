const Router = require('express').Router();
const { VerifyToken } = require('../utils/jwt');

const Auth = (req, res) => {
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
        return res.json({ isAuth: false });
    }
};

Router.post('/isAuth', Auth);
module.exports = Router;