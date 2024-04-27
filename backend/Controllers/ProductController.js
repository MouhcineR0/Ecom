const ProductSchema = require('../database/Schemas/ProductSchema');
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
        const products = await ProductSchema.find({});
        if (products) {
            return res.status(200).json(products);
        } else {
            return res.status(401).json('Erreur lors de la récupération de produit réssayez');
        }
    } catch (err) {
        res.status(500).json(err);
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
module.exports = { AddProduct, GetProducts, GetProduct, ProductsApi };
