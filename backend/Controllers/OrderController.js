const OrderSchema = require('../database/Schemas/OrderSchema');
const axios = require('axios');

async function checkQuantity(response, quantity) {
    let totalPrice = [];
    for (let i = 0; i < response.length; i++) {
        let total = 0;
        if (quantity[i] > response[i].quantite) {
            return false;
        }
        const discountedPrice = response[i].price - (response[i].price * (response[i].promo / 100));
        total += discountedPrice * quantity[i];
        totalPrice.push(total);
        console.log(total);
    }
    console.log(totalPrice);
    return totalPrice;
}

async function httpRequest(product, quantity) {
    try {
        const URL = `http://localhost:3320/api/Products`;
        const response = await axios.post(URL, { product: product });
        return checkQuantity(response.data, quantity);
    } catch (error) {
        console.error(error);
        throw new Error('Erreur lors de la requête HTTP.');
    }
}

async function registerOrders(req, res) {
    const { products, quantities } = req.body;

    try {
        const total = await httpRequest(products, quantities);

        if (total === false) {
            return res.status(400).json({ message: 'Quantité invalide pour un produit.' });
        }

        // Parcourir chaque produit pour l'enregistrer individuellement
        for (let i = 0; i < products.length; i++) {
            const newOrder = new OrderSchema({
                user: req.user,
                date: new Date(),
                status: 'Pending',
                product: products[i],
                quantity: quantities[i],
                finalPrice: total[i]  // Utilisez le même prix total pour chaque produit
            });

            // Enregistrez le nouvel ordre dans la base de données
            await newOrder.save();
        }

        // Si tout s'est bien passé, retournez une réponse réussie
        res.status(200).json('Produits ajoutés avec succès');
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
    }
}

module.exports = { registerOrders };
