const mongoose = require('mongoose');

const contributorSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Contributor", contributorSchema);
