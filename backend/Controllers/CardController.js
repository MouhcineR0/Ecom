const CardSchema = require("../database/Schemas/CardSchema");
const ProductSchema = require('../database/Schemas/ProductSchema');

const axios = require('axios');

async function addToCard(req, res) {
	const { role } = req;
	const { Prod_id, User_id } = req.body;
	if (role != 'client')
		return res.status(401).json({ QueryDone: false });
	try {
		if (Prod_id && User_id) {
			const data = await CardSchema.findOne({ user: User_id, product: Prod_id });
			if (data && Object.keys(data).length) {
				console.log("hna");
				data.Quantity += 1;
				console.log(data)
				await data.save();
				return res.json({ QueryDone: true });
			}
			else {
				await CardSchema.create({
					user: User_id,
					product: Prod_id,
				})
				return res.json({ QueryDone: true });
			}
		}
		return res.status(400).json({ QueryDone: false });
	}
	catch (e) {
		console.log(e);
		return res.status(500).json({ QueryDone: false });
	}
}

async function GetCard(req, res) {
	const { role, user } = req;
	if (role != 'client')
		return res.status(401).json({ QueryDone: false });
	try {
		const data = await CardSchema.find({ user });
		const NewData = await Promise.all(data?.map(async (Card) => {
			const prod = await axios.get(`${process.env.VITE_API_BASE_URL}/GetPro/${Card.product}`);
			return { ...Card.toObject(), product: prod?.data };
		}))
		return res.json({ QueryDone: true, data: NewData });
	}
	catch (e) {
		return res.status(500).json({ QueryDone: false });
	}
}

async function DeleteCard(req, res) {
	const { role } = req;
	const { id } = req.params;
	console.log(req.params);
	if (role != 'client')
		return res.status(401).json({ QueryDone: false });
	try {
		await CardSchema.deleteOne({ product: id });
		return res.json({ QueryDone: true });
	}
	catch {
		return res.status(500).json({ QueryDone: false });
	}
}

module.exports = { addToCard, GetCard, DeleteCard };