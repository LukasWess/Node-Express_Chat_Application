const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [truew, "Email already exists"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        unique: [true, "Phone already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }, 
    
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);