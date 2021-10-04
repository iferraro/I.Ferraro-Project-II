const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    contributor: {type: mongoose.Schema.Types.ObjectId, ref: "Contributor"},
    date: Date,
    location: String,
    camera: String,
    description: String,

}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema);

