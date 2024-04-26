const OrderSchema = require('../database/Schemas/OrderSchema');
const axios = require('axios');
async function httpRequest(id,quantity) {
    try {
        const URL = `http://localhost:3320/api//GetPro/${id}`;
        const response = await axios.post(URL, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        console.log(id);
        return CheckQuantité(response.data,quantity);
    } catch (error) {
        console.error(error);
    }
}
async function CheckQuantité(reponse,quantity) { 
    
}
async function RegisterOrders(req, res) {
    const { product, quantity } = req.body;
    try {
        product.array.forEach(prdt => {
            httpRequest(prdt,quantity)
        });
    } catch (err) {
        res.status(500).json(err);
    }
}










