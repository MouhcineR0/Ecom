const jwt = require('jsonwebtoken');
const ErrorHandler = require('../Controllers/ErrorHandler');

export function CreateToken(id, role) {
    try {
        const token = jwt.sign({ id, role }, process.env.JWT_TOKEN);
        return token;
    } catch {
        return false;
    }
}

export function VerifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        return decoded;
    } catch {
        return false;
    }
}