const mongoose = require('mongoose');

module.exports = async () => {
    try {
        mongoose.connect(process.env.DB_URL);
        const db = mongoose.connection;

        // Check State of Connection
        db.once('open', () => {
            console.log('DB Connected');
        });
        db.on('error', () => console.log('mongodb error connection'));
    } catch (error) {
        console.error('DB Error Connection: ', error);
    }
};
