const CategorySchema = require('../database/Schemas/CategorySchema');

async function AddCategory(req, res) {
	const { name, svg } = req.body;
	try {
		if (name && svg) {
			const checkCategory = await CategorySchema.findOne({ name });
			if (checkCategory) {
				return res.status(401).json('Categorie dèja existante');
			}
			const newCategory = new CategorySchema({
				name,
				svg
			});
			if (req.role === "admin") {
				newCategory.save()
					.then(() => res.status(200).json({ QueryDone: true }))
					.catch(() => res.status(401).json({ QueryDone: false }));
			} else {
				res.status(403).json({ QueryDone: false, message: 'admin privileges' });
			}
		} else {
			return res.status(401).json({ QueryDone: false , message : "feilds not "});
		}
	} catch (err) {
		res.status(500).json(err);
	}
}
async function EditCategory(req, res) {
	const { id } = req.params;
	const { name, svg } = req.body;

	try {
		const category = await CategorySchema.findById(id);
		if (!category) {
			return res.status(404).json('Categorie non trouvée');
		}

		if (req.role !== "admin") {
			return res.status(403).json('Accès refusé');
		}

		category.name = name || category.name;
		category.svg = svg || category.svg;

		await category.save();
		res.status(200).json('Categorie mise à jour avec succès');
	} catch (err) {
		res.status(500).json(err);
	}
}
async function DeleteCategory(req, res) {
	const { id } = req.params;

	try {
		const category = await CategorySchema.findById(id);
		if (!category) {
			return res.status(404).json('Categorie non trouvée');
		}

		if (req.role !== "admin") {
			return res.status(403).json('Accès refusé');
		}

		await category.remove();
		res.status(200).json('Categorie supprimée avec succès');
	} catch (err) {
		res.status(500).json(err);
	}
}
async function GetAllCategories(req, res) {
	try {
		const categories = await CategorySchema.find();
		res.status(200).json(categories);
	} catch (err) {
		res.status(500).json(err);
	}
}

module.exports = { AddCategory, EditCategory, DeleteCategory, GetAllCategories }