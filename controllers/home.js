const Contributor = require('../models/contributor');

module.exports = {
  index
};

async function index(req, res) {
  // find() function for images array
  res.render("homepage", { tabTitle: "Blog of the Beetle", heading: "Welcome to Blog of the Beetle" });
  // if (user) {
  //   console.log(user);
  // }
}

