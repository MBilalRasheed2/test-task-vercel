
const ProfileSchema = require("../models/profile.model");
const { profileData } = require('../data/ProfileData')

const getProfile = async (req, res) => {
    try {
        const Profiles = await ProfileSchema.find()
        if (Profiles)
            return res.status(200).json({ success: true, Profiles });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add user" });
    }
}

const addNewProfile = async (req, res) => {
    try {
        const { value } = req.body
        if (!value) {
            return res.status(400).json({ message: 'fill all fields' })
        }

        const addNewProfile = new ProfileSchema({ value });
        addNewProfile.save()
        if (addNewProfile)
            return res.status(200).json({ success: true, profile: addNewProfile });

    } catch (err) {
        return res.status(400).json({ message: "Failed to add user" });
    }
}

module.exports = { getProfile, addNewProfile }
