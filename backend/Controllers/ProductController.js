const ProductSchema = require('../database/Schemas/ProductSchema');
const cloudinary = require('../utils/cloudinary');
async function AddProduct(req, res) {
    const { name, description, price, categorie, image, type, ratings, quantity, promo } = req.body;
    try {
        if (name && description && price && categorie && image && type && ratings && quantity && promo) {
            const result = await cloudinary.uploader.upload(image, {
                folder: "products",
                // whidth: 300,
                // crop: "scale"
            }
            );
            const checkProduct = await ProductSchema.findOne({ name });
            if (checkProduct) {
                res.status(401).json('Produit dèja en Stock');
            }
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
            res.status(401).json('tous les champs sont obligatoire');
        }
    } catch (err) {
        res.status(500).json("Connection Impossible");
    }
}
module.exports = { AddProduct };
