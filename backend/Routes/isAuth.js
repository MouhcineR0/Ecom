const Router = require('express').Router();
const { VerifyToken } = require('../utils/jwt');

const Auth = (req, res) => {
    const authHeader = req?.headers?.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ isAuth: false });
    }
    const token = authHeader.split(' ')[1];
    try {
        const data = VerifyToken(token);
        console.log(data);
        if (data) {
            return res.json({ isAuth: true, data });
        }
        return res.json({ isAuth: false });
    }
    catch (e) {
        return res.json({ isAuth: false });
    }
};

Router.post('/isAuth', Auth);
module.exports = Router;