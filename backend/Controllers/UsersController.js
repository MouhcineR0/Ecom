const UserSchema = require('../database/Schemas/UserSchema');
const { ComparePassword, HashPassword } = require('../utils/bcrypt');
const { CreateToken } = require('../utils/jwt');
async function Login(req, res, next) {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const Exist = await UserSchema.findOne({ email });
            if (Exist) {
                if (ComparePassword(password, Exist.password)) {
                    const token = CreateToken(Exist.id, Exist.role);
                    return res.status(200).json({ message: 'SUCCESS', token });
                }
                return res.json({ message: 'FAILED' });
            }
            return res.json({ message: 'FAILED' });
        }
        return res.json({ message: 'FAILED' });
    }
    catch (e) {
        next(e);
    }
}
async function Signup(req, res, next) {
    try {
        const { email, password, firstname, lastname, tel, role } = req.body;
        const Role = role || 'client';
        if (email && password && firstname && lastname && tel && Role) {
            const available = await UserSchema.find({ email });
            if (available.length) {
                return res.json({ message: 'EMAIL_AVAILABLE' });
            }
            const HASHED_PW = HashPassword(password);
            const query = new UserSchema({
                firstname, lastname, email, tel, password: HASHED_PW, role: Role,
            });
            query.save()
                .then(() => console.log('SUCCESS'))
                .catch(() => console.log('FAILED'));
            res.status(200).json('ajouté');
            return res.json({ message: 'SUCCESS' });
        }
        return res.json({ message: 'FAILED' });
    }
    catch (e) {
        return next(e);
    }
}
module.exports = { Login, Signup };