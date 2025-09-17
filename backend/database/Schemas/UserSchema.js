const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return value.length > 2;
            }
        }
    },
    card: {
        
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return value.length > 2;
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
    },
    tel: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                return /^\d+$/.test(value);
            },
            message: props => `${props.value} Error Number Phone Regexp`
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
        default: Date.now()
    },
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model('Users', UserSchema);