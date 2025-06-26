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
						lastname: Exist.lastname, tel: Exist.tel, email: Exist.email, address: Exist.address
					});
					return res.status(200).json({
						message: 'SUCCESS',
						email,
						id: Exist._id,
						firstname: Exist.firstname,
						lastname: Exist.lastname,
						role: Exist.role,
						address: Exist.address,
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

async function UpdateUser(req, res) {
	const { firstname, lastname, email, address, curr_password, newpass1 } = req.body;
	try {
		const User = await UserSchema.findOne({ email });
		console.log(User);
		if (!Object.keys(User).length)
			return res.status(401);
		var datenow = new Date();
		console.log(User.updated_at);
		console.log((datenow - User.updated_at) / (1000 * 60 * 60 * 24));
		if (User.updated_at && (datenow - User.updated_at) / (1000 * 60 * 60 * 24) < 2) {
			return res.json({ QueryDone: false, message: 'UPDATED_AT_ERR' })
		}
		if (curr_password && newpass1) {
			if (!ComparePassword(curr_password, User.password)) {
				return res.json({ QueryDone: false, message: 'WRONG_PASS' })
			}
			const newpass_hash = HashPassword(newpass1);
			await UserSchema.updateOne({ email }, { $set: { password: newpass_hash } });
		}
		await UserSchema.updateOne({ email }, {
			$set: {
				firstname: firstname || User.firstname,
				lastname: lastname || User.lastname,
				address: address || User.address,
				updated_at: new Date()
			},
		}, { runValidators: true }
		);
		return res.json({ message: "User Edited !!", QueryDone: true });
	}
	catch (e) {
		return res.status(400).json({ message: "Error Edtiting user", QueryDone: false });
	}
}

async function GetUsers(req, res) {
	if (req.role == 'admin') {
		const Users = await UserSchema.find({}, { password: false, updated_at: false });
		return res.json({ Users });
	}
	return res.status(401)
}

module.exports = { Login, Signup, UpdateUser, GetUsers };