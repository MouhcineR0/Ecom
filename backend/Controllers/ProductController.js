const ProductSchema = require('../database/Schemas/ProductSchema');

async function AddProduct(req, res) {
    const { name, description, price, categorie, image, type, ratings, quantity, promo } = req.body;
    try {
        if (name && description && price && categorie && image && type && ratings && quantity && promo) {
            const checkProduct = ProductSchema.findOne({ name });
            if (checkProduct) {
                res.status(401).json('Produit dèja en Stock');
            }
            const newProduct = new ProductSchema({
                name, description, price, categorie, image, type, ratings, quantity, promo
            });
            if (req.role === "admin") {
                newProduct.save()
                    .then(() => console.log('SUCCESS'))
                    .catch(() => console.log('FAILED'));
                res.status(200).json('Produit Ajouté avec succés');
            }
        } else {
            res.status(401).json('tous les champs sont obligatoire');
        }
    } catch (err) {
        res.status(500).json("Connection Impossible");
    }
}

