const ProductSchema = require('../database/Schemas/ProductSchema');
const RatingSchema = require('../database/Schemas/RatingSchema');
const cloudinary = require('../utils/cloudinary');

async function AddProduct(req, res) {
    const { name, description, price, categorie, image, type, ratings, quantity, promo } = req.body;
    try {
        if (name && description && price && categorie && image && type && ratings && quantity && promo) {
            const checkProduct = await ProductSchema.findOne({ name });
            if (checkProduct) {
                return res.status(401).json('Produit dèja en Stock');
            }
            const result = await cloudinary.uploader.upload(image, {
                folder: "products",
                // whidth: 300,
                // crop: "scale"
            }
            );
            const newProduct = await new ProductSchema({
                name,
                description,
                price,
                categorie,
                imagepath: {
                    public_id: result.public_id,
                    url: result.secure_url
                },
                type,
                ratings,
                quantity,
                promo
            });
            if (req.role === "admin") {
                newProduct.save()
                    .then(() =>
                        res.status(200).json('Produit Ajouté avec succés'))
                    .catch(() => res.status(401).json('FAILED'));

            }
        } else {
            return res.status(401).json('tous les champs sont obligatoire');
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
async function GetProducts(req, res) {
    try {
        const products = await ProductSchema.find({}, { ratings: 0 });
        const productsWithRatingCounts = await Promise.all(products.map(async (product) => {
            const ratingCount = await RatingSchema.countDocuments({ product: product._id });
            return { ...product.toObject(), ratingCount };
        }));
        return res.status(200).json(productsWithRatingCounts);
    } catch (err) {
        return res.status(500).json({ err: 'Erreur lors de la récupération de produit réssayez' });
    }
}
async function GetProduct(req, res) {
    const { id } = req.params;
    try {
        const products = await ProductSchema.findOne({ _id: id });
        if (products) {
            return res.status(200).json({ products });
        } else {
            return res.status(401).json('Erreur lors de la récupération des Produits réssayez');
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
    const { name, description, price, categorie, image, type, ratings, quantity, promo } = req.body;

    try {
        const product = await ProductSchema.findById(id);
        if (!product) {
            return res.status(404).json('Produit non trouvé');
        }

        if (req.role !== "admin") {
            return res.status(403).json('Accès refusé');
        }

        if (image) {
            const result = await cloudinary.uploader.upload(image, {
                folder: "products",
            });
            product.imagepath = {
                public_id: result.public_id,
                url: result.secure_url
            };
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.categorie = categorie || product.categorie;
        product.type = type || product.type;
        product.ratings = ratings || product.ratings;
        product.quantity = quantity || product.quantity;
        product.promo = promo || product.promo;

        await product.save();
        res.status(200).json('Produit mis à jour avec succès');
    } catch (err) {
        res.status(500).json(err);
    }
}
async function DeleteProduct(req, res) {
    const { id } = req.params;

    try {
        const product = await ProductSchema.findById(id);
        if (!product) {
            return res.status(404).json('Produit non trouvé');
        }

        if (req.role !== "admin") {
            return res.status(403).json('Accès refusé');
        }

        await cloudinary.uploader.destroy(product.imagepath.public_id);
        await product.remove();
        res.status(200).json('Produit supprimé avec succès');
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { AddProduct, GetProducts, GetProduct, ProductsApi, EditProduct, DeleteProduct };
