import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({



    course: {
        type: String,
        required: true
    },

    batch: {
        type: String,
        required: true
    },

    scheduledAt: {
        type: Date,
        unique: true,
        default: Date.now

    },

    qrToken: {
        type: String,
        required: true,
        unique: true
    },

    qrExpiresAt: {
        type: Date,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    }
})

const batch = mongoose.model("batch", batchSchema);

export default batch;