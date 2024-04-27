const OrderSchema = require('../database/Schemas/OrderSchema');
const axios = require('axios');
async function checkQuantity(response, quantity) {
    let totalPrice = 0;

    for (i = 0; i < response.length; i++) {
        if (quantity[i] > response[i].quantite) {
            return false;
        }
        const discountedPrice = response[i].price - (response[i].price * (response[i].promo / 100));
        totalPrice += discountedPrice * quantity[i];
    }
    return totalPrice;
}
async function httpRequest(product, quantity) {
    try {
        const URL = `http://localhost:3320/api/Products`;
        const response = await axios.post(URL, { product: product });
        console.log(response.data);
        return checkQuantity(response.data, quantity);
    } catch (error) {
        console.error(error);
    }
}



async function registerOrders(req, res) {
    const { products, quantities } = req.body;

    try {
        const newOrders = [];
        const totalPricesArray = [];

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const quantity = quantities[i];
            const total = await httpRequest(product, quantity);
            if (total === false) {
                return res.status(400).json({ message: 'Quantité invalide pour un produit.' });
            }
            totalPricesArray.push(total);

            const newOrder = new OrderSchema({
                user: req.user,
                date: new Date(),
                status: 'Pending',
                product: product,
                quantity: quantity,
                finalPrice: total
            });
            newOrders.push(newOrder);
        }

        // Enregistrement de toutes les nouvelles commandes dans la base de données
        OrderSchema.insertMany(newOrders)
            .then(() => res.status(200).json('Produits ajoutés avec succès'))
            .catch(() => res.status(401).json('impossible d\'ajouter en db'));
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

module.exports = { registerOrders };
