const path = require('path');
const fs = require('fs');
const CategorySchema = require('../database/Schemas/CategorySchema');
const ProductSchema = require('../database/Schemas/ProductSchema');
const RatingSchema = require('../database/Schemas/RatingSchema');
const cloudinary = require('../utils/cloudinary');
const DeleteImg = require("../utils/DeleteImg");



async function AddProduct(req, res) {
	// console.log(req.body);
	const { name, description, price, categorie, type, ratings, quantity, promo } = req.body;
	const image = "uploads/" + req.filename;
	if (req.role != 'admin')
		return res.status(401);
	try {
		if (name && description && price && categorie && quantity) {
			const checkProduct = await ProductSchema.findOne({ name });
			if (checkProduct) {
				return res.status(400).json({ message: 'ALREADY_EXIST' });
			}
			const Category = await CategorySchema.findOne({ name: categorie }) || {};
			if (!Object.keys(Category).length) {
				return res.status(400).json({ message: "INVALID_CATEGORY" });
			}
			const result = await cloudinary.uploader.upload(image, {
				folder: "products",
				// width: 300,
				// crop: "scale"
			}
			);
			const newProduct = await new ProductSchema({
				name,
				description,
				price,
				categorie: Category._id,
				imagepath: {
					public_id: result.public_id,
					url: result.secure_url
				},
				quantity: quantity || 0,
				promo: promo || 0
			});
			if (req.role === "admin") {
				newProduct.save()
					.then(() =>
						res.status(200).json({ message: "ADDED" }))
					.catch(() => {
						cloudinary.uploader.destroy(result.public_id);
						res.status(401).json({ message: "failed" });
					})

			}
		} else {
			return res.status(400).json({ message: "FEILDS_EMPTY" });
		}
	} catch (err) {
		return res.status(500).json({ message: "ERR" });
	}
	finally {
		fs.unlink(path.join(process.cwd(), image), (err) => {
			// if (err)
			// 	console.log(err);
		});
	}
}
async function GetProducts(req, res) {
	var { flashsales } = req.query;
	try {
		const products = await ProductSchema.find({ ...(flashsales && { promo: { $gt: 10 } }) }, { ratings: 0 });
		const productsWithRatingCounts = await Promise.all(products.map(async (product) => {
			const ratingCount = await RatingSchema.countDocuments({ product: product._id });
			const Category = await CategorySchema.find({ _id: product.categorie })
			return { ...product.toObject(), ratingCount, categorie: Category[0]?.name };
		}));
		return res.status(200).json(productsWithRatingCounts);
	} catch (err) {
		console.log(err)
		return res.status(500).json({ QueryDone: false, message: "ERR" });
	}
}
async function GetProduct(req, res) {
	const { id } = req.params;
	try {
		const product = await ProductSchema.findOne({ _id: id }, { ratings: 0 });
		if (product) {
			const ratings = await RatingSchema.countDocuments({ product: product._id });
			return res.status(200).json({ ...product.toObject(), ratings });
		} else {
			return res.status(401).json({ QueryDone: false, message: "ERR" });
		}
	} catch (err) {
		res.status(500).json(err);
	}
}

async function ProductsApi(req, res) {
	const { product } = req.body;

	ProductSchema.find({ _id: { $in: product } })
		.then(prdt => res.status(200).json(prdt))
		.catch(err => res.status(400).json({ err }));
}
async function EditProduct(req, res) {
	const { id } = req.params;
	var { name, description, price, categorie, type, ratings, quantity, promo } = req.body;

	if (req.role !== "admin") {
		return res.status(403);
	}
	try {
		const product = await ProductSchema.findById(id);
		if (!product)
			return res.status(404);
		// if (image) {
		// 	const result = await cloudinary.uploader.upload(image, {
		// 		folder: "products",
		// 	});
		// 	product.imagepath = {
		// 		public_id: result.public_id,
		// 		url: result.secure_url
		// 	};
		// }

		categorie = await CategorySchema.findOne({ name: categorie });

		product.name = name || product.name;
		product.description = description || product.description;
		product.price = price || product.price;
		product.categorie = categorie._id || product.categorie;
		product.type = type || product.type;
		product.ratings = ratings || product.ratings;
		product.quantity = quantity || product.quantity;
		product.promo = promo || product.promo;

		await product.save();
		res.status(200).json('Product Updated');
	} catch (err) {
		res.status(500).json(err);
	}
}
async function DeleteProduct(req, res) {
	const { id } = req.params;
	console.log(id);
	if (req.role !== "admin") {
		return res.status(403);
	}
	try {
		const product = await ProductSchema.findById(id);
		if (!product) {
			return res.status(404);
		}
		await cloudinary.uploader.destroy(product.imagepath.public_id);
		await product.deleteOne();
		res.status(200).json({ QueryDone: true });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
}

module.exports = { AddProduct, GetProducts, GetProduct, ProductsApi, EditProduct, DeleteProduct };
