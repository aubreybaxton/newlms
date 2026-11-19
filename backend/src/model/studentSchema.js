import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({

    name: String,
    contact: Number,
    gender: String,
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
    },
    cours: String,
    batch: String
    
});

const student = mongoose.model("student", studentSchema);
export default student;