
const StatusSchema = require("../models/status.model");
const CardSchema = require("../models/card.model");


const getStatus = async (req, res) => {
    try {
        const Status = await StatusSchema.find()
        if (Status)
            return res.status(200).json({ success: true, Status });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add user" });
    }
}

const addNewStatus = async (req, res) => {
    try {
        const { value } = req.body
        if (!value) {
            return res.status(400).json({ message: 'fill all fields' })
        }

        const Status = new StatusSchema({ value });
        Status.save()
        if (Status)
            return res.status(200).json({ success: true, status: Status });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add user" });
    }
}

async function getCardByQueryHandler(status, profile) {
    try {
        let filterCondition;

        if (status) {
            filterCondition = { status }
        }
        else {
            filterCondition = { profile }
        }
        let cardsWithGivenCondition = await CardSchema.find(filterCondition)
            .populate({ path: "status", select: "_id value" })
            .populate({ path: "profile", select: "_id value" });

        return cardsWithGivenCondition;
    } catch (error) {
        console.error("Error fetching profiles by status:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

const getCardByQuery = async (req, res) => {
    try {
        if (!req.query.hasOwnProperty('status') && !req.query.hasOwnProperty('profile')) {
            return res.status(400).json({ message: 'atleat one params is re' })
        }
        const { status, profile } = req.query
        if (!status && !profile) {
            return res.status(400).json({ message: 'atleat one params is re' })
        }

        const results = await getCardByQueryHandler(status, profile)
        if (results)
            return res.status(200).json({ success: true, results });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add user" });
    }
}

// Usage example


module.exports = { getStatus, addNewStatus, getCardByQuery }
