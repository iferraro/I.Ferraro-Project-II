const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    judge: String,
    eval: String,
    commentary: String
}, {
    timestamps: true
});

const postSchema = new mongoose.Schema({
    image: String,
    contributor: {type: mongoose.Schema.Types.ObjectId, ref: "Contributor"},
    date: String,
    location: String,
    camera: String,
    description: String,
    ratings: [ratingSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema);

