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
    }

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
        let ids_Orders = [];
        // Parcourir chaque produit pour l'enregistrer individuellement
        for (let i = 0; i < products.length; i++) {
            let id = '';
            const newOrder = new OrderSchema({
                user: req.user,
                date: new Date(),
                status: 'Pending',
                product: products[i],
                quantity: quantities[i],
                finalPrice: total[i]
            });

            await newOrder.save();
            let newOrderID = newOrder._id.toString();
            ids_Orders.push(newOrderID);
        }

        res.status(200).json(ids_Orders);
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
    }
}

module.exports = { registerOrders };
