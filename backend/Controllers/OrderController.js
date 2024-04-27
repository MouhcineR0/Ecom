const OrderSchema = require('../database/Schemas/OrderSchema');
const axios = require('axios');

async function CheckQuantité_claculPrice(response, quantite) {
    let totalPrice = 0;
    for (let i = 0; i < response.length; i++) {
        let total = 0;
        if (quantite > response[i].quantite) {
            return false;
        }
        const discountedPrice = response[i].price - (response[i].price * (response[i].promo / 100));
        total = discountedPrice * response[i].quantity;
        totalPrice = total;
    }
    console.log(totalPrice);
    return totalPrice;
}

async function httpRequest(items, quantity) {
    try {
        const URL = `http://localhost:3320/api/Products`;
        const response = await axios.post(URL, { product: items });
        return CheckQuantité_claculPrice(response.data, quantity);
    } catch (error) {
        console.error(error);
        throw new Error('Erreur lors de la requête HTTP.');
    }
}

async function registerOrders(req, res) {
    const { items } = req.body;

    try {




        let ids_Orders = [];
        for (let i = 0; i < items.length; i++) {
            const total = await httpRequest(items[i].id.toString(), items[i].quantity);
            if (total === false) {
                return res.status(400).json({ message: 'Quantité invalide pour un produit.' });
            }
            const newOrder = new OrderSchema({
                user: req.user,
                date: new Date(),
                status: 'Pending',
                product: items[i].id,
                quantity: items[i].quantity,
                finalPrice: total
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
