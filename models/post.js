const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    headline: String,
    image: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
}, {
    timestamps: true
});

module.exports = model("Post", postSchema);

