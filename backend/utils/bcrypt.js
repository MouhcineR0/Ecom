const bcrypt = require('bcrypt');
const ErrorHandler = require('../Controllers/ErrorHandler');

function HashPassword(password) {
    const salt = 10; // default
    try {
        return bcrypt.hashSync(password, salt);
    }
    catch {
        return false;
    }
}

function ComparePassword(Password, HashPassword) {
    try {
        return bcrypt.compareSync(Password, HashPassword);
    }
    catch {
        return false;
    }
}

module.exports = { HashPassword, ComparePassword };