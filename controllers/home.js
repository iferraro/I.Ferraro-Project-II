const Contributor = require('../models/contributor');
const Post = require("../models/post");
module.exports = {
  index,
};

async function index(req, res) {
  const posts = await Post.find({});
  console.log(posts);
  res.render("homepage", { tabTitle: "Blog of the Beetle", heading: "Welcome to Blog of the Beetle", posts });
  // if (user) {
  //   console.log(user);
  // }
}

