const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    judge: String,
    eval: {type: Number, min: 1, max: 5},
    commentary: String
}, {
    timestamps: true
});

const postSchema = new mongoose.Schema({
    image: String,
    contributor: {type: mongoose.Schema.Types.ObjectId, ref: "Contributor"},
    date: Date,
    location: String,
    camera: String,
    description: String,
    ratings: [ratingSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema);

