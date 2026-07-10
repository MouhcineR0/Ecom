const jwt = require('jsonwebtoken');
const ErrorHandler = require('../Controllers/ErrorHandler');

function CreateToken(obj) {
    try {
        const token = jwt.sign(obj, process.env.JWT_TOKEN, {
            expiresIn: '9d'
        });
        return token;
    } catch {
        return false;
    }
}

function VerifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        return decoded;
    } catch {
        return false;
    }
}

module.exports = { CreateToken, VerifyToken };