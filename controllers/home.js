const Contributor = require('../models/contributor');
const Post = require("../models/post");
module.exports = {
  index,
};

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate("contributor").exec();
    res.render("homepage", { tabTitle: "Blog of the Beetle", heading: "Welcome to Blog of the Beetle", posts });
  } catch(err) {
    res.send(err);
  }
}



