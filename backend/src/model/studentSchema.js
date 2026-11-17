const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name: String,
    contact: Number,
    gender: String,
    email: String,
    password: String,
    cours: String,
    batch: String
    
});

const student = mongoose.model("student", studentSchema);
module.exports = student;