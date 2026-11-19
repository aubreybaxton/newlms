import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({

    name: String,
    contact: Number,

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }


});

const admin = mongoose.model("admin", adminSchema);
export default admin;