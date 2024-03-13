const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = mongoose.Schema(
    {
        profile: {
            type: Schema.Types.ObjectId,
            ref: 'ProfileSchema', // This should match the name of the model you're referencing
        },
        status: {
            type: Schema.Types.ObjectId,
            ref: 'StatusSchema', // This should match the name of the model you're referencing
        },
        notes: {
            type: String,
            required: true,
            trim: true,
        },
        rate: {
            type: String,
            required: true,
            trim: true,
        },
        clientName: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("CardsSchema", CardSchema);