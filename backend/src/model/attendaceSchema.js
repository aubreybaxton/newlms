
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

    student: {
        type: String,
        required: true
    },

    batch: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Present", "Absent"],
        default: "Absent"
    },

    method: {
        type: String,
        enum: ["QR", "Manual"],
        required: true
    },

    markedAt: {
        type: Date,
        default: Date.now
    }

})



const attendance = mongoose.model("attendance", attendanceSchema);

export default attendance;
