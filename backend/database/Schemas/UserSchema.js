const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'client',    // client || admin 
        validate: {
            validator: (value) => {
                const Roles = ['client', 'admin'];
                return Roles.includes(value);
            },
            message: 'Not Valid Role'
        }
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

module.exports = mongoose.model('Users', UserSchema);