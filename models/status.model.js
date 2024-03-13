const mongoose = require("mongoose");

const StatusSchema = mongoose.Schema(
    {
        value: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("StatusSchema", StatusSchema);