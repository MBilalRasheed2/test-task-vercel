const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema(
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

module.exports = mongoose.model("ProfileSchema", ProfileSchema);