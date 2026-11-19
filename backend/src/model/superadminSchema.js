import mongoose from "mongoose";



const superadminSchema = new mongoose.Schema({
        id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});

const superadmin = mongoose.model("superadmin", superadminSchema);
export default superadmin;