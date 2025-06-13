const UserSchema = require('../database/Schemas/UserSchema');
const { ComparePassword, HashPassword } = require('../utils/bcrypt');


const { CreateToken } = require('../utils/jwt');
async function Login(req, res) {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const Exist = await UserSchema.findOne({ email });
            if (Exist) {
                if (ComparePassword(password, Exist.password)) {
                    const token = CreateToken({
                        id: Exist.id, role: Exist.role, firstname: Exist.firstname,
                        lastname: Exist.lastname, tel: Exist.tel
                    });
                    return res.status(200).json({
                        message: 'SUCCESS',
                        email,
                        id: Exist._id,
                        firstname: Exist.firstname,
                        lastname: Exist.lastname,
                        role: Exist.role,
                        token: `${token}`
                    });
                }
                return res.status(401).json({ message: 'FAILED' });
            }
            return res.status(401).json({ message: 'FAILED' });
        }
        return res.status(401).json({ message: 'SERVER_ERROR' });
    }
    catch (e) {
        return res.status(401).json({ message: 'SERVER_ERROR' });
    }
}
async function Signup(req, res) {
    try {
        const { email, password, firstname, lastname, tel, role } = req.body;
        const Role = role || 'client';
        if (email && password && firstname && lastname && tel && Role) {
            // useless ghankhdem ghir b catch mn be3d w nfixih howa w phone number
            const available = await UserSchema.find({ email });
            if (available.length) {
                return res.json({ message: 'FAILED' });
            }
            const HASHED_PW = HashPassword(password);
            const query = new UserSchema({
                firstname, lastname, email, tel, password: HASHED_PW, role: Role,
            });
            await query.save();
            return res.json({ message: 'SUCCESS' });
        }
        return res.json({ message: 'FAILED' });
    }
    catch (e) {
        return res.json({ message: 'FAILED' });
    }
}
module.exports = { Login, Signup };