const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

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
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    tel: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                return /^\+\d+$/.test(value);
            },
            message: props => `${props.value} n'est pas un numéro de téléphone valide. Le numéro doit commencer par '+' suivi uniquement de chiffres.`
        }
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